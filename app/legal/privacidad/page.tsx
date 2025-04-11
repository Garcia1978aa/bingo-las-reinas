export default function PrivacidadPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-[#E6E18F]">Política de Privacidad</h1>

      <div className="prose prose-invert max-w-none">
        <p>Última actualización: {new Date().toLocaleDateString()}</p>

        <h2>1. Información que Recopilamos</h2>
        <p>
          Recopilamos información personal como nombre, dirección de correo electrónico, número de teléfono y dirección
          postal cuando usted nos la proporciona voluntariamente al realizar una reserva, suscribirse a nuestro boletín
          o contactar con nosotros. No recopilamos datos de menores de 18 años, ya que el acceso al establecimiento está
          restringido a mayores de edad por la venta de alcohol.
        </p>

        <h2>2. Uso de la Información</h2>
        <p>Utilizamos la información recopilada para:</p>
        <ul>
          <li>Procesar reservas y entradas</li>
          <li>Enviar comunicaciones sobre eventos y promociones</li>
          <li>Responder a consultas y solicitudes</li>
          <li>Mejorar nuestros servicios y experiencia del usuario</li>
        </ul>

        <h2>3. Compartir Información</h2>
        <p>
          No vendemos, intercambiamos ni transferimos de otro modo su información personal a terceros, excepto a
          proveedores de servicios de confianza que nos ayudan en la operación de nuestro sitio web o en la realización
          de nuestros eventos, siempre bajo acuerdos de confidencialidad.
        </p>

        <h2>4. Cookies</h2>
        <p>
          Utilizamos cookies para mejorar la experiencia del usuario en nuestro sitio web. Puede configurar su navegador
          para rechazar todas las cookies o para indicar cuándo se está enviando una cookie. Sin embargo, si no acepta
          cookies, es posible que algunas partes de nuestro sitio no funcionen correctamente.
        </p>

        <h2>5. Seguridad</h2>
        <p>
          Implementamos medidas de seguridad para mantener la seguridad de su información personal. Sin embargo, ninguna
          transmisión por Internet o método de almacenamiento electrónico es 100% seguro, por lo que no podemos
          garantizar su seguridad absoluta.
        </p>

        <h2>6. Enlaces a Terceros</h2>
        <p>
          Nuestro sitio web puede contener enlaces a sitios de terceros. No tenemos control sobre el contenido y las
          prácticas de privacidad de estos sitios. Le recomendamos revisar las políticas de privacidad de cualquier
          sitio web que visite a través de enlaces en nuestro sitio.
        </p>

        <h2>7. Derechos del Usuario</h2>
        <p>
          Usted tiene derecho a acceder, rectificar, limitar o eliminar sus datos personales. Para ejercer estos
          derechos, póngase en contacto con nosotros a través de los datos proporcionados en esta política.
        </p>

        <h2>8. Cambios en la Política de Privacidad</h2>
        <p>
          Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Los cambios entrarán
          en vigor inmediatamente después de su publicación en el sitio web.
        </p>

        <h2>9. Contacto</h2>
        <p>
          Si tiene alguna pregunta sobre esta política de privacidad, puede contactarnos en{" "}
          <span className="break-all">holi@bingolasreinasdelcarton.com</span> o en nuestra dirección postal: PESCAFINO
          VENTURES SL, CALLE LEGANES 16, FUENLABRADA, 28945 Madrid.
        </p>
      </div>
    </div>
  )
}
