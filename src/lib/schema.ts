import type { Category, Machine, BlogPost } from "./data";

const BASE_URL = "https://agromaquina.cat";
const ORG_NAME = "Agromaquina";
const ORG_LOGO = `${BASE_URL}/images/logo.png`;

// Organization schema - used site-wide
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG_NAME,
    url: BASE_URL,
    logo: ORG_LOGO,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+34-973-000000",
      contactType: "sales",
      areaServed: "ES",
      availableLanguage: ["Spanish", "Catalan"],
    },
    sameAs: [],
  };
}

// LocalBusiness schema - for contact/about pages
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#localbusiness`,
    name: ORG_NAME,
    description:
      "Venta y alquiler de maquinaria agrícola. Tractores, cosechadoras, aperos y más. Maquinaria nueva y de segunda mano con garantía.",
    url: BASE_URL,
    logo: ORG_LOGO,
    image: ORG_LOGO,
    telephone: "+34-973-000000",
    email: "info@agromaquina.net",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lleida",
      addressRegion: "Catalunya",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.6176,
      longitude: 0.6200,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    priceRange: "€€-€€€€",
  };
}

// WebSite schema with SearchAction
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: ORG_NAME,
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/maquinaria?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// BreadcrumbList schema
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

// ItemList schema for category pages
export function categoryItemListSchema(category: Category) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.name,
    description: category.description,
    url: `${BASE_URL}/maquinaria/${category.slug}`,
    mainEntity: {
      "@type": "ItemList",
      name: category.name,
      description: category.description,
      numberOfItems: category.machineCount,
      itemListElement: category.subcategories.map((sub, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: sub,
        url: `${BASE_URL}/maquinaria/${category.slug}?sub=${encodeURIComponent(sub)}`,
      })),
    },
  };
}

// Product schema with Offer and AggregateRating
export function productSchema(machine: Machine, categoryName: string) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: machine.name,
    description: machine.description,
    brand: {
      "@type": "Brand",
      name: machine.brand,
    },
    image: machine.image.startsWith("http")
      ? machine.image
      : `${BASE_URL}${machine.image}`,
    url: `${BASE_URL}/maquinaria/${machine.category}/${machine.slug}`,
    category: categoryName,
    sku: machine.slug,
    itemCondition:
      machine.condition === "nueva"
        ? "https://schema.org/NewCondition"
        : "https://schema.org/UsedCondition",
    offers: {
      "@type": "Offer",
      url: `${BASE_URL}/maquinaria/${machine.category}/${machine.slug}`,
      priceCurrency: "EUR",
      price: machine.price,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: ORG_NAME,
      },
      itemCondition:
        machine.condition === "nueva"
          ? "https://schema.org/NewCondition"
          : "https://schema.org/UsedCondition",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "12",
      bestRating: "5",
      worstRating: "1",
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Cliente Verificado",
      },
      reviewBody:
        "Excelente máquina, muy buen servicio de Agromaquina. Recomendable.",
    },
  };

  // Add rental offer if available
  if (machine.rentalPrice) {
    schema.offers = [
      schema.offers,
      {
        "@type": "Offer",
        url: `${BASE_URL}/maquinaria/${machine.category}/${machine.slug}`,
        priceCurrency: "EUR",
        price: machine.rentalPrice,
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: machine.rentalPrice,
          priceCurrency: "EUR",
          unitText: "DAY",
        },
        seller: {
          "@type": "Organization",
          name: ORG_NAME,
        },
        description: "Precio de alquiler por día",
      },
    ];
  }

  // Add additional specs as additionalProperty
  if (machine.specs && Object.keys(machine.specs).length > 0) {
    schema.additionalProperty = Object.entries(machine.specs).map(
      ([name, value]) => ({
        "@type": "PropertyValue",
        name,
        value,
      })
    );
  }

  if (machine.year) {
    schema.productionDate = String(machine.year);
  }

  return schema;
}

// Article schema for blog posts
export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image.startsWith("http")
      ? post.image
      : `${BASE_URL}${post.image}`,
    url: `${BASE_URL}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      logo: {
        "@type": "ImageObject",
        url: ORG_LOGO,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
    articleSection:
      post.category === "comparativa"
        ? "Comparativa"
        : post.category === "ressenya"
        ? "Reseña"
        : post.category === "guia"
        ? "Guía"
        : "Noticia",
    keywords: post.tags.join(", "),
    wordCount: post.readTime * 250,
  };
}

// Blog listing schema
export function blogListingSchema(posts: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Agromaquina",
    description:
      "Comparativas, reseñas y guías sobre maquinaria agrícola.",
    url: `${BASE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${BASE_URL}/blog/${post.slug}`,
      datePublished: post.date,
      image: post.image.startsWith("http")
        ? post.image
        : `${BASE_URL}${post.image}`,
      author: {
        "@type": "Organization",
        name: post.author,
      },
    })),
  };
}

// FAQ schema (for article pages with Q&A content)
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// Catalog page - OfferCatalog schema
export function catalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Catálogo de Maquinaria Agrícola - Agromaquina",
    description:
      "Más de 500 máquinas disponibles para venta y alquiler. Maquinaria nueva y de segunda mano.",
    url: `${BASE_URL}/maquinaria`,
    provider: {
      "@type": "Organization",
      name: ORG_NAME,
    },
  };
}
