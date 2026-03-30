/**
 * CURATED UNSPLASH IMAGES
 * Editorial, real craft scenes - NOT tech/startup stock
 * Keywords: painter at work, plasterer, drywall finishing, painting wall, craftsman, workshop tools, facade renovation, swiss house exterior, interior renovation, masking tape paint, trowel plaster
 */

export const unsplashImages = {
  // Hero - Main editorial image
  hero: {
    url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1920&q=80",
    alt: "Maler bei der Arbeit - Professionelle Malerarbeiten",
    credit: "Unsplash",
  },
  
  // Services section images
  services: {
    general: {
      url: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
      alt: "Malerarbeiten innen und aussen",
    },
    renovation: {
      url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      alt: "Wohnungsrenovation",
    },
    facade: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      alt: "Fassadenrenovation",
    },
    wallpaper: {
      url: "https://images.unsplash.com/photo-1595408076683-5d0c523c0389?w=800&q=80",
      alt: "Tapezierarbeiten",
    },
    plaster: {
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      alt: "Gipserarbeiten",
    },
  },
  
  // Process section
  process: {
    consult: {
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      alt: "Beratung vor Ort",
    },
    plan: {
      url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      alt: "Planung und Offerte",
    },
    execute: {
      url: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
      alt: "Fachgerechte Ausführung",
    },
  },
  
  // About section
  about: {
    craftsman: {
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      alt: "Handwerkskunst und Erfahrung",
    },
  },
  
  // Gallery filler images (for "weitere Eindrücke")
  gallery: {
    interior1: {
      url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      alt: "Innenraumgestaltung",
    },
    interior2: {
      url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      alt: "Wohnzimmer Renovation",
    },
    exterior1: {
      url: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
      alt: "Fassadengestaltung",
    },
    detail1: {
      url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
      alt: "Detailverliebte Arbeit",
    },
    detail2: {
      url: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
      alt: "Präzise Malerarbeit",
    },
  },
};

// Helper to get optimized Unsplash URL with size parameters
export function getUnsplashUrl(url: string, width: number = 800, quality: number = 80): string {
  const baseUrl = url.split('?')[0];
  return `${baseUrl}?w=${width}&q=${quality}&fit=crop`;
}
