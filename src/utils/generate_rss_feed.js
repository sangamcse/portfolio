import fs from 'fs';
import { Feed } from 'feed';

import { getFrontMatters } from 'utils/get_front_matters';
import { BLOG_PATH_PREFIX } from 'utils/mdx';
import { rootUrl } from 'utils/constants';

export default async function generateRssFeed() {
  const allPosts = await getFrontMatters(`${BLOG_PATH_PREFIX}**/*.mdx`);

  const feedOptions = {
    title: 'Blog posts | RSS Feed',
    description: 'Welcome to my blog posts!',
    id: rootUrl,
    link: rootUrl,
    image: 'https://avatars.githubusercontent.com/u/26381717',
    favicon: `${rootUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Sangam`,
    generator: `Feed for Sangam's posts`,
    feedLinks: {
      rss2: `${rootUrl}/rss.xml`,
      json: `${rootUrl}/rss.json`,
      atom: `${rootUrl}/atom.xml`,
    },
  };

  const feed = new Feed(feedOptions);

  allPosts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${rootUrl}/${post.slug}`,
      link: `${rootUrl}/${post.slug}`,
      description: post.snippet,
      date: new Date(post.publishedAt),
      image: `${rootUrl}/${post.img}`,
      content: post.content,
    });
  });

  fs.writeFileSync('./public/rss.xml', feed.rss2());
  fs.writeFileSync('./public/rss.json', feed.json1());
  fs.writeFileSync('./public/atom.xml', feed.atom1());
}
