"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function QueDemoniosEsEstoPage() {
  // Añadir fuente Playfair Display
  useEffect(() => {
    const link = document.createElement("link")
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Montserrat:wght@400;700&display=swap"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [])

  return (
    <div
      className="min-h-screen text-white py-12 relative"
      style={{
        fontFamily: "'Montserrat', sans-serif",
        background: "#000000",
      }}
    >
      {/* Imagen de fondo actualizada */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image src="/images/que-demonios-es-esto-bg-new.png" alt="Fondo" fill style={{ objectFit: "cover" }} priority />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Título H1 */}
        <h1
          className="text-3xl md:text-5xl font-bold text-center mb-4 text-[#E6E18F]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Cariño, esto no es un bingo. Esto es tu nueva obsesión
        </h1>

        {/* Subtítulo H2 */}
        <h2 className="text-xl md:text-2xl text-center mb-8 text-white italic">
          Una intervención divina para esas noches en que el brunch se te queda corto y la therapy está demasiado cara
        </h2>

        {/* Cuerpo del texto */}
        <div className="mb-12 text-center">
          <p className="text-white mb-6">
            ¿Alguna vez has soñado con ataviarte con tus mejores galas, esas gafas de sol que piden ser lucidas de noche
            y esa manicura roja que clama a gritos un Martini en mano? Por fin ha llegado tu momento. Bingo Las Reinas
            del Cartón es como si Studio 54 y el bingo de tu abuela tuvieran un baby en Madrid con Pedro Almodóvar de
            padrino. En definitiva, es el lugar donde:
          </p>
        </div>

        {/* Tres cajas para imágenes con el mismo efecto que en Galería */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {/* Imagen 1 */}
          <div className="bg-black/30 p-3 rounded-xl overflow-hidden group cursor-pointer border border-[#d63400]/30 hover:border-[#d63400] transition-all duration-300">
            <div className="relative h-64 rounded overflow-hidden">
              <Image
                src="/images/sara-montiel.jpeg"
                alt="Sara Montiel"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">{/* Nombre de imagen eliminado */}</div>
              </div>
            </div>
            <div className="text-center mt-3">
              <p className="text-[#E6E18F] font-medium">Tus nuevos vestidos encuentran por fin su público adecuado</p>
            </div>
          </div>

          {/* Imagen 2 - Reemplazada con Pedro y Madonna */}
          <div className="bg-black/30 p-3 rounded-xl overflow-hidden group cursor-pointer border border-[#d63400]/30 hover:border-[#d63400] transition-all duration-300">
            <div className="relative h-64 rounded overflow-hidden">
              <Image
                src="/images/pedro-madonna-toast.jpeg"
                alt="Pedro y Madonna brindando"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">{/* Nombre de imagen eliminado */}</div>
              </div>
            </div>
            <div className="text-center mt-3">
              <p className="text-[#E6E18F] font-medium">Los Martinis llegan a la par que los remordimientos</p>
            </div>
          </div>

          {/* Imagen 3 - Reemplazada con Kris Jenner */}
          <div className="bg-black/30 p-3 rounded-xl overflow-hidden group cursor-pointer border border-[#d63400]/30 hover:border-[#d63400] transition-all duration-300">
            <div className="relative h-64 rounded overflow-hidden">
              <Image
                src="/images/kris-jenner-martini.jpeg"
                alt="Kris Jenner con martini"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">{/* Nombre de imagen eliminado */}</div>
              </div>
            </div>
            <div className="text-center mt-3">
              <p className="text-[#E6E18F] font-medium">Las amistades se sellan al grito de "¡BINGO!"</p>
            </div>
          </div>
        </div>

        {/* Caja para texto debajo de las imágenes - Más pequeña y ajustada a la izquierda */}
        <div className="max-w-md ml-0 mr-auto bg-[#FDFD96]/20 p-5 rounded-xl mb-12 border border-[#FDFD96]">
          <h3 className="text-xl font-bold mb-4 text-[#FDFD96]">Lo que te espera en Bingo Las Reinas del Cartón:</h3>

          <ul className="space-y-2 text-white">
            <li className="flex items-start">
              <div className="bg-[#d63400] text-white rounded-full w-2 h-2 flex-shrink-0 mt-2 mr-3"></div>
              <span>
                Rondas de bingo, conciertos de las artistas más icónicas, premios, lip sync, concurso de outfits, show
                drag
              </span>
            </li>
            <li className="flex items-start">
              <div className="bg-[#d63400] text-white rounded-full w-2 h-2 flex-shrink-0 mt-2 mr-3"></div>
              <span>Miradas de desaprobación (aka de envidia)</span>
            </li>
            <li className="flex items-start">
              <div className="bg-[#d63400] text-white rounded-full w-2 h-2 flex-shrink-0 mt-2 mr-3"></div>
              <span>Complots de vestuario en el baño</span>
            </li>
            <li className="flex items-start">
              <div className="bg-[#d63400] text-white rounded-full w-2 h-2 flex-shrink-0 mt-2 mr-3"></div>
              <span>Una noche de la que hablarán hasta tus nietas</span>
            </li>
            <li className="flex items-start">
              <div className="bg-[#d63400] text-white rounded-full w-2 h-2 flex-shrink-0 mt-2 mr-3"></div>
              <span>Amistades espontáneas que durarán toda la vida</span>
            </li>
            <li className="flex items-start">
              <div className="bg-[#d63400] text-white rounded-full w-2 h-2 flex-shrink-0 mt-2 mr-3"></div>
              <span>Y mucha resaca emocional</span>
            </li>
          </ul>
        </div>

        {/* Botón de reserva */}
        <div className="text-center mb-8">
          <Link
            href="https://docs.google.com/forms/d/1wWSVk3xCa9KFqSfQ9P39lTqlmTHB5-cT-50HzKej4w0/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#d63400] text-white px-6 py-3 rounded-full text-base font-bold hover:bg-[#d63400]/80 transition-all duration-300 hover:-translate-y-1"
          >
            RESERVA TU CARTÓN
          </Link>
        </div>
      </div>
    </div>
  )
}
