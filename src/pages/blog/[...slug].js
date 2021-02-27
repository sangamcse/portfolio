// import renderToString from 'next-mdx-remote/render-to-string';
import matter from 'gray-matter';
import { glob } from 'glob';

import { BlogPost } from 'components/blog/blog_post/blog_post';
import { formatMdxPath } from 'utils/formatMdxPath';
import { BLOG_PATH_PREFIX, blogComponents, mdxOptions } from 'utils/mdx';

export async function getStaticPaths() {
  const paths = glob.sync(`${BLOG_PATH_PREFIX}**/*.mdx`);

  return {
    paths: paths.map(path => {
      const slug = formatMdxPath(path)
        .replace('blog/', '')
        .split('/');
      return {
        params: { slug },
      };
    }),
    fallback: false,
  };
}

export const getStaticProps = async ({ params: { slug } }) => {
  const { content, data } = matter.read(
    `${BLOG_PATH_PREFIX}${slug.join('/')}.mdx`
  );
  const frontMatter = {
    ...data,
    publishedAt: data.publishedAt.toISOString(),
  };
  // const mdxSource = await renderToString(content, {
  //   scope: frontMatter,
  //   components: blogComponents,
  //   mdxOptions,
  // });

  return {
    props: {
      // source: mdxSource,
      frontMatter,
    },
  };
};

export default BlogPost;
