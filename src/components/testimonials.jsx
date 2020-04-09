import React from 'react';
import PropTypes from 'prop-types';
// import shortId from 'shortid';
// import Img from 'gatsby-image';

import testimonialsStyles from '../styles/testimonials.module.scss';

const Testimonials = ({ data }) => (
  <div id="testimonials" className={testimonialsStyles.wrapper}>
    <section className={testimonialsStyles.container}>
      <h2 className={testimonialsStyles.heading}>Testimonials</h2>
      {data.nodes.map((testimonial) => (
        <div>
          <h2>{testimonial.name}</h2>
        </div>
      ))}
    </section>
  </div>
);

Testimonials.propTypes = {
  data: PropTypes.shape({
    nodes: PropTypes.array,
  }).isRequired,
};

export default Testimonials;
