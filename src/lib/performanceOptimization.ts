/**
 * Core Web Vitals Performance Optimization
 * Monitors and reports on Google Core Web Vitals
 */

export interface CoreWebVitals {
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  ttfb: number | null; // Time to First Byte
}

/**
 * Initialize Core Web Vitals monitoring
 * This should be called early in your app
 */
export const initCoreWebVitalsMonitoring = () => {
  // Check if Web Vitals API is available
  if ('web-vital' in window || 'PerformanceObserver' in window) {
    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
      reportMetric('LCP', lastEntry.renderTime || lastEntry.loadTime);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          const firstSessionEntry = clsValue + entry.value;
          clsValue = firstSessionEntry;
          console.log('CLS:', clsValue);
          reportMetric('CLS', clsValue);
        }
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('FID:', entry.processingDuration);
        reportMetric('FID', entry.processingDuration);
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Time to First Byte
    window.addEventListener('load', () => {
      const perfData = window.performance.timing;
      const ttfb = perfData.responseStart - perfData.fetchStart;
      console.log('TTFB:', ttfb);
      reportMetric('TTFB', ttfb);
    });
  }
};

/**
 * Report metrics to analytics or console
 */
const reportMetric = (metricName: string, value: number) => {
  // Log to Google Analytics
  if (window.gtag) {
    window.gtag('event', metricName, {
      value: Math.round(value),
      event_category: 'Web Vitals',
    });
  }

  // Also log to console for debugging
  console.log(`${metricName}: ${value}ms`);
};

/**
 * Performance optimization recommendations
 */
export const PERFORMANCE_TARGETS = {
  LCP: {
    target: 2500, // 2.5 seconds
    description: 'Largest Contentful Paint - time to render main content',
    optimization: 'Optimize images, lazy load below-fold content, minimize JavaScript'
  },
  FID: {
    target: 100, // 100 milliseconds
    description: 'First Input Delay - responsiveness to user input',
    optimization: 'Break up long JavaScript tasks, use Web Workers'
  },
  CLS: {
    target: 0.1, // 0.1 points
    description: 'Cumulative Layout Shift - visual stability',
    optimization: 'Reserve space for images and ads, avoid inserting content above existing'
  },
  TTFB: {
    target: 600, // 600 milliseconds
    description: 'Time to First Byte - server response time',
    optimization: 'Implement caching, use CDN, optimize server response'
  }
};

/**
 * Image optimization guidelines
 */
export const IMAGE_OPTIMIZATION = {
  ogImage: {
    width: 1200,
    height: 630,
    format: 'jpg or webp',
    maxSize: '100KB',
    description: 'Open Graph image for social sharing'
  },
  favicon: {
    sizes: '32x32, 64x64, 128x128',
    format: 'ico or png',
    description: 'Website favicon'
  },
  logo: {
    width: 300,
    height: 300,
    format: 'png or svg',
    description: 'Organization logo for schema'
  }
};

/**
 * Add performance budget script to monitor metrics
 */
export const monitorPerformance = () => {
  // Monitor resource timing
  window.addEventListener('load', () => {
    const resources = performance.getEntriesByType('resource');
    const timing = performance.timing;

    console.group('Performance Metrics');
    console.log('Page Load Time:', timing.loadEventEnd - timing.navigationStart, 'ms');
    console.log('DOM Content Loaded:', timing.domContentLoadedEventEnd - timing.navigationStart, 'ms');
    console.log('Resources Count:', resources.length);
    console.log('Total Resource Size:', resources.reduce((sum, r) => sum + (r.transferSize || 0), 0) / 1024, 'KB');
    console.groupEnd();
  });
};
