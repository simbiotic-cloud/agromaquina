# Configuración de Analytics y Herramientas de SEO

## 1. Google Analytics (GA4)

### Pasos:
1. Ve a https://analytics.google.com
2. Crea una nueva propiedad para "agromaquina.net"
3. Copia tu **Measurement ID** (formato: G-XXXXXXXXXX)
4. Reemplaza `G-XXXXXXXXXX` en `src/components/Analytics.tsx`

### Código a actualizar:
```typescript
// src/components/Analytics.tsx - Línea 5 y 13
src="https://www.googletagmanager.com/gtag/js?id=G-TU_MEASUREMENT_ID"
gtag('config', 'G-TU_MEASUREMENT_ID');
```

---

## 2. Google Search Console

### Pasos:
1. Ve a https://search.google.com/search-console/about
2. Verifica la propiedad "agromaquina.net" usando:
   - **Meta tag (Recomendado)**: Copia el content del meta tag
   - O sube el archivo de verificación en /public/google-verification.html

### Código a actualizar:
```typescript
// src/app/layout.tsx - Línea 27
verification: {
  google: "your-google-verification-code-here",
}
```

3. Envía tu sitemap:
   - URL: https://agromaquina.net/sitemap.xml
   - Google Search Console > Sitemaps > Añadir sitemap

---

## 3. Bing Webmaster Tools

### Pasos:
1. Ve a https://www.bing.com/webmasters
2. Añade sitio "agromaquina.net"
3. Verifica con meta tag o archivo
4. Envía tu sitemap

### Código a actualizar:
```typescript
// src/app/layout.tsx - Línea 30
other: {
  "msvalidate.01": "your-bing-verification-code-here",
}
```

---

## 4. Checklist Final

- [ ] Google Analytics configurado (G-ID añadido)
- [ ] Google Search Console verificado
- [ ] Sitemap enviado a GSC
- [ ] Bing Webmaster Tools configurado
- [ ] Meta tags de verificación añadidos
- [ ] robots.txt funcionando en /robots.txt
- [ ] Página https://agromaquina.net accesible

---

## Archivos Relacionados

- `src/components/Analytics.tsx` - Analytics script
- `src/app/layout.tsx` - Meta tags de verificación
- `public/robots.txt` - Configuración de crawlers
- `src/app/sitemap.ts` - Sitemap dinámico
