module.exports = function (eleventyConfig) {
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

