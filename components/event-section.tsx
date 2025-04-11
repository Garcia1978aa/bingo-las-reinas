import { SectionTitle } from "./section-title"

export function EventSection() {
  return (
    <section id="evento" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="EL EVENTO" subtitle="Una experiencia única que no te puedes perder" />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#d63400]">Una experiencia única</h3>
            <p className="text-white">
              Prepárate para vivir una noche inolvidable en el lugar más exclusivo de Madrid. Con música, espectáculos y
              un ambiente que no encontrarás en ningún otro sitio.
            </p>

            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#d63400] mr-2"></div>
                <p className="text-white">Show exclusivo de 18:00 a 03:30</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#d63400] mr-2"></div>
                <p className="text-white">DJ sets con los mejores ritmos</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#d63400] mr-2"></div>
                <p className="text-white">Performances y sorpresas toda la noche</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#d63400] mr-2"></div>
                <p className="text-white">Premios y regalos exclusivos</p>
              </div>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(214,52,0,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#d63400]/20 to-[#d63400]/20"></div>
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Evento exclusivo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
