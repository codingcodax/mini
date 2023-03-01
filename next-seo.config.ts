import type { DefaultSeoProps } from 'next-seo';

const title = 'mini | tailwind snippets';
export const description =
  'mini is an awesome collection of links, loaders, buttons and more built with tailwindcss, you can copy the source and open in tailwindcss playgrond.';
export const domain = 'https://mini.codingcodax.dev';

const SEO: DefaultSeoProps = {
  title,
  description,
  canonical: domain,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: domain,
    title,
    description,
    siteName: 'title',
    images: [
      {
        url: `${domain}/og.jpg`,
        alt: 'title',
        width: 1200,
        height: 675,
      },
    ],
  },
  twitter: {
    handle: '@codingcodax',
    site: '@codingcodax',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'apple-mobile-web-app-tittle',
      content: title,
    },
    {
      name: 'application-name',
      content: title,
    },
    {
      name: 'msapplication-TileColor',
      content: '#0e0e11',
    },
    {
      name: 'theme-color',
      content: '#0e0e11',
    },
    {
      name: 'msapplication-config',
      content: '/favicons/browserconfig.xml',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicons/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicons/favicon-16x16.png',
    },
    {
      rel: 'icon',
      href: '/favicons/favicon.ico',
    },
    {
      rel: 'manifest',
      href: '/favicons/site.manifest',
    },
    {
      rel: 'mask-icon',
      href: '/favicons/safari-pinned-tab.svg',
      color: '#0e0e11',
    },
  ],
};

export default SEO;
