module.exports = {
  plugins: [
    require('postcss-import-ext-glob')({ sort: 'asc' }),
    require('postcss-import')({ path: 'src/assets/css' }),
    require('postcss-preset-env')({ stage: 2 }),
    require('postcss-custom-media'),
    require('postcss-media-minmax'),
    require('postcss-mixins'),
    require('postcss-nesting'),
    require('postcss-simple-vars'),
    require('autoprefixer'),
    require('postcss-discard-empty'),
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/*.html', './src/**/*.html', './src/**/**/*.html']
    }),
    require('@csstools/postcss-progressive-custom-properties'),
    require('cssnano')({ preset: 'default' })
  ],
};
