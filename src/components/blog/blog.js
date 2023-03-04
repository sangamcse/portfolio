import { PostSnippet } from 'components/blog/post_snippet';

export const Blog = ({ pages }) => (
  <div className="bg-prism flex-grow flex justify-center">
    <main className="text-lg max-w-readability-lg py-4">
      <h1 className="text-4xl text-heading p-4">Blog</h1>
      <ul className="mb-8 bg-background-b rounded shadow max-w-full flex flex-col">
        {pages.map((page) => (
          <PostSnippet key={page.__resourcePath} {...page} />
        ))}
      </ul>
    </main>
  </div>
);
