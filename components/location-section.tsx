import { SectionTitle } from "./section-title"
import { MapPin, Clock, Calendar } from "lucide-react"

export function LocationSection() {
  return (
    <section id="ubicacion" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="UBICACIÓN" subtitle="Encuentra el camino a la mejor fiesta de Madrid" />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-[#ff00aa] p-2 rounded-full">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Dirección</h3>
                <p className="text-gray-300">Teatro las Vegas</p>
                <p className="text-gray-300">C. de los Hermanos García Noblejas, 17, B</p>
                <p className="text-gray-300">San Blas-Canillejas, 28037 Madrid</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#ff00aa] p-2 rounded-full">
                <Calendar className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Fecha</h3>
                <p className="text-gray-300">Viernes 7 de Junio, 2025</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#ff00aa] p-2 rounded-full">
                <Clock className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Horario</h3>
                <p className="text-gray-300">De 18:00 a 03:30</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-2">Cómo llegar</h3>
              <p className="text-gray-300 mb-4">Accesible en metro (García Noblejas, L7), autobús y taxi.</p>
            </div>
          </div>

          <div className="h-[400px] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(255,51,102,0.3)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.9580307635766!2d-3.6294159!3d40.4352675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422f2f42c8d8a9%3A0x1e0a4d7b54a6c774!2sC.%20de%20los%20Hermanos%20Garc%C3%ADa%20Noblejas%2C%2017%2C%20B%2C%2028037%20Madrid!5e0!3m2!1ses!2ses!4v1712249989012!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
