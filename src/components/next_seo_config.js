import { rootUrl } from 'utils/constants';

const defaultSeo = {
  title: 'Sangam Kumar | sangamcse',
  description: 'Senior Software Engineer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: rootUrl,
    site_name: 'sangamcse',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/26381717?s=512',
        width: 512,
        height: 512,
        alt: 'Sangam Kumar',
      },
    ],
  },
  twitter: {
    handle: '@meetsangamcse',
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
