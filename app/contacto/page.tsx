"use client"

import { MapPin, Mail, Phone, Calendar, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      {/* Encabezado */}
      <section className="py-10 md:py-16 px-4 bg-gradient-to-b from-black to-[#111111] text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">CONTACTA CON NOSOTRAS</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          ¿Lista para unirte al evento más glamuroso de Madrid?
        </p>
      </section>

      {/* Sección de contacto simplificada - Texto actualizado */}
      <section className="contacto-simple max-w-4xl mx-auto mb-8 md:mb-12 px-4 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl mb-3">PREGÚNTALE A GLORI</h2>
        <p className="text-sm md:text-base mb-4">
          Cariño, pregúntame lo que necesites saber... ¡Si me pillas de buen humor hasta te contesto!
        </p>
        <a
          href="https://docs.google.com/forms/d/1CfxHcJdJUh4VTLMX1QIG-aWV__Q3-luIZXB0jxCvmPA/edit"
          className="btn-glam text-sm md:text-base py-3 px-5 md:py-4 md:px-6 inline-block w-full md:w-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          ¿QUÉ QUIERES, AMOR?
        </a>
      </section>

      {/* Información de contacto actualizada */}
      <div className="max-w-4xl mx-auto px-4 pb-8 md:pb-16">
        <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-black/30 p-4 rounded-lg border border-[#d4af37]/30 text-center">
            <div className="bg-[#ff00aa] p-2 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
              <Mail className="text-white" size={20} />
            </div>
            <h3 className="text-lg font-bold mb-1">Email</h3>
            <a
              href="mailto:holi@bingolasreinasdelcarton.com"
              className="text-gray-300 hover:text-[#ff00aa] transition-colors text-sm break-all"
            >
              holi@bingolasreinasdelcarton.com
            </a>
          </div>

          <div className="bg-black/30 p-4 rounded-lg border border-[#d4af37]/30 text-center">
            <div className="bg-[#ff00aa] p-2 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
              <Phone className="text-white" size={20} />
            </div>
            <h3 className="text-lg font-bold mb-1">Teléfono</h3>
            <a href="tel:+34600000000" className="text-gray-300 hover:text-[#ff00aa] transition-colors">
              +34 600 000 000
            </a>
          </div>

          <div className="bg-black/30 p-4 rounded-lg border border-[#d4af37]/30 text-center">
            <div className="bg-[#ff00aa] p-2 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
              <MapPin className="text-white" size={20} />
            </div>
            <h3 className="text-lg font-bold mb-1">Dirección</h3>
            <p className="text-gray-300">Teatro las Vegas</p>
            <p className="text-gray-300">C. de los Hermanos García Noblejas, 17, B</p>
            <p className="text-gray-300">San Blas-Canillejas, 28037 Madrid</p>
          </div>
        </div>

        {/* Información adicional actualizada */}
        <div className="mt-12 bg-black/30 p-6 rounded-xl border border-[#d4af37]/50 shadow-[0_5px_20px_rgba(255,0,170,0.2)] text-center">
          <h2 className="text-2xl font-bold mb-4">Fecha y Horario</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col items-center">
              <div className="bg-[#ff00aa] p-2 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                <Calendar className="text-white" size={20} />
              </div>
              <h3 className="text-lg font-bold mb-1">Fecha</h3>
              <p className="text-white">Viernes 7 de Junio, 2025</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-[#ff00aa] p-2 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                <Clock className="text-white" size={20} />
              </div>
              <h3 className="text-lg font-bold mb-1">Horario</h3>
              <p className="text-white">De 18:00 a 03:30</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-3">Síguenos en redes sociales</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-[#ff00aa] hover:text-[#d4af37] transition-colors">
                Instagram
              </a>
              <a href="#" className="text-[#ff00aa] hover:text-[#d4af37] transition-colors">
                Facebook
              </a>
              <a href="#" className="text-[#ff00aa] hover:text-[#d4af37] transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Mapa de ubicación */}
        <div className="mt-6 md:mt-8 bg-black/30 p-3 md:p-4 rounded-xl border border-[#d4af37]/30">
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center">Cómo llegar</h3>
          <div className="h-[200px] md:h-[300px] rounded-lg overflow-hidden">
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

        {/* Botón para volver */}
        <div className="text-center mt-8">
          <Link href="/" className="inline-block text-[#ff00aa] font-bold hover:text-[#d4af37] transition-colors">
            ← Volver a la página principal
          </Link>
        </div>
      </div>
    </div>
  )
}
