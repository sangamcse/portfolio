import { NextSeo } from 'next-seo';

import { getSeoProps } from 'components/next_seo_config';
import { MyHead } from 'components/SiteHead';
import Layout from 'components/Layout';
import { Blog } from 'components/blog/blog';

import { getFrontMatters } from 'utils/get_front_matters';
import { BLOG_PATH_PREFIX } from 'utils/mdx';

const title = 'Blog | sangamcse';
const description =
  "Sangam's thoughts on software engineering, travelling, photography and many more subjects, in written form!";

export const getStaticProps = () => ({
  props: { pages: getFrontMatters(`${BLOG_PATH_PREFIX}**/*.mdx`) },
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
