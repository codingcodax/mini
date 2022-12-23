import { NextSeo } from 'next-seo';

import { description as defaultDescription, domain } from 'next-seo.config';

interface SeoProps {
  name: string;
  path: string;
  description?: string;
  ogImage?: string;
}

const Seo = ({
  name,
  path,
  description = defaultDescription,
  ogImage = domain + '/og.png',
}: SeoProps) => {
  const title = `${name} | slug`;
  const url = `${domain}${path}`;

  return (
    <NextSeo
      canonical={url}
      description={description}
      openGraph={{
        url,
        title,
        description,
        images: [{ url: ogImage, alt: title }],
      }}
      title={title}
    />
  );
};

export default Seo;
