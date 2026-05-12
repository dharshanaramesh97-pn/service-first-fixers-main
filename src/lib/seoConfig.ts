/**
 * SEO Configuration and constants for MM Refrigeration
 */

export const SITE_CONFIG = {
  domain: 'https://mmrefrigeration.co.in',
  siteName: 'MM Refrigeration',
  description: '24/7 expert refrigeration repair services for Refrigerators, Washing Machines & RO Water Purifiers in India. All brands covered with 1-year service warranty.',
  keywords: 'refrigerator repair, washing machine repair, RO water purifier service, appliance repair, 24/7 repair service, refrigeration maintenance',
  author: 'MM Refrigeration',
  email: 'mmrefrigeration2025@gmail.com',
  phone: '+919894159805',
  region: 'IN',
  language: 'en-IN',
};

export const DEFAULT_OG_IMAGE = '/og-image.jpg'; // Make sure to add this image to public folder

export const STRUCTURED_DATA = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'MM Refrigeration',
    'url': SITE_CONFIG.domain,
    'logo': `${SITE_CONFIG.domain}/logo.png`,
    'description': SITE_CONFIG.description,
    'sameAs': [
      'https://www.facebook.com/mmrefrigeration',
      'https://www.instagram.com/mmrefrigeration',
      'https://www.youtube.com/mmrefrigeration',
      'https://www.linkedin.com/company/mmrefrigeration',
    ],
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': SITE_CONFIG.phone,
      'contactType': 'Customer Service',
      'availableLanguage': ['en', 'hi'],
    },
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'IN',
      'addressRegion': 'TN',
    },
  },

  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'MM Refrigeration',
    'description': SITE_CONFIG.description,
    'telephone': SITE_CONFIG.phone,
    'email': SITE_CONFIG.email,
    'url': SITE_CONFIG.domain,
    'priceRange': '$$',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59',
    },
    'areaServed': {
      '@type': 'City',
      'name': 'India',
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'ratingCount': '250',
    },
  },

  services: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Refrigerator Repair',
      'description': 'Professional refrigerator repair services for all brands with emergency support.',
      'provider': {
        '@type': 'Organization',
        'name': 'MM Refrigeration',
        'telephone': SITE_CONFIG.phone,
      },
      'areaServed': {
        '@type': 'City',
        'name': 'India',
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.8',
        'ratingCount': '150',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Washing Machine Repair',
      'description': 'Expert washing machine repair and maintenance services for all major brands.',
      'provider': {
        '@type': 'Organization',
        'name': 'MM Refrigeration',
        'telephone': SITE_CONFIG.phone,
      },
      'areaServed': {
        '@type': 'City',
        'name': 'India',
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.7',
        'ratingCount': '80',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'RO Water Purifier Service',
      'description': 'Comprehensive RO water purifier maintenance and filter replacement services.',
      'provider': {
        '@type': 'Organization',
        'name': 'MM Refrigeration',
        'telephone': SITE_CONFIG.phone,
      },
      'areaServed': {
        '@type': 'City',
        'name': 'India',
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.6',
        'ratingCount': '120',
      },
    },
  ],

  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What brands do you service?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We service all major brands including LG, Samsung, Whirlpool, Bosch, IFB, Godrej, Haier, Voltas, and more.',
        },
      },
      {
        '@type': 'Question',
        'name': 'What is your service warranty?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We provide a comprehensive 1-year service warranty on all repairs.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Are you available 24/7?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, we provide 24/7 emergency repair services. You can call us anytime for assistance.',
        },
      },
      {
        '@type': 'Question',
        'name': 'How do I book a service?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You can book a service through our website contact form, call us directly, or use our booking system. We aim to respond within 30 minutes.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Do you charge for service consultation?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No, we provide free consultation and diagnostics for all appliances.',
        },
      },
    ],
  },
};

export const SEO_PAGE_CONFIG = {
  home: {
    title: 'MM Refrigeration — 24/7 Expert Appliance Repair Services in India',
    description: '24/7 expert repair for Refrigerators, Washing Machines & RO Water Purifiers. All brands covered. 1-year service warranty. Emergency support available.',
    keywords: 'refrigerator repair, washing machine repair, RO purifier service, appliance repair, 24/7 service, emergency repair',
  },
};

export const TWITTER_CONFIG = {
  card: 'summary_large_image',
  creator: '@mmrefrigeration',
  site: '@mmrefrigeration',
};
