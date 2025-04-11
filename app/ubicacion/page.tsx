"use client"

import { useState, useEffect } from "react"
import { MapPin, Clock, Calendar, Phone, Mail } from "lucide-react"
import { ImageCarousel } from "@/components/image-carousel"

export default function UbicacionPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const venueImages = [
    {
      src: "/images/venue/01-bar-chandelier.jpeg",
      alt: "Barra principal con impresionante lámpara de techo",
    },
    {
      src: "/images/venue/02-bar-view.jpeg",
      alt: "Vista de la barra con iluminación dorada",
    },
    {
      src: "/images/venue/03-main-area.jpeg",
      alt: "Área principal del Teatro Las Vegas",
    },
    {
      src: "/images/venue/05-lounge-area.jpeg",
      alt: "Área lounge con sofás rojos",
    },
    {
      src: "/images/venue/06-vip-area.jpeg",
      alt: "Zona VIP con sofás acolchados",
    },
    {
      src: "/images/venue/07-zebra-stairs.jpeg",
      alt: "Escaleras con diseño de cebra",
    },
    {
      src: "/images/venue/08-terrace.jpeg",
      alt: "Terraza exterior",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
        <span className="text-[#d63400]">Ubicate</span> <span className="text-white">cielo</span>
      </h1>

      {/* Galería de imágenes deslizante */}
      <div className="mb-12">
        <ImageCarousel images={venueImages} />
      </div>

      {/* Información de contacto y mapa más compactos */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Mapa */}
        <div className="h-[350px] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(255,87,34,0.3)] order-2 md:order-1">
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

        {/* Información de contacto */}
        <div className="bg-black/30 p-6 rounded-xl border border-[#d63400]/30 order-1 md:order-2">
          <h2 className="text-2xl font-bold text-[#d63400] mb-6">Información del Evento</h2>

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-[#d63400] p-2 rounded-full flex-shrink-0">
                <MapPin className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Dirección</h3>
                <p className="text-gray-300">Teatro las Vegas</p>
                <p className="text-gray-300">C. de los Hermanos García Noblejas, 17, B</p>
                <p className="text-gray-300">San Blas-Canillejas, 28037 Madrid</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#d63400] p-2 rounded-full flex-shrink-0">
                <Calendar className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Fecha</h3>
                <p className="text-gray-300">Viernes 7 de Junio, 2025</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#d63400] p-2 rounded-full flex-shrink-0">
                <Clock className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Horario</h3>
                <p className="text-gray-300">De 18:00 a 03:30</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#d63400] p-2 rounded-full flex-shrink-0">
                <Phone className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Teléfono</h3>
                <p className="text-gray-300">+34 600 000 000</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#d63400] p-2 rounded-full flex-shrink-0">
                <Mail className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Email</h3>
                <p className="text-gray-300 text-sm break-all">holi@bingolasreinasdelcarton.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Información adicional */}
      <div className="bg-black/30 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-bold text-[#d63400] mb-4 text-center">Cómo llegar</h2>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-black/50 p-4 rounded-lg border border-[#d63400]/30">
            <h3 className="text-lg font-bold text-[#d63400] mb-2">Metro</h3>
            <p className="text-white text-sm">Estación cercana: García Noblejas (L7)</p>
          </div>

          <div className="bg-black/50 p-4 rounded-lg border border-[#d63400]/30">
            <h3 className="text-lg font-bold text-[#d63400] mb-2">Autobús</h3>
            <p className="text-white text-sm">Líneas 28, 48, 70, 105, 140 con parada en García Noblejas</p>
          </div>

          <div className="bg-black/50 p-4 rounded-lg border border-[#d63400]/30">
            <h3 className="text-lg font-bold text-[#d63400] mb-2">Parking</h3>
            <p className="text-white text-sm">Parking público en las inmediaciones del teatro</p>
          </div>
        </div>
      </div>

      {/* Botón de reserva */}
      <div className="text-center">
        <a
          href="https://docs.google.com/forms/d/1wWSVk3xCa9KFqSfQ9P39lTqlmTHB5-cT-50HzKej4w0/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#d63400] text-white px-6 py-3 rounded-full font-bold hover:bg-[#d63400]/80 transition-all duration-300 transform hover:scale-105"
        >
          RESERVA TU ENTRADA
        </a>
      </div>
    </div>
  )
}
