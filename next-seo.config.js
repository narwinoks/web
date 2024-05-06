const canonicalUrl = 'https://narnowin.id';
const metaImage = 'https://cloud.narnowowin.com/public/images/narnowin-id.png';
const metaDescription =
  'Seasoned Software Engineer especially in Frontend side, with a passion for creating pixel-perfect web experiences';

const defaultSEOConfig = {
  defaultTitle: 'Winarno - Personal Website',
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: 'Winarno - Personal Website',
    description: metaDescription,
    type: 'website',
    images: [
      {
        url: metaImage,
        alt: 'narnowin.id og-image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'narnowin.id og-image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'narnowin.id og-image',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'narnowin.id',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
