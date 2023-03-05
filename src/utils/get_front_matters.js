import glob from 'glob';
import matter from 'gray-matter';
import { orderBy } from 'lodash';

import { formatMdxPath } from 'utils/format_mdx_path';

export const getFrontMatters = (globPattern) => {
  const paths = glob.sync(globPattern);

  return orderBy(
    paths.map((path) => {
      const { content, data } = matter.read(path);

      return {
        ...data,
        publishedAt: data.publishedAt.toISOString(),
        __resourcePath: path,
        slug: formatMdxPath(path),
        content: content,
      };
    }),
    ['publishedAt'],
    ['desc']
  );
};
