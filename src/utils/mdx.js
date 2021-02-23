import rehypePrism from '@mapbox/rehype-prism';

// import { RelativeTimeDemo } from 'components/blog/RelativeTimeDemo/RelativeTimeDemo';
// import { FeaturedPreview } from 'components/CodingChallenges/2020/CyclingElement/FeaturedPreview';
// import { ShareCTA } from 'components/blog/ShareCTADemo';

export const BLOG_PATH_PREFIX = 'src/pages/blog/';
export const CODING_CHALLENGES_PATH_PREFIX = 'src/pages/coding-challenges/';

export const mdxOptions = { rehypePlugins: [rehypePrism] };

export const blogComponents = {
  // RelativeTimeDemo,
  // ShareCTA,
};

export const challengeComponents = {
  // FeaturedPreview,
};
