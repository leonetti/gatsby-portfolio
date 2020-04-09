import React from 'react';

import contactStyles from '../styles/contact.module.scss';

const Contact = () => (
  <div id="contact" className={contactStyles.wrapper}>
    <section className={contactStyles.container}>
      <h2 className={contactStyles.heading}>Contact</h2>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className={contactStyles.form}
      >
        {/* <input type="hidden" name="form-name" value="contact" /> */}
        <p className={contactStyles.hidden}>
          <label htmlFor="bot-field">
            Don’t fill this out if you&#39;re human:
            <input type="hidden" name="bot-field" />
          </label>
        </p>
        <div className={contactStyles.form__row}>
          <label className={contactStyles.form__label} htmlFor="name">
            Name
            <input className={contactStyles.text__input} id="name" name="name" placeholder="John Doe" type="text" />

          </label>
        </div>
        <div className={contactStyles.form__row}>
          <button
            className={contactStyles.submit}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      {/* <form
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        className={contactStyles.form}
      >
        <p className={contactStyles.hidden}>
          <label htmlFor="bot-field">
            Don’t fill this out if you are human:
            <input name="bot-field" />
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
          <button type="submit">Send</button>
        </p>
      </form> */}
    </section>
  </div>
);

export default Contact;
