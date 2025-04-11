import { SectionTitle } from "./section-title"

export function GallerySection() {
  const images = [
    { src: "/placeholder.svg?height=300&width=400", alt: "Galería 1" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Galería 2" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Galería 3" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Galería 4" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Galería 5" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Galería 6" },
  ]

  return (
    <section id="galeria" className="py-16 px-4 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="GALERÍA" subtitle="Imágenes de nuestros eventos anteriores" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
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
          ))}
        </div>
      </div>
    </section>
  )
}
