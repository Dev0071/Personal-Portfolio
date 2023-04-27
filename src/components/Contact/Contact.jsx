import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { TfiTwitter } from 'react-icons/tfi';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_p1ywu7t',
        'template_309ic3b',
        form.current,
        'HHU2pkpJSVz264eyR'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message sent successfully');
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="Contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>gacheru.kabiru@gmail.com</h5>
            <a
              href="mailto:gacheru.kabiru@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <TfiTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>@kabiruGacheru</h5>
            <a
              href="https://twitter.com/KabiruGacheru?t=qLnWpopPqMs8U0u68mBFjg&s=09"
              rel="noreferrer"
              target="_blank"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+254706299272</h5>
            <a
              href="https://wa.me/254706299272"
              rel="noreferrer"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
};

export default Contact;
