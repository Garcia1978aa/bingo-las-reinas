"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

// Lista completa de páginas para el menú
const menuItems = [
  { name: "Inicio", href: "/" },
  { name: "Qué demonios es esto", href: "/que-demonios-es-esto" },
  { name: "Programación", href: "/programacion" },
  { name: "Dress Code", href: "/dress-code" },
  { name: "Ubicación", href: "/ubicacion" },
  { name: "Contacto", href: "/contacto" },
]

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Manejar el scroll para cambiar el estilo del menú
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-black/50 backdrop-blur-sm"
      } border-b border-[#FDFD96]/30`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Espacio vacío a la izquierda para mantener el centrado */}
          <div className="flex-shrink-0 w-20"></div>

          {/* Desktop Menu - Centrado */}
          <div className="hidden md:flex justify-center flex-grow">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-300 font-medium ${
                    pathname === item.href ? "text-[#FDFD96]" : "text-white hover:text-[#FDFD96]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Botón de preventa - Siempre visible en desktop */}
          <div>
            <Link
              href="https://docs.google.com/forms/d/1wWSVk3xCa9KFqSfQ9P39lTqlmTHB5-cT-50HzKej4w0/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FDFD96] text-black px-4 py-2 rounded-full font-bold hover:shadow-[0_5px_15px_rgba(253,253,150,0.4)] transition-all duration-300 hidden md:inline-block"
            >
              PREVENTA
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#FDFD96] transition-colors"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-[#FDFD96]/30 animate-[fadeIn_0.3s]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 hover:bg-black/50 transition-colors duration-300 font-medium ${
                  pathname === item.href ? "text-[#FDFD96]" : "text-white hover:text-[#FDFD96]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://docs.google.com/forms/d/1wWSVk3xCa9KFqSfQ9P39lTqlmTHB5-cT-50HzKej4w0/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 mt-4 bg-[#FDFD96] text-black rounded-full font-bold text-center"
              onClick={() => setIsOpen(false)}
            >
              PREVENTA
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
