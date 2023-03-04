export const formatMdxPath = (path) =>
  path.replace(/(src\/)?((mdx|pages)\/)|(\/index)?\.mdx$/gi, '');
