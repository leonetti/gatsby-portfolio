import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    contentfulSiteInformation {
      siteName
      siteDescription
    }
  }
`;

const commonKeywords = ['Alex Leonetti', 'Frontend Developer', 'Developer', 'Portfolio', 'Personal Site', 'Web Developer', 'Software Engineer', 'Website', 'React', 'Gatsby', 'Contentful', 'HTML', 'CSS', 'Javascript'];

const SEO = ({
  title, lang, meta, keywords,
}) => (
  <StaticQuery
    query={detailsQuery}
    render={(data) => (
      <Helmet
        title={title}
        titleTemplate={`%s | ${data.contentfulSiteInformation.siteName}`}
        htmlAttributes={{
          lang,
        }}
        meta={[
          {
            name: 'description',
            content: data.contentfulSiteInformation.siteDescription,
          },
          {
            property: 'og:title',
            content: title,
          },
          {
            property: 'og:description',
            content: data.contentfulSiteInformation.siteDescription,
          },
          {
            property: 'og:type',
            content: 'website',
          },
        ]
          .concat(
            {
              name: 'keywords',
              content: keywords.length > 0 ? keywords.concat(commonKeywords).join(', ') : commonKeywords.join(', '),
            },
          )
          .concat(meta)}
      />
    )}
  />
);

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.string),
  keywords: PropTypes.arrayOf(PropTypes.string),
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
};

export default SEO;
