import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <form className='Contact'>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" />
        </label>
        <button className='Submit' type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;