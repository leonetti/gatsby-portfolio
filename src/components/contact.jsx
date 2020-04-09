import React from 'react';
import { motion } from 'framer-motion';

import contactStyles from '../styles/contact.module.scss';

const Contact = () => (
  <div id="contact" className={contactStyles.wrapper}>
    <section className={contactStyles.container}>
      <h2 className={contactStyles.heading}>Contact</h2>
      <form
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        className={contactStyles.form}
      >
        <p className={contactStyles.hidden}>
          <label htmlFor="bot-field">
            Don’t fill this out if you are human:
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
          </label>
        </p>
        <p>
          <label htmlFor="name">
            Your Name:
            <input type="text" name="name" required />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Your Email:
            <input type="text" name="email" required />
          </label>
        </p>
        <p>
          <label htmlFor="message">
            Message:
            <textarea type="text" name="message" required />
          </label>
        </p>
        <p>
          <motion.button
            className={contactStyles.submit}
            type="submit"
            whileTap={{ scale: 0.95 }}
          >
            <motion.span>Send</motion.span>
          </motion.button>
        </p>
      </form>
    </section>
  </div>
);

export default Contact;
