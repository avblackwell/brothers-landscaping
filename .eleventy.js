module.exports = config => {
  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);
  config.addPassthroughCopy('src/images');

  // Returns work items, sorted by display order
  config.addCollection('service', collection => {
    return collection.getFilteredByGlob('./src/service/*.md');
  });
  
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
