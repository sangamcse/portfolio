import { DefaultSeo } from 'next-seo';

import Layout from 'components/Layout';
import { MyHead } from 'components/SiteHead';
import { About as AboutComponent } from 'components/About';
import { getSeoProps } from 'components/next_seo_config';

function About() {
  return (
    <Layout>
      <MyHead />
      <DefaultSeo {...getSeoProps({ title: 'About | sangamcse' })} />
      <AboutComponent />
    </Layout>
  );
}

export default About;
