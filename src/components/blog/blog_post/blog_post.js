import dynamic from 'next/dynamic';
import { MDXRemote } from 'next-mdx-remote';

import { FeaturedImage } from 'components/blog/featured_image';
import { blogComponents } from 'utils/mdx';

const BelowTheFold = dynamic(() => import('./below_the_fold'));

export const BlogPost = ({
  frontMatter: { title, snippet, tags, img },
  source,
}) => {
  return (
    <div className="bg-prism">
      <main className="m-auto py-8 prose lg:prose-lg xl:prose-xl">
        <article>
          <div className="px-4">
            <h1>{title}</h1>
            <p className="text-xl lg:text-2xl">{snippet}</p>
          </div>
          <FeaturedImage
            title={title}
            description={snippet}
            image={img}
            withSeo
          />
          <section className="px-4 mb-4">
            <MDXRemote {...source} components={blogComponents} lazy />
          </section>
          <BelowTheFold title={title} tags={tags} />
        </article>
      </main>
    </div>
  );
};
