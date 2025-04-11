interface SectionTitleProps {
  title: string
  subtitle?: string
  id?: string
}

export function SectionTitle({ title, subtitle, id }: SectionTitleProps) {
  return (
    <div className="text-center mb-12" id={id}>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
      {subtitle && <p className="text-white max-w-2xl mx-auto">{subtitle}</p>}
      <div className="w-24 h-1 bg-gradient-to-r from-[#ff00aa] to-[#d4af37] mx-auto mt-4"></div>
    </div>
  )
}
