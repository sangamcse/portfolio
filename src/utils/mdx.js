import rehypePrism from '@mapbox/rehype-prism';
import imgLinks from '@pondorasti/remark-img-links';

import { rootUrl } from 'utils/constants';

// import { RelativeTimeDemo } from 'components/blog/RelativeTimeDemo/RelativeTimeDemo';
// import { FeaturedPreview } from 'components/CodingChallenges/2020/CyclingElement/FeaturedPreview';
// import { ShareCTA } from 'components/blog/ShareCTADemo';

export const BLOG_PATH_PREFIX = 'src/pages/blog/';
export const CODING_CHALLENGES_PATH_PREFIX = 'src/pages/coding-challenges/';

export const mdxOptions = {
  rehypePlugins: [rehypePrism],
  remarkPlugins: [[imgLinks, { absolutePath: rootUrl }]],
};

export const blogComponents = {
  // RelativeTimeDemo,
  // ShareCTA,
};

export const challengeComponents = {
  // FeaturedPreview,
};
