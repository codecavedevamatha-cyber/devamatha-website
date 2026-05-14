import React from 'react';

interface SchemaOrgProps {
  type: 'Organization' | 'WebSite' | 'BreadcrumbList' | 'CollegeOrUniversity';
  data?: any;
}

const SchemaOrg: React.FC<SchemaOrgProps> = ({ type, data }) => {
  let schema: any = {};

  switch (type) {
    case 'Organization':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'CollegeOrUniversity',
        name: 'Devamatha Arts & Science College',
        url: 'https://www.devamathacollege.ac.in/',
        logo: 'https://www.devamathacollege.ac.in/logo.png',
        description: 'Devamatha Arts & Science College - A premier institution for higher education offering undergraduate and postgraduate programmes in various disciplines.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Devamatha College P.O.',
          addressLocality: 'Kannur',
          addressRegion: 'Kerala',
          postalCode: '670632',
          addressCountry: 'IN'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-497-271-5185',
          contactType: 'admissions'
        },
        sameAs: [
          'https://www.facebook.com/devamathacollege',
          'https://www.instagram.com/devamathacollege'
        ]
      };
      break;

    case 'WebSite':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Devamatha Arts & Science College',
        url: 'https://www.devamathacollege.ac.in/',
        description: 'Official website of Devamatha Arts & Science College, Kannur',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.devamathacollege.ac.in/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      };
      break;

    case 'BreadcrumbList':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: data?.breadcrumbs || []
      };
      break;

    case 'CollegeOrUniversity':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'CollegeOrUniversity',
        name: 'Devamatha Arts & Science College',
        url: 'https://www.devamathacollege.ac.in/',
        description: data?.description || 'A premier institution for higher education offering undergraduate and postgraduate programmes.',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Academic Programmes',
          itemListElement: data?.courses || []
        }
      };
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaOrg;
