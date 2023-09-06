import dynamic from 'next/dynamic';
import { MDXRemote } from 'next-mdx-remote';

import { FeaturedImage } from 'components/blog/featured_image';
import { AdBanner } from 'components/ad_banner';
import { blogComponents } from 'utils/mdx';

const BelowTheFold = dynamic(() => import('./below_the_fold'));

export const BlogPost = ({
  frontMatter: { title, snippet, tags, img },
  source,
}) => {
  return (
    <div className="bg-prism lg:relative">
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
      <div className="lg:absolute lg:right-0 items-center lg:top-1/2 lg:transform lg:-translate-y-1/2 p-8">
        <AdBanner height={240} width={120} className="m-auto" />
      </div>
    </div>
  );
};
