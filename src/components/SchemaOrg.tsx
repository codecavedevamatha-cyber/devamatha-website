import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SchemaOrgProps {
  type: 'Organization' | 'WebSite' | 'BreadcrumbList' | 'CollegeOrUniversity';
  data?: {
    breadcrumbs?: Array<Record<string, unknown>>;
    courses?: Array<Record<string, unknown>>;
    description?: string;
  };
}

const SITE_URL = 'https://www.devamathacollege.ac.in';
const SITE_NAME = 'Devamatha Arts & Science College';
const SITE_DESCRIPTION =
  'Official website of Devamatha Arts & Science College, Paisakary.';
const SOCIAL_PROFILES = [
  'https://www.instagram.com/devamathacollegepaisakary/',
  'https://youtube.com/@devamathacollegepaisakary',
];

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: 'Paisakary P O, Payyavoor',
  addressLocality: 'Kannur',
  addressRegion: 'Kerala',
  postalCode: '670633',
  addressCountry: 'IN',
};

const logo = {
  '@type': 'ImageObject',
  url: `${SITE_URL}/logo.png`,
};

const SchemaOrg: React.FC<SchemaOrgProps> = ({ type, data }) => {
  let schema: Record<string, unknown> | null = null;

  switch (type) {
    case 'Organization':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: 'Deva Matha College',
        url: SITE_URL,
        logo,
        image: `${SITE_URL}/img/hero.jpg`,
        description: SITE_DESCRIPTION,
        address: postalAddress,
        email: 'mailto:dmc@devamathacollege.ac.in',
        telephone: '+91-460-293-9190',
        sameAs: SOCIAL_PROFILES,
      };
      break;

    case 'WebSite':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        inLanguage: 'en-IN',
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
      };
      break;

    case 'BreadcrumbList':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: data?.breadcrumbs || [],
      };
      break;

    case 'CollegeOrUniversity':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'CollegeOrUniversity',
        '@id': `${SITE_URL}/#college`,
        name: SITE_NAME,
        alternateName: 'Deva Matha College',
        url: SITE_URL,
        logo,
        image: `${SITE_URL}/img/hero.jpg`,
        description: data?.description || SITE_DESCRIPTION,
        address: postalAddress,
        email: 'mailto:dmc@devamathacollege.ac.in',
        telephone: '+91-460-293-9190',
        sameAs: SOCIAL_PROFILES,
        ...(data?.courses
          ? {
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Academic Programmes',
                itemListElement: data.courses,
              },
            }
          : {}),
      };
      break;
  }

  if (!schema) {
    return null;
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SchemaOrg;
