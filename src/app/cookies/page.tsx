export const metadata = {
  title: "Política de Cookies",
  description: "Política de cookies y rastreo del sitio web.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Política De Cookies</h1>
          <p className="text-warm-400 text-lg max-w-2xl">
            Información sobre el uso de cookies en nuestro sitio web.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-sm max-w-none">
          <h2>1. ¿Qué Son las Cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan para recordar información sobre tu navegación y preferencias.
          </p>

          <h2>2. Tipos de Cookies que Utilizamos</h2>
          <p>Utilizamos los siguientes tipos de cookies:</p>
          <ul>
            <li><strong>Cookies Técnicas:</strong> Necesarias para el funcionamiento del sitio</li>
            <li><strong>Cookies de Análisis:</strong> Para entender cómo utilizas el sitio</li>
            <li><strong>Cookies de Preferencia:</strong> Para recordar tus opciones</li>
            <li><strong>Cookies de Marketing:</strong> Para personalizar contenido publicitario</li>
          </ul>

          <h2>3. Cookies Técnicas (Obligatorias)</h2>
          <p>
            Estas cookies son esenciales para que el sitio funcione correctamente. Sin ellas, algunas funciones no estarían disponibles.
          </p>

          <h2>4. Cookies de Análisis</h2>
          <p>
            Utilizamos servicios de análisis para recopilar datos sobre cómo los visitantes interactúan con nuestro sitio. Esta información nos ayuda a mejorar la experiencia del usuario.
          </p>

          <h2>5. Cookies de Terceros</h2>
          <p>
            Algunos de nuestros socios pueden instalar cookies para proporcionar publicidad personalizada o medir la efectividad de las campañas.
          </p>

          <h2>6. Control de Cookies</h2>
          <p>
            Puedes controlar las cookies a través de la configuración de tu navegador. La mayoría de navegadores te permiten rechazar cookies o alertarte cuando se están instalando.
          </p>

          <h2>7. Consentimiento</h2>
          <p>
            Al continuar utilizando nuestro sitio, das tu consentimiento para el uso de cookies como se describe en esta política. Puedes retirar tu consentimiento en cualquier momento ajustando tus preferencias.
          </p>

          <h2>8. Retención de Datos</h2>
          <p>
            Las cookies generalmente se mantienen durante el tiempo necesario para cumplir su función. Algunas pueden persistir hasta que las elimines manualmente.
          </p>

          <h2>9. Cookies de Redes Sociales</h2>
          <p>
            Las redes sociales pueden instalar sus propias cookies cuando interactúas con botones o complementos sociales en nuestro sitio.
          </p>

          <h2>10. Cambios en Esta Política</h2>
          <p>
            Podemos actualizar esta política en cualquier momento. Revisar periódicamente esta página es recomendado.
          </p>

          <p className="text-sm text-warm-600 mt-8">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
        </div>
      </section>
    </>
  );
}
