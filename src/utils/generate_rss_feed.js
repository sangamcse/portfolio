import fs from 'fs';
import ReactDOMServer from 'react-dom/server';
import React, { Fragment } from 'react';
import { Feed } from 'feed';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import { getFrontMatters } from 'utils/get_front_matters';
import { BLOG_PATH_PREFIX, blogComponents, mdxOptions } from 'utils/mdx';
import { rootUrl } from 'utils/constants';

export async function generateRssFeed() {
  const allPosts = await getFrontMatters(`${BLOG_PATH_PREFIX}**/*.mdx`);

  const feedOptions = {
    title: 'Sangam Kumar',
    description: 'My most recent blog posts',
    id: rootUrl,
    link: rootUrl,
    image: 'https://avatars.githubusercontent.com/u/26381717',
    favicon: `${rootUrl}/favicon.ico`,
    feedLinks: {
      json: `${rootUrl}/json`,
      rss2: `${rootUrl}/rss`,
    },
    generator: rootUrl,
    author: {
      name: 'Sangam Kumar',
      email: 'sangamcse.dev@gmail.com',
      link: rootUrl,
    },
    copyright: `All rights reserved ${new Date().getFullYear()}, Sangam Kumar`,
  };

  const feed = new Feed(feedOptions);

  const entries = await Promise.all(
    allPosts.slice(0, 10).map(async (post) => {
      const { content, title, slug, img, publishedAt, tags, snippet } = post;

      const source = await serialize(content, {
        scope: { title, slug, img, publishedAt, tags, snippet },
        components: blogComponents,
        mdxOptions,
      });

      return {
        ...post,
        content: source,
      };
    })
  );

  entries.forEach(
    ({ title, slug, img, publishedAt, tags, snippet, content }) => {
      feed.addItem({
        title,
        id: `${rootUrl}/${slug}`,
        link: `${rootUrl}/${slug}`,
        date: new Date(publishedAt),
        published: new Date(publishedAt),
        image: `${rootUrl}/${img}`,
        description: snippet,
        category: tags.map((tag) => ({ name: tag })),
        content: ReactDOMServer.renderToStaticMarkup(
          <Fragment>
            <MDXRemote {...content} components={blogComponents} />
            <a
              href={`mailto:sangamcse.dev@gmail.com?subject=Reply%20to:%20“${title}”`}
            >
              Reply via e-mail
            </a>
          </Fragment>
        ),
      });
    }
  );

  fs.writeFileSync('./public/feed.xml', feed.rss2());
  fs.writeFileSync('./public/feed.json', feed.json1());

  return allPosts;
}
