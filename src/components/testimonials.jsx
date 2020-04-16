import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import shortId from 'shortid';
import Img from 'gatsby-image';

import testimonialsStyles from '../styles/testimonials.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderSettings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  pauseOnHover: true,
  infinite: true,
  arrows: false,
};

const Testimonials = ({ data }) => (
  <div id="testimonials" className={testimonialsStyles.wrapper}>
    <section className={testimonialsStyles.container}>
      <h2 className={testimonialsStyles.heading}>Testimonials</h2>
      <p className={testimonialsStyles.subHeading}>Nice things my colleagues have said</p>
      <Slider
        dots={sliderSettings.dots}
        arrows={sliderSettings.arrows}
        infinite={sliderSettings.infinite}
        speed={sliderSettings.speed}
        slidesToShow={sliderSettings.slidesToShow}
        slidesToScroll={sliderSettings.slidesToScroll}
        pauseOnHover={sliderSettings.pauseOnHover}
        autoplaySpeed={sliderSettings.autoplaySpeed}
        autoplay={sliderSettings.autoplay}
      >
        {data.nodes.map((testimonial) => (
          <div key={shortId.generate()}>
            <div>
              <Img
                fluid={testimonial.avatarImage.fluid}
                className={testimonialsStyles.avatar}
              />
              <div
                className={testimonialsStyles.content}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: testimonial.description.childMarkdownRemark.html,
                }}
              />
              <h3 className={testimonialsStyles.name}>{testimonial.name}</h3>
              <span className={testimonialsStyles.relationship}>{testimonial.subTitle}</span>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  </div>
);

Testimonials.propTypes = {
  data: PropTypes.shape({
    nodes: PropTypes.array,
  }).isRequired,
};

export default Testimonials;
