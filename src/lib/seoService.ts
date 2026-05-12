/**
 * SEO Service - Handles meta tags, structured data, and SEO utilities
 * Used to manage dynamic meta tags and SEO configurations
 */

export interface SEOMetaTags {
  title?: string;
  description?: string;
  keywords?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string;
  canonical?: string;
}

export interface LocalBusinessSchema {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  openingHours?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
  image?: string;
  sameAs?: string[];
}

/**
 * Set meta tags dynamically for better SEO
 */
export const setMetaTags = (tags: SEOMetaTags): void => {
  if (tags.title) {
    document.title = tags.title;
    setMetaTag('og:title', tags.og_title || tags.title);
    setMetaTag('twitter:title', tags.twitter_title || tags.title);
  }

  if (tags.description) {
    setMetaTag('description', tags.description);
    setMetaTag('og:description', tags.og_description || tags.description);
    setMetaTag('twitter:description', tags.twitter_description || tags.description);
  }

  if (tags.keywords) {
    setMetaTag('keywords', tags.keywords);
  }

  if (tags.og_image) {
    setMetaTag('og:image', tags.og_image);
    setMetaTag('twitter:image', tags.twitter_image || tags.og_image);
  }

  if (tags.canonical) {
    setCanonicalLink(tags.canonical);
  }
};

/**
 * Helper function to set meta tag
 */
const setMetaTag = (name: string, content: string): void => {
  let element = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      element.setAttribute('property', name);
    } else {
      element.setAttribute('name', name);
    }
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
};

/**
 * Set canonical link
 */
const setCanonicalLink = (url: string): void => {
  let canonical = document.querySelector('link[rel="canonical"]');
  
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  
  canonical.setAttribute('href', url);
};

/**
 * Add structured data (JSON-LD) to the page
 */
export const addStructuredData = (schema: Record<string, any>): void => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Generate LocalBusiness Schema
 */
export const generateLocalBusinessSchema = (data: LocalBusinessSchema): Record<string, any> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': data.url,
    name: data.name,
    description: data.description,
    url: data.url,
    telephone: data.telephone,
    email: data.email,
    ...(data.openingHours && { openingHours: data.openingHours }),
    ...(data.address && { address: {
      '@type': 'PostalAddress',
      ...(data.address.streetAddress && { streetAddress: data.address.streetAddress }),
      ...(data.address.addressLocality && { addressLocality: data.address.addressLocality }),
      ...(data.address.addressRegion && { addressRegion: data.address.addressRegion }),
      ...(data.address.postalCode && { postalCode: data.address.postalCode }),
      addressCountry: data.address.addressCountry
    }}),
    ...(data.image && { image: data.image }),
    ...(data.sameAs && { sameAs: data.sameAs })
  };
};

/**
 * Generate breadcrumb schema
 */
export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>): Record<string, any> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url
    }))
  };
};

/**
 * Generate Organization Schema
 */
export const generateOrganizationSchema = (data: {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  contact?: {
    telephone: string;
    email?: string;
  };
  sameAs?: string[];
}): Record<string, any> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': data.url,
    name: data.name,
    url: data.url,
    ...(data.logo && { logo: data.logo }),
    ...(data.description && { description: data.description }),
    ...(data.contact && {
      contact: {
        '@type': 'ContactPoint',
        telephone: data.contact.telephone,
        contactType: 'Customer Service',
        ...(data.contact.email && { email: data.contact.email })
      }
    }),
    ...(data.sameAs && { sameAs: data.sameAs })
  };
};

/**
 * Generate Product/Service Schema
 */
export const generateServiceSchema = (data: {
  name: string;
  description: string;
  provider: string;
  telephone?: string;
  areaServed?: string;
  serviceTypes?: string[];
}): Record<string, any> => {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Service',
    name: data.name,
    description: data.description,
    provider: {
      '@type': 'LocalBusiness',
      name: data.provider,
      ...(data.telephone && { telephone: data.telephone })
    },
    ...(data.areaServed && { areaServed: data.areaServed }),
    ...(data.serviceTypes && { serviceType: data.serviceTypes })
  };
};

/**
 * Generate Review/AggregateRating Schema
 */
export const generateAggregateRatingSchema = (data: {
  name: string;
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}): Record<string, any> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    name: data.name,
    ratingValue: data.ratingValue,
    reviewCount: data.reviewCount,
    bestRating: data.bestRating || 5,
    worstRating: data.worstRating || 1
  };
};

/**
 * Generate FAQ Schema
 */
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>): Record<string, any> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

/**
 * Get current page meta tags configuration
 */
export const getPageMetaConfig = (page: string): SEOMetaTags => {
  const baseConfig: SEOMetaTags = {
    og_image: 'https://mmrefrigeration.co.in/og-image.jpg',
    canonical: `https://mmrefrigeration.co.in${page === '/' ? '' : page}`
  };

  return baseConfig;
};

export default {
  setMetaTags,
  addStructuredData,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  generateServiceSchema,
  generateAggregateRatingSchema,
  generateFAQSchema,
  getPageMetaConfig
};
