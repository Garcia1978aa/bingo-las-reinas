export default function CookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-[#E6E18F]">Política de Cookies</h1>

      <div className="prose prose-invert max-w-none">
        <p>Última actualización: {new Date().toLocaleDateString()}</p>

        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet, teléfono
          móvil) cuando visita un sitio web. Las cookies ayudan a los sitios web a recordar sus preferencias y a mejorar
          su experiencia de navegación.
        </p>

        <h2>2. Tipos de cookies que utilizamos</h2>
        <p>Utilizamos los siguientes tipos de cookies:</p>
        <ul>
          <li>
            <strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio web.
          </li>
          <li>
            <strong>Cookies de preferencias:</strong> Permiten recordar información que cambia el aspecto o
            comportamiento del sitio.
          </li>
          <li>
            <strong>Cookies estadísticas:</strong> Ayudan a entender cómo los visitantes interactúan con el sitio.
          </li>
          <li>
            <strong>Cookies de marketing:</strong> Utilizadas para rastrear a los visitantes en los sitios web con el
            fin de mostrar anuncios relevantes.
          </li>
        </ul>

        <h2>3. Cookies de terceros</h2>
        <p>
          Nuestro sitio web utiliza servicios de terceros como Google Analytics, Facebook Pixel y otros que también
          pueden utilizar cookies. No tenemos control sobre estas cookies de terceros.
        </p>

        <h2>4. Gestión de cookies</h2>
        <p>
          Puede configurar su navegador para rechazar todas las cookies o para indicar cuándo se está enviando una
          cookie. Sin embargo, si rechaza las cookies, es posible que algunas partes de nuestro sitio web no funcionen
          correctamente.
        </p>

        <h2>5. Más información</h2>
        <p>
          Para obtener más información sobre las cookies y cómo gestionarlas, visite www.allaboutcookies.org o
          www.aboutcookies.org.
        </p>

        <h2>6. Cambios en la política de cookies</h2>
        <p>
          Nos reservamos el derecho de modificar esta política de cookies en cualquier momento. Los cambios entrarán en
          vigor inmediatamente después de su publicación en el sitio web.
        </p>

        <h2>7. Contacto</h2>
        <p>
          Si tiene alguna pregunta sobre nuestra política de cookies, puede contactarnos en{" "}
          <span className="break-all">holi@bingolasreinasdelcarton.com</span> o en nuestra dirección postal: PESCAFINO
          VENTURES SL, CALLE LEGANES 16, FUENLABRADA, 28945 Madrid.
        </p>
      </div>
    </div>
  )
}
