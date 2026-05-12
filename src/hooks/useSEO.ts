/**
 * useSEO Hook - React hook for managing SEO meta tags and structured data
 * Can be used in any component to dynamically set meta tags
 */

import { useEffect } from 'react';
import { setMetaTags, addStructuredData, SEOMetaTags } from '@/lib/seoService';

export interface UseSEOOptions extends SEOMetaTags {
  structuredData?: Record<string, any>;
}

/**
 * Hook to manage SEO meta tags for the current page
 * @param options - SEO configuration options
 */
export const useSEO = (options: UseSEOOptions): void => {
  useEffect(() => {
    // Set basic meta tags
    setMetaTags({
      title: options.title,
      description: options.description,
      keywords: options.keywords,
      og_title: options.og_title,
      og_description: options.og_description,
      og_image: options.og_image,
      twitter_title: options.twitter_title,
      twitter_description: options.twitter_description,
      twitter_image: options.twitter_image,
      canonical: options.canonical
    });

    // Add structured data if provided
    if (options.structuredData) {
      addStructuredData(options.structuredData);
    }

    // Scroll to top on page load (SEO best practice)
    window.scrollTo(0, 0);
  }, [options]);
};

export default useSEO;
