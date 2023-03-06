import { NextSeo } from 'next-seo';

import { getSeoProps } from 'components/next_seo_config';
import { MyHead } from 'components/SiteHead';
import Layout from 'components/Layout';
import { Blog } from 'components/blog/blog';

import { generateRssFeed } from 'utils/generate_rss_feed';

const title = 'Blog | sangamcse';
const description =
  "Sangam's thoughts on software engineering, travelling, photography and many more subjects, in written form!";

export const getStaticProps = async () => ({
  props: { pages: await generateRssFeed() },
});

function Index({ pages }) {
  return (
    <Layout>
      <MyHead />
      <NextSeo {...getSeoProps({ title, description })} />
      <Blog pages={pages} />
    </Layout>
  );
}

export default Index;
