import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  keywords?: string;
  robots?: string;
  author?: string;
}

export const useSEO = (seoProps: SEOProps) => {
  useEffect(() => {
    // Update title
    if (seoProps.title) {
      document.title = seoProps.title;
      updateMetaTag('og:title', seoProps.ogTitle || seoProps.title);
      updateMetaTag('twitter:title', seoProps.twitterTitle || seoProps.title);
    }

    // Update description
    if (seoProps.description) {
      updateMetaTag('description', seoProps.description);
      updateMetaTag('og:description', seoProps.ogDescription || seoProps.description);
      updateMetaTag('twitter:description', seoProps.twitterDescription || seoProps.description);
    }

    // Update keywords
    if (seoProps.keywords) {
      updateMetaTag('keywords', seoProps.keywords);
    }

    // Update robots
    if (seoProps.robots) {
      updateMetaTag('robots', seoProps.robots);
    }

    // Update author
    if (seoProps.author) {
      updateMetaTag('author', seoProps.author);
    }

    // Update Open Graph tags
    if (seoProps.ogImage) {
      updateMetaTag('og:image', seoProps.ogImage, 'property');
      updateMetaTag('og:image:width', '1200', 'property');
      updateMetaTag('og:image:height', '630', 'property');
    }

    if (seoProps.ogUrl) {
      updateMetaTag('og:url', seoProps.ogUrl, 'property');
    }

    // Update Twitter Card tags
    if (seoProps.twitterImage) {
      updateMetaTag('twitter:image', seoProps.twitterImage);
    }

    // Update canonical URL
    if (seoProps.canonical) {
      updateCanonicalLink(seoProps.canonical);
    }
  }, [seoProps]);
};

const updateMetaTag = (name: string, content: string, attribute: string = 'name'): void => {
  let element = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.content = content;
};

const updateCanonicalLink = (href: string): void => {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }

  link.href = href;
};

export const addStructuredData = (data: Record<string, any>): void => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

export const removeStructuredData = (type: string): void => {
  const scripts = document.querySelectorAll('script[type="application/ld+json"]');
  scripts.forEach(script => {
    try {
      const data = JSON.parse(script.textContent || '{}');
      if (data['@type'] === type) {
        script.remove();
      }
    } catch (e) {
      // Skip parsing errors
    }
  });
};
