export function CanvaEmbed() {
  return (
    <div className="relative w-full h-0 pt-[56.25%] my-5 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(255,51,102,0.3)]">
      <iframe
        className="absolute top-0 left-0 w-full h-full border-none"
        src="https://www.canva.com/design/DAGjfkJ4aBk/2atv_FHb-sn_jAS6dsCeFw/watch?embed"
        allowFullScreen
        allow="fullscreen"
        loading="lazy"
      />
    </div>
  )
}
