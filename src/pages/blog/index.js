import { Blog } from 'components/blog/blog';
import { getFrontMatters } from 'utils/get_front_matters';
import { BLOG_PATH_PREFIX } from 'utils/mdx';

export const getStaticProps = () => ({
  props: { pages: getFrontMatters(`${BLOG_PATH_PREFIX}**/*.mdx`) },
});

export default Blog;
