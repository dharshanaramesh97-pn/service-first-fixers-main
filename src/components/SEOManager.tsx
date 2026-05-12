import { useEffect } from 'react';
import { useSEO, addStructuredData } from '@/hooks/use-seo';
import { SITE_CONFIG, SEO_PAGE_CONFIG, STRUCTURED_DATA } from '@/lib/seoConfig';

/**
 * SEO Meta Component
 * Manages all SEO-related meta tags and structured data for the page
 * This component should be placed inside the router/main app
 */
export const SEOManager = () => {
  useEffect(() => {
    // Add Organization schema
    addStructuredData(STRUCTURED_DATA.organization);

    // Add LocalBusiness schema
    addStructuredData(STRUCTURED_DATA.localBusiness);

    // Add FAQ schema
    addStructuredData(STRUCTURED_DATA.faq);

    // Add services schema
    STRUCTURED_DATA.services.forEach(service => {
      addStructuredData(service);
    });

    // Additional optimizations
    addGoogleAnalytics();
    addBreadcrumbs();
  }, []);

  return null; // This component doesn't render anything
};

/**
 * Hook for managing page-specific SEO
 */
export const usePageSEO = (pageConfig: Partial<typeof SEO_PAGE_CONFIG.home>) => {
  useSEO({
    title: pageConfig.title || SEO_PAGE_CONFIG.home.title,
    description: pageConfig.description || SEO_PAGE_CONFIG.home.description,
    keywords: pageConfig.keywords || SEO_PAGE_CONFIG.home.keywords,
    canonical: `${SITE_CONFIG.domain}${window.location.pathname}`,
  });
};

/**
 * Add Google Analytics measurement ID
 * Replace 'YOUR_GA_MEASUREMENT_ID' with your actual measurement ID
 */
const addGoogleAnalytics = () => {
  if (document.querySelector('script[src*="gtag/js"]')) return; // Already added

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR_GA_MEASUREMENT_ID';
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_MEASUREMENT_ID', {
    page_path: window.location.pathname,
    page_title: document.title,
  });
};

/**
 * Add breadcrumb schema for better navigation in search results
 */
const addBreadcrumbs = () => {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': SITE_CONFIG.domain,
      },
    ],
  };

  // Add more breadcrumbs based on current URL
  const pathname = window.location.pathname;
  if (pathname !== '/') {
    breadcrumbSchema.itemListElement.push({
      '@type': 'ListItem',
      'position': 2,
      'name': document.title,
      'item': `${SITE_CONFIG.domain}${pathname}`,
    });
  }

  addStructuredData(breadcrumbSchema);
};

/**
 * SEO Utility Component for Head Management
 * Include this in your main App component
 */
export const SEOHelmet = ({ title, description, image, url }: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}) => {
  useEffect(() => {
    const updateMetaTags = () => {
      // Update title
      if (title) {
        document.title = title;
        updateMetaTag('og:title', title, 'property');
        updateMetaTag('twitter:title', title, 'name');
      }

      // Update description
      if (description) {
        updateMetaTag('description', description, 'name');
        updateMetaTag('og:description', description, 'property');
        updateMetaTag('twitter:description', description, 'name');
      }

      // Update image
      if (image) {
        updateMetaTag('og:image', image, 'property');
        updateMetaTag('twitter:image', image, 'name');
      }

      // Update URL
      if (url) {
        updateMetaTag('og:url', url, 'property');
        updateCanonicalLink(url);
      }
    };

    updateMetaTags();
  }, [title, description, image, url]);

  return null;
};

const updateMetaTag = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
  let element = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.content = content;
};

const updateCanonicalLink = (href: string) => {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = href;
};
