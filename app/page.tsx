"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [showFallback, setShowFallback] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isMobile = useIsMobile()

  // Añadir un timestamp único para evitar problemas de caché
  const timestamp = Date.now()

  // Seleccionar la fuente de video según el dispositivo
  const videoUrl = isMobile
    ? `/videos/home-video-mobile.mp4?t=${timestamp}` // Versión más ligera para móviles
    : `https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%8DDEO%20HOME%20BINGO%20ok-U548WnZgcMIDSGsIDrbg94ZQRiTeZP.webm?t=${timestamp}`

  // URL directa al Blob Storage para el logo
  const logoUrl = `https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20BINGO%20%282%29ok-KtOJDuXFzt2QxcLjlwKbCPTnqFYhKA.png?t=${timestamp}`

  // Efecto para manejar la carga del video
  useEffect(() => {
    // Intentar precargar el video
    if (videoRef.current) {
      const video = videoRef.current

      // Función para manejar cuando el video está listo para reproducirse
      const handleCanPlay = () => {
        console.log("Video can play now")
        video.play().catch((err) => {
          console.error("Error playing video:", err)
          setVideoError(true)
        })
      }

      // Función para manejar cuando el video está reproduciendo
      const handlePlaying = () => {
        console.log("Video is playing")
        setVideoLoaded(true)
        // Una vez que el video está reproduciendo, eliminamos el fallback
        setShowFallback(false)
      }

      // Función para manejar errores
      const handleError = (e: Event) => {
        console.error("Video error:", e)
        setVideoError(true)
      }

      // Agregar event listeners
      video.addEventListener("canplay", handleCanPlay)
      video.addEventListener("playing", handlePlaying)
      video.addEventListener("error", handleError)

      // Intentar cargar el video
      video.load()

      // Establecer un timeout para mostrar el fallback si el video tarda demasiado
      // Esto es especialmente útil en conexiones móviles lentas
      const timeoutId = setTimeout(() => {
        if (!videoLoaded) {
          console.log("Video loading timeout - showing fallback")
          setShowFallback(true)
        }
      }, 3000) // 3 segundos de timeout

      // Limpiar event listeners y timeout
      return () => {
        video.removeEventListener("canplay", handleCanPlay)
        video.removeEventListener("playing", handlePlaying)
        video.removeEventListener("error", handleError)
        clearTimeout(timeoutId)
      }
    }
  }, [videoLoaded])

  // Precargar la imagen de fondo para móviles
  useEffect(() => {
    if (isMobile) {
      const img = new Image()
      img.src = "/images/fondo-header.jpeg"
    }
  }, [isMobile])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Contenedor principal - Video, logo y botón */}
      <div className="flex-grow relative bg-black">
        {/* Fondo negro sólido (sin imagen residual) */}
        <div className="absolute inset-0 bg-black"></div>

        {/* Fallback temporal mientras carga el video en móviles */}
        {(isMobile && !videoLoaded) || showFallback ? (
          <div className="absolute inset-0">
            <Image
              src="/images/fondo-header.jpeg"
              alt="Fondo"
              fill
              style={{ objectFit: "cover", opacity: 0.5 }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60"></div>
          </div>
        ) : null}

        {/* Video con múltiples fuentes y mejor manejo */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            width: "100%",
            height: "100vh",
            opacity: videoLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
          poster={isMobile ? "/images/fondo-header.jpeg" : undefined}
        >
          {/* Fuente principal según el dispositivo */}
          <source src={videoUrl} type={isMobile ? "video/mp4" : "video/webm"} />
          {/* Fuentes alternativas */}
          <source src={`/videos/home-video.mp4?t=${timestamp}`} type="video/mp4" />
          <source src={`/videos/home-video-short.mp4?t=${timestamp}`} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>

        {/* Fallback si hay error en el video */}
        {videoError && (
          <div className="absolute inset-0 bg-gradient-to-b from-black to-[#330022] flex items-center justify-center">
            <p className="text-white text-center px-4">
              Lo sentimos, hubo un problema al cargar el video.
              <br />
              ¡Pero la fiesta continúa!
            </p>
          </div>
        )}

        {/* Logo y botón superpuestos */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center">
          {/* Logo centrado */}
          <div className="animate-[fadeIn_1s] mb-16">
            <Image
              src={logoUrl || "/placeholder.svg"}
              alt="BINGO Las Reinas del Cartón"
              width={isMobile ? 320 : 550}
              height={isMobile ? 160 : 275}
              className="max-w-full h-auto"
              priority
              unoptimized={true}
            />
          </div>

          {/* Botón de preventa */}
          <div className="animate-[fadeIn_1.3s] mt-20">
            <a
              href="https://docs.google.com/forms/d/1wWSVk3xCa9KFqSfQ9P39lTqlmTHB5-cT-50HzKej4w0/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#d63400] to-[#ff5722] text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-lg md:text-xl font-bold shadow-[0_5px_20px_rgba(214,52,0,0.4)] hover:shadow-[0_8px_25px_rgba(255,87,34,0.7)] transition-all duration-300 transform hover:scale-105 hover:translate-y-[-5px] animate-pulse"
            >
              RESERVA EN PREVENTA
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
