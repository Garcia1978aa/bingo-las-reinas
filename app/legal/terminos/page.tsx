export default function TerminosPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-[#E6E18F]">Términos y Condiciones</h1>

      <div className="prose prose-invert max-w-none">
        <p>Última actualización: {new Date().toLocaleDateString()}</p>

        <h2>1. Introducción</h2>
        <p>
          Bienvenido a BINGO Las Reinas del Cartón, un evento organizado por PESCAFINO VENTURES SL. Estos términos y
          condiciones rigen el uso de nuestro sitio web y la asistencia a nuestros eventos. Al acceder a este sitio web
          y/o asistir a nuestros eventos, usted acepta estos términos y condiciones en su totalidad.
        </p>

        <h2>2. Uso del Sitio Web</h2>
        <p>
          El contenido de las páginas de este sitio web es para su información general y uso personal únicamente. Está
          sujeto a cambios sin previo aviso.
        </p>

        <h2>3. Reservas y Entradas</h2>
        <p>
          Las reservas y compras de entradas están sujetas a disponibilidad. Una vez confirmada la reserva, no se
          admiten cancelaciones ni devoluciones, salvo en casos excepcionales a discreción de la organización.
        </p>

        <h2>4. Requisitos de Acceso</h2>
        <p>
          El acceso a Bingo Las Reinas del Cartón está restringido a mayores de 18 años, en cumplimiento con la
          legislación vigente sobre consumo de alcohol. Al registrarse o participar en nuestras actividades, el usuario
          declara bajo su responsabilidad que cumple con la edad mínima requerida. Podrá solicitarse documento de
          identidad para verificar la edad en el acceso al evento.
        </p>

        <h2>5. Comportamiento en el Evento</h2>
        <p>
          Nos reservamos el derecho de admisión. Cualquier comportamiento que se considere inapropiado, ofensivo o que
          perturbe el desarrollo normal del evento podrá ser motivo de expulsión sin derecho a reembolso.
        </p>

        <h2>6. Propiedad Intelectual</h2>
        <p>
          Todo el contenido de este sitio web, incluyendo textos, gráficos, logos, imágenes y software, es propiedad de
          PESCAFINO VENTURES SL o de sus proveedores de contenido y está protegido por las leyes de propiedad
          intelectual.
        </p>

        <h2>7. Limitación de Responsabilidad</h2>
        <p>
          En ningún caso seremos responsables por cualquier pérdida o daño, incluyendo sin limitación, pérdidas o daños
          indirectos o consecuentes, o cualquier pérdida o daño que surja de la pérdida de datos o beneficios que surjan
          de, o en conexión con, el uso de este sitio web o la asistencia a nuestros eventos.
        </p>

        <h2>8. Modificaciones</h2>
        <p>
          Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios entrarán
          en vigor inmediatamente después de su publicación en el sitio web.
        </p>

        <h2>9. Ley Aplicable</h2>
        <p>
          Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes de España, y cualquier disputa
          relacionada con estos términos y condiciones estará sujeta a la jurisdicción exclusiva de los tribunales de
          Madrid.
        </p>
      </div>
    </div>
  )
}
