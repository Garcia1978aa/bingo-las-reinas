import Link from "next/link"
import { Heart, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black py-4 border-t border-[#d63400]/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-[#d63400] font-bold mb-2">BINGO Las Reinas del Cartón</p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm mb-3">
            <Link href="/" className="text-white hover:text-[#d63400] transition-colors">
              Inicio
            </Link>
            <Link href="/que-demonios-es-esto" className="text-white hover:text-[#d63400] transition-colors">
              Qué demonios es esto
            </Link>
            <Link href="/galeria" className="text-white hover:text-[#d63400] transition-colors">
              Galería
            </Link>
            <Link href="/ubicacion" className="text-white hover:text-[#d63400] transition-colors">
              Ubicación
            </Link>
            <Link href="/contacto" className="text-white hover:text-[#d63400] transition-colors">
              Contacto
            </Link>
          </div>

          {/* Añadir sección de enlaces legales */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs mb-3">
            <Link href="/legal/terminos" className="text-gray-400 hover:text-[#d63400] transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="/legal/privacidad" className="text-gray-400 hover:text-[#d63400] transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/legal/cookies" className="text-gray-400 hover:text-[#d63400] transition-colors">
              Política de Cookies
            </Link>
            <Link href="/legal/aviso" className="text-gray-400 hover:text-[#d63400] transition-colors">
              Aviso Legal
            </Link>
          </div>

          {/* Iconos de redes sociales */}
          <div className="flex justify-center space-x-3 mb-3">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/bingolasreinasdelcarton?igsh=MXBrN3J6d3hjd2Nscw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:scale-110 transition-transform duration-300"
              aria-label="Instagram"
            >
              <Instagram className="text-white" size={20} />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61575123741586"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1877F2] hover:bg-[#0e6edf] hover:scale-110 transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="text-white" size={20} />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@bingolasreinasdelcarton?lang=es"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black hover:bg-gray-900 hover:scale-110 transition-all duration-300 border border-white"
              aria-label="TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
              </svg>
            </a>
          </div>

          <p className="text-white text-xs">
            © {new Date().getFullYear()} BINGO Las Reinas del Cartón. Hecho con{" "}
            <Heart className="inline text-[#d63400]" size={12} /> en Madrid
          </p>
        </div>
      </div>
    </footer>
  )
}
