"use client"

import { SectionTitle } from "./section-title"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-16 px-4 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="CONTACTO" subtitle="¿Tienes alguna pregunta? Escríbenos" />

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white mb-1">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    className="bg-white/10 border-[#d4af37]/30 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="bg-white/10 border-[#d4af37]/30 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white mb-1">
                  Asunto
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Asunto del mensaje"
                  className="bg-white/10 border-[#d4af37]/30 text-white placeholder:text-gray-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-1">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  placeholder="Escribe tu mensaje aquí..."
                  className="bg-white/10 border-[#d4af37]/30 text-white placeholder:text-gray-400 min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full btn-glam">
                Enviar Mensaje
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Información de Contacto</h3>
              <p className="text-gray-300 mb-2">
                Para cualquier consulta sobre el evento, reservas VIP o colaboraciones.
              </p>
              <p className="text-gray-300">
                Email:{" "}
                <a href="mailto:holi@bingolasreinasdelcarton.com" className="text-[#d4af37]">
                  holi@bingolasreinasdelcarton.com
                </a>
              </p>
              <p className="text-gray-300">
                Teléfono:{" "}
                <a href="tel:+34600000000" className="text-[#d4af37]">
                  +34 600 000 000
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white/10 p-3 rounded-full hover:bg-[#ff00aa] transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="text-white" size={20} />
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-3 rounded-full hover:bg-[#ff00aa] transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="text-white" size={20} />
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-3 rounded-full hover:bg-[#ff00aa] transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="text-white" size={20} />
                </a>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/5 rounded-xl border border-[#d4af37]/20">
              <h3 className="text-xl font-bold mb-2">¿Quieres ser VIP?</h3>
              <p className="text-gray-300 mb-4">
                Reserva tu mesa VIP y disfruta de beneficios exclusivos durante el evento.
              </p>
              <a
                href="https://docs.google.com/forms/d/1wWSVk3xCa9KFqSfQ9P39lTqlmTHB5-cT-50HzKej4w0/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glam inline-block"
              >
                Reserva VIP
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
