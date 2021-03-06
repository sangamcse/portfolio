import Link from 'next/link';

import { formatMdxPath } from 'utils/format_mdx_path';
import { isoStringToRelativeTime } from 'utils/relative_time';

import { FeaturedImage } from 'components/blog/featured_image';

export const PostSnippet = ({
  title,
  snippet,
  tags,
  publishedAt,
  img,
  __resourcePath,
}) => (
  <li
    className="cursor-pointer even:bg-background-c sm:p-4 first:rounded-tl last:first:rounded-bl transition duration-300 flex-auto"
    key={__resourcePath}
  >
    <article>
      <Link href={formatMdxPath(__resourcePath)}>
        <a className="sm:grid sm:grid-cols-3 sm:gap-8">
          <FeaturedImage title={title} className="sm:m-auto" image={img} />
          <div className="p-4 sm:p-0 sm:col-span-2 prose">
            <h2 className="text-2xl leading-normal underline mb-2">{title}</h2>
            <p className="mb-4 text-body">{snippet}</p>
            <div className="flex flex-col sm:flex-row justify-between text-sm text-right">
              <div className="mb-4 sm:mb-0">
                {tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-purple-50 text-purple-900 p-2 mr-2 rounded shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-body">
                {isoStringToRelativeTime(publishedAt)}
              </span>
            </div>
          </div>
        </a>
      </Link>
    </article>
  </li>
);
