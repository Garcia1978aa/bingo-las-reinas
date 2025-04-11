// Cambiar el título y el texto descriptivo
export default function DressCodePage() {
  const images = [
    {
      src: "/images/gallery/mas-es-mas.jpeg",
      alt: "Más es más",
      description: "Cuando el exceso es apenas suficiente y la noche es joven",
    },
    {
      src: "/images/gallery/un-martini-y-mucha-actitud.jpeg",
      alt: "Un martini y mucha actitud",
      description: "Un martini en mano y la actitud perfecta para conquistar la noche",
    },
    {
      src: "/images/gallery/90s-icons-are-welcome-too.jpeg",
      alt: "90's icons are welcome too",
      description: "Porque los iconos de los 90 siempre serán bienvenidos, querida",
    },
    {
      src: "/images/gallery/las-reinas-lucen-asi-un-lunes.jpeg",
      alt: "Las Reinas lucen así un lunes",
      description: "Cuando hasta un lunes es excusa para brillar como una verdadera reina",
    },
    {
      src: "/images/gallery/unicas-e-inimitables.jpeg",
      alt: "Únicas e inimitables",
      description: "Porque la originalidad nunca pasa de moda",
    },
    {
      src: "/images/gallery/alaska-aqui-estan-los-hombres-de-verdad.jpeg",
      alt: "Alaska, aquí están los hombres de verdad",
      description: "Porque los hombres de verdad no temen al glamour ni a las pieles",
    },
  ]

  return (
    <div className="min-h-screen bg-[#111111] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          <span className="text-[#d63400]">Encuentra inspiración</span>{" "}
          <span className="text-white">en nuestro muro dress code:</span>
        </h1>

        <p className="text-center text-white max-w-3xl mx-auto mb-12">
          De Lola Flores a Karen Walker, pasando por las icónicas chicas Almodóvar. Aquí tienes la guía definitiva para
          lucir excesivamente fabulosa, peligrosamente chic y escandalosamente inolvidable en tu próxima cita con el
          cartón.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-black/30 p-3 rounded-xl overflow-hidden group cursor-pointer border border-[#d63400]/30 hover:border-[#d63400] transition-all duration-300"
            >
              <div className="relative h-64 rounded overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-white font-bold">{image.alt}</h3>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3">
                <p className="text-[#E6E18F] font-medium">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-[#d63400] mb-4">
            ¿Quieres formar parte de nuestro muro de inspiración?
          </h2>
          <p className="text-white mb-6">
            Reserva tu entrada para BINGO Las Reinas del Cartón y prepárate para una noche donde tu look será recordado.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://docs.google.com/forms/d/1wWSVk3xCa9KFqSfQ9P39lTqlmTHB5-cT-50HzKej4w0/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#d63400] text-white px-6 py-2 rounded-full hover:bg-[#d63400]/80 transition-colors"
            >
              Reserva tu entrada
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
