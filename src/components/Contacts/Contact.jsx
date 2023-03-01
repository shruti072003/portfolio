import React from 'react'
import "./Contacts.css";
import { HiOutlineMail } from 'react-icons/hi'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  // Configuration for email-js
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6a3jeuy', 'template_y8edpm8', form.current, 'TfU7XVvACcSyZVo1J')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <HiOutlineMail className='contact__icons' />
            <h4>Email</h4>
            <h5>shruti072003@gmail.com</h5>
            <a href='mailto:shruti072003@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__icons' />
            <h4>LinkedIn</h4>
            <h5>Shruti Tewaney</h5>
            <a href='https://www.linkedin.com/in/shruti-tewaney-3b5010230/' target='_blank'>Connect</a>
          </article>
          <article className='contact__option'>
            <BsGithub className='contact__icons' />
            <h4>Github</h4>
            <h5>shruti072003</h5>
            <a href='https://github.com/shruti072003' target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} on onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name='message' rows='7' placeholder='Enter Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact