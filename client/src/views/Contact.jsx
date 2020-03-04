import React from 'react';

import './Contact.scss';

function Contact() {
  return (
    <div className="contact">
      <div className="contact__content">
        <h2 className="contact__title">Email</h2>
        <hr className="contact__divider" />
        <a href="mailto:laanayam333@gmail.com" className="contact__link">
          laanayam333@gmail.com
        </a>
      </div>

      <div className="contact__content">
        <h2 className="contact__title">Mobile</h2>
        <hr className="contact__divider" />
        <a href="tel:+34689584226" className="contact__link">
          +34 689 58 42 26
        </a>
      </div>

      <div className="contact__socials">
        <a
          href="https://github.com/laanayam333/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="lab la-github contact-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/laanayam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="lab la-linkedin contact__icon" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
