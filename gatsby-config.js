/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const dotenv = require('dotenv');

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config();
}

const { spaceId, accessToken, trackingId } = process.env;

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId,
        accessToken,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -83,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Alex Leonetti Personal Site',
        short_name: 'Alex Leonetti',
        start_url: '/',
        display: 'standalone',
        icon: 'src/images/favicon.png',
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
