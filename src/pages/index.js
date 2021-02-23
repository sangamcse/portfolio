import { DefaultSeo } from 'next-seo';

import Layout from 'components/Layout';
import { MyHead } from 'components/SiteHead';
import { Body } from 'components/Body';
import { getSeoProps } from 'components/next_seo_config';

function Index() {
  return (
    <Layout>
      <MyHead />
      <DefaultSeo {...getSeoProps()} />
      <Body />
    </Layout>
  );
}

export default Index;
