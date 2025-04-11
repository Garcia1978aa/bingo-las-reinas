"use client"

import { useEffect } from "react"
import Image from "next/image"

export default function ProgramacionPage() {
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
    <div className="min-h-screen bg-[#000000] text-white py-12 relative">
      {/* Fondo decorativo con las imágenes - Ajustado para que no pise el texto */}
      <div className="absolute inset-0 pointer-events-none" style={{ top: "80px" }}>
        <div className="relative w-full h-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PROGRAMACI%C3%93N%20%282%29-vA2DkLm86WTalOr899VCtzag6HCNto.png"
            alt="Itinerario de excesos glamurosos"
            fill
            style={{ objectFit: "contain", objectPosition: "top center" }}
            priority
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Espacio adicional para el título en la imagen */}
        <div className="h-48 md:h-64"></div> {/* Aumentado el espacio para evitar superposición */}
        <p className="text-center text-xl mb-12 max-w-2xl mx-auto text-white">
          Una noche llena de glamour, risas, música y sorpresas. Aquí tienes el desglose minuto a minuto de lo que te
          espera.
        </p>
        <div className="bg-black/70 p-6 md:p-8 rounded-xl border border-[#d4af37] mb-12">
          {/* Timeline de eventos */}
          <div className="space-y-8">
            {/* Evento 1 */}
            <div className="relative pl-8 border-l-2 border-[#d4af37]">
              <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-[#d4af37]"></div>
              <div className="mb-2">
                <span className="text-white font-bold">18:00 - 18:30</span>
                <h3 className="text-xl font-bold text-[#d4af37]">DJ Set: "Se abre la noche, churri"</h3>
              </div>
              <p className="text-white">
                El warm-up para reinas y criaturas místicas. Música para entrar, posar y dejar claro que has venido a
                ser vista.
              </p>
            </div>

            {/* Evento 2 */}
            <div className="relative pl-8 border-l-2 border-[#d4af37]">
              <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-[#d4af37]"></div>
              <div className="mb-2">
                <span className="text-white font-bold">18:30 - 19:00</span>
                <h3 className="text-xl font-bold text-[#d4af37]">"Se abre el telón y entro yo"</h3>
              </div>
              <p className="text-white">
                Bienvenida a cargo de Glori Parton con bailarines, plumas, monólogo, y un poco de terapia no solicitada.
              </p>
            </div>

            {/* Evento 3 */}
            <div className="relative pl-8 border-l-2 border-[#d4af37]">
              <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-[#d4af37]"></div>
              <div className="mb-2">
                <span className="text-white font-bold">19:00 - 19:30</span>
                <h3 className="text-xl font-bold text-[#d4af37]">Bingo Karaoke: "Cántame las bolas, Glori"</h3>
              </div>
              <p className="text-white">
                Números, canciones y algo que no sabes si es vergüenza ajena o arte contemporáneo. Spoiler: es arte.
              </p>
            </div>

            {/* Evento 4 */}
            <div className="relative pl-8 border-l-2 border-[#d4af37]">
              <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-[#d4af37]"></div>
              <div className="mb-2">
                <span className="text-white font-bold">19:30 - 19:45</span>
                <h3 className="text-xl font-bold text-[#d4af37]">"Recógeme el abanico que voy a fumar"</h3>
              </div>
              <p className="text-white">Descanso. Hilo musical. Miradas. Coqueteo. Movimiento de peluca.</p>
            </div>

            {/* Evento 5 */}
            <div className="relative pl-8 border-l-2 border-[#d4af37]">
              <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-[#d4af37]"></div>
              <div className="mb-2">
                <span className="text-white font-bold">19:45 - 20:15</span>
                <h3 className="text-xl font-bold text-[#d4af37]">
                  Bingo Express: "A ver esas bolas… las del bombo, cariño"
                </h3>
              </div>
              <p className="text-white">Ronda relámpago con premios rápidos, humor y algo de tensión.</p>
            </div>

            {/* Evento 6 */}
            <div className="relative pl-8 border-l-2 border-[#d4af37]">
              <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-[#d4af37]"></div>
              <div className="mb-2">
                <span className="text-white font-bold">20:15 - 20:30</span>
                <h3 className="text-xl font-bold text-[#d4af37]">"Y de repente... silencio dramático"</h3>
              </div>
              <p className="text-white">Descanso para recomponer pestañas y reevaluar decisiones de vestuario.</p>
            </div>

            {/* Evento 7 */}
            <div className="relative pl-8 border-l-2 border-[#d4af37]">
              <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-[#d4af37]"></div>
              <div className="mb-2">
                <span className="text-white font-bold">20:30 - 21:00</span>
                <h3 className="text-xl font-bold text-[#d4af37]">Show Drag + Lipsync Battle: "Por una peluca, mato"</h3>
              </div>
              <p className="text-white">
                Performance con guerra de playback incluida. Tú votas, nosotras brillamos. Habrá premio, pero sobre
                todo... historia.
              </p>
            </div>

            {/* Evento 8 */}
            <div className="relative pl-8 border-l-2 border-[#d4af37]">
              <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-[#d4af37]"></div>
              <div className="mb-2">
                <span className="text-white font-bold">21:00 - 21:15</span>
                <h3 className="text-xl font-bold text-[#d4af37]">"¿Me habéis echado de menos?"</h3>
              </div>
              <p className="text-white">Descanso. Última copa antes de la segunda venida de Glori.</p>
            </div>

            {/* Evento 9 */}
            <div className="relative pl-8 border-l-2 border-[#d4af37]">
              <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-[#d4af37]"></div>
              <div className="mb-2">
                <span className="text-white font-bold">21:15 - 21:45</span>
                <h3 className="text-xl font-bold text-[#d4af37]">
                  Bingo Relámpago II: "Adivina quién vuelve con sed de bolas"
                </h3>
              </div>
              <p className="text-white">
                Otra ronda rápida. Más premios. Más gritos. Más fotos borrosas que luego amarás.
              </p>
            </div>

            {/* Evento 10 */}
            <div className="relative pl-8 border-l-2 border-[#d4af37]">
              <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-[#d4af37]"></div>
              <div className="mb-2">
                <span className="text-white font-bold">22:00 - 22:15</span>
                <h3 className="text-xl font-bold text-[#d4af37]">
                  Concurso de outfits: "El espejo dijo wow, y aquí estoy"
                </h3>
              </div>
              <p className="text-white">El público vota al look más icónico. Se admiten sobornos emocionales.</p>
            </div>

            {/* Evento 11 */}
            <div className="relative pl-8 border-l-2 border-[#d4af37]">
              <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-[#d4af37]"></div>
              <div className="mb-2">
                <span className="text-white font-bold">22:30 - 23:00</span>
                <h3 className="text-xl font-bold text-[#d4af37]">Concierto final: "Un bis y nos vamos (mentira)"</h3>
              </div>
              <p className="text-white">
                Cierre por todo lo alto con artista invitada. Natalia. Porque sí, porque podemos.
              </p>
            </div>

            {/* Evento 12 */}
            <div className="relative pl-8 border-l-2 border-[#d4af37]">
              <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-[#d4af37]"></div>
              <div className="mb-2">
                <span className="text-white font-bold">23:00 - 03:30</span>
                <h3 className="text-xl font-bold text-[#d4af37]">
                  Discoteca: "Yo no me voy hasta que me echen (o me ligue a alguien)"
                </h3>
              </div>
              <p className="text-white">
                DJ Set para soltar, bailar, besar o desaparecer dramáticamente como toda buena diva.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-white italic mb-2">
            * Los horarios pueden sufrir ligeras variaciones según el nivel de drama de la noche.
          </p>
          <p className="text-sm text-white">
            Recuerda que la puntualidad es un concepto relativo en el mundo del espectáculo, pero te recomendamos llegar
            a tiempo para no perderte ni un segundo de glamour.
          </p>
        </div>
      </div>
    </div>
  )
}
