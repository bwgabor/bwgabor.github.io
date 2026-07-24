const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

module.exports = function (eleventyConfig) {
  const md = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItAttrs);

  eleventyConfig.setLibrary('md', md);

  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });
  eleventyConfig.addPassthroughCopy({ 'src/sitemap.xml': '/sitemap.xml' });

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data',
    },
  };
};
