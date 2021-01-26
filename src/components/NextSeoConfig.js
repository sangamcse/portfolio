const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';

export const rootUrl = `${protocol}://${process.env.NEXT_PUBLIC_ROOT_URL}`;

const defaultSeo = {
  title: 'Home | sangamcse',
  description: 'Software Development Engineer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: rootUrl,
    site_name: 'sangamcse',
    images: [
      {
        url:
          'https://www.gravatar.com/userimage/132789617/c7c28eea1783212454f7706ff20afca4?size=512',
        width: 512,
        height: 512,
        alt: 'Sangam Kumar',
      },
    ],
  },
  twitter: {
    handle: '@sangamcse',
    cardType: 'summary',
  },
};

export const getSeoProps = ({
  title = defaultSeo.title,
  description = defaultSeo.description,
  openGraph = {},
  twitter = {},
} = {}) => ({
  title,
  description,
  openGraph: { ...defaultSeo.openGraph, title, description, ...openGraph },
  twitter: { ...defaultSeo.twitter, ...twitter },
});
