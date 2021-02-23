import { NextSeo } from 'next-seo';

import Layout from 'components/Layout';
import { MyHead } from 'components/SiteHead';
import { getSeoProps } from 'components/next_seo_config';

import { PostSnippet } from 'components/blog/post_snippet';

const title = 'Blog | sangamcse';
const description =
  "Sangam's thoughts on software engineering, travelling, photography and many more subjects, in written form!";

export const Blog = ({ pages }) => (
  <Layout>
    <MyHead />
    <NextSeo {...getSeoProps({ title, description })} />
    <div className="bg-prism flex-grow flex justify-center">
      <main className="text-lg max-w-readability-lg py-4">
        <h1 className="text-4xl text-heading p-4">Blog</h1>
        <ul className="mb-8 bg-white rounded shadow max-w-full">
          {pages.map(page => (
            <PostSnippet key={page.__resourcePath} {...page} />
          ))}
        </ul>
      </main>
    </div>
  </Layout>
);
