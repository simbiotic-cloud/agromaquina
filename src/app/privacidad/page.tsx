export const metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y protección de datos personales.",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Política De Privacidad</h1>
          <p className="text-warm-400 text-lg max-w-2xl">
            Información sobre cómo protegemos tus datos personales.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-sm max-w-none">
          <h2>1. Responsable del Tratamiento de Datos</h2>
          <p>
            El responsable del tratamiento de datos es el titular del sitio web. Para cualquier cuestión relativa a la protección de datos, puedes contactarnos a través de nuestro formulario de contacto.
          </p>

          <h2>2. Datos que Recopilamos</h2>
          <p>Recopilamos datos personales cuando:</p>
          <ul>
            <li>Completas el formulario de contacto</li>
            <li>Te suscribes a nuestro newsletter</li>
            <li>Realizas una compra o solicitud de presupuesto</li>
            <li>Utilizas nuestro sitio web (datos de navegación)</li>
          </ul>

          <h2>3. Base Legal del Tratamiento</h2>
          <p>El tratamiento de datos se realiza sobre la base de:</p>
          <ul>
            <li>Tu consentimiento explícito</li>
            <li>Ejecución de un contrato</li>
            <li>Cumplimiento de obligaciones legales</li>
            <li>Intereses legítimos del negocio</li>
          </ul>

          <h2>4. Destinatarios de los Datos</h2>
          <p>Tus datos solo serán compartidos con:</p>
          <ul>
            <li>Personal autorizado de nuestro negocio</li>
            <li>Prestadores de servicios técnicos necesarios</li>
            <li>Autoridades públicas cuando sea requerido por ley</li>
          </ul>

          <h2>5. Derechos del Usuario</h2>
          <p>Tienes derecho a:</p>
          <ul>
            <li>Acceder a tus datos personales</li>
            <li>Rectificar datos inexactos</li>
            <li>Solicitar la eliminación de datos</li>
            <li>Limitar el tratamiento de datos</li>
            <li>Oponerme al tratamiento</li>
            <li>Portabilidad de datos</li>
            <li>Retirar el consentimiento en cualquier momento</li>
          </ul>

          <h2>6. Período de Retención de Datos</h2>
          <p>
            Los datos se conservarán durante el tiempo necesario para cumplir con los fines para los que fueron recopilados, o según lo requiera la legislación aplicable.
          </p>

          <h2>7. Cookies</h2>
          <p>
            Utilizamos cookies para mejorar tu experiencia. Consulta nuestra política de cookies para más información.
          </p>

          <h2>8. Seguridad</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos contra acceso no autorizado, pérdida o modificación.
          </p>

          <h2>9. Ejercicio de Derechos</h2>
          <p>
            Para ejercer cualquiera de tus derechos, ponte en contacto con nosotros a través de nuestro formulario de contacto.
          </p>

          <h2>10. Cambios en Esta Política</h2>
          <p>
            Nos reservamos el derecho de modificar esta política en cualquier momento. Los cambios significativos serán comunicados en nuestro sitio web.
          </p>

          <p className="text-sm text-warm-600 mt-8">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
        </div>
      </section>
    </>
  );
}
