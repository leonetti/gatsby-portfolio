/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const dotenv = require('dotenv');

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId,
        accessToken,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -83,
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      loader: 'eslint-loader',
      options: {
        emitWarning: true,
        failOnWarning: false,
      },
    },
    'gatsby-plugin-sass',
  ],
};
