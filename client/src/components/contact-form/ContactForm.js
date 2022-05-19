import React, { useRef } from 'react';
import emailjs from 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3xdnmyq', 'template_n5t6q1y', form.current, '-jJWADHxvYDm_MRPM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
        <h1 id="contact-me">Slide in my DM's</h1>
      
        <form ref={form} onSubmit={sendEmail}>
        
        <div><input type="text" placeholder="Name" name="user_name" /></div>
        <div><input type="email" placeholder="Email" name="user_email" /></div>
        <div><textarea placeholder="Message" name="message" /></div>
        <input type="submit" value="Send it!" id="send-it" />
        </form>
    </div>
  );
};

export default ContactForm;