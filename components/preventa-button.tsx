"use client"

export function PreventaButton() {
  const handleClick = () => {
    // Trackeo de conversiones
    if (typeof window !== "undefined") {
      if ((window as any).fbq) {
        ;(window as any).fbq("track", "InitiateCheckout")
      }
      if (typeof (window as any).gtag !== "undefined") {
        ;(window as any).gtag("event", "conversion", { send_to: "AW-1013912855350245/preventa" })
      }
    }
  }

  return (
    <a
      href="https://docs.google.com/forms/d/1wWSVk3xCa9KFqSfQ9P39lTqlmTHB5-cT-50HzKej4w0/edit"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="btn-glam"
    >
      RESERVA EN PREVENTA
    </a>
  )
}
