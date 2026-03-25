export const metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso del sitio web.",
  alternates: { canonical: "/terminos" },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Términos Y Condiciones</h1>
          <p className="text-warm-400 text-lg max-w-2xl">
            Condiciones de uso de nuestro sitio web y servicios.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-sm max-w-none">
          <h2>1. Aceptación de Términos</h2>
          <p>
            Al acceder y utilizar este sitio web, aceptas estar vinculado por estos términos y condiciones. Si no estás de acuerdo con alguno de estos términos, por favor no utilices el sitio.
          </p>

          <h2>2. Licencia de Uso</h2>
          <p>
            Se te otorga una licencia limitada y revocable para acceder y usar el sitio web únicamente para fines personales y no comerciales.
          </p>

          <h2>3. Restricciones de Uso</h2>
          <p>No puedes:</p>
          <ul>
            <li>Reproducir, distribuir o transmitir contenido del sitio sin autorización</li>
            <li>Acceder al sitio mediante métodos automatizados</li>
            <li>Intentar obtener acceso no autorizado a sistemas</li>
            <li>Usar el sitio para actividades ilegales o fraudulentas</li>
            <li>Transmitir virus u otro código malicioso</li>
          </ul>

          <h2>4. Contenido del Usuario</h2>
          <p>
            El contenido proporcionado por el usuario permanece bajo su propiedad. Al enviar contenido, otorgas una licencia mundial, no exclusiva, libre de regalías para usar dicho contenido en relación con nuestros servicios.
          </p>

          <h2>5. Descargo de Responsabilidad</h2>
          <p>
            El sitio web y sus contenidos se proporcionan "tal cual" sin garantías de ningún tipo. No garantizamos la precisión, integridad o utilidad de la información.
          </p>

          <h2>6. Limitación de Responsabilidad</h2>
          <p>
            En ningún caso seremos responsables de daños indirectos, incidentales, especiales, consecuentes o punitivos derivados del uso del sitio web.
          </p>

          <h2>7. Enlaces Externos</h2>
          <p>
            No somos responsables del contenido de sitios web externos enlazados desde nuestro sitio. Revisar la privacidad y términos de esos sitios es tu responsabilidad.
          </p>

          <h2>8. Modificación de Términos</h2>
          <p>
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Tu uso continuado del sitio constituye aceptación de cualquier cambio.
          </p>

          <h2>9. Terminación</h2>
          <p>
            Podemos terminar o suspender tu acceso al sitio en cualquier momento por incumplimiento de estos términos.
          </p>

          <h2>10. Ley Aplicable</h2>
          <p>
            Estos términos se rigen por la ley del lugar donde se encuentran los servidores del sitio web.
          </p>

          <p className="text-sm text-warm-600 mt-8">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
        </div>
      </section>
    </>
  );
}
