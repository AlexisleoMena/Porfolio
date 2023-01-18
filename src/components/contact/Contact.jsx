import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from  "react-icons/bs";
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState(false);

  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_8cljkaj',
        'template_g07xhyu',
        formRef.current,
        '8r-28Hj1n2R-ERwmV'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5> Responderé lo antes posible :) </h5>
      <h2>Contactar</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>alexismena2690@gmail.com</h5>
            <a href="mailto:alexismena2690@gmail.com" target="_blank" without rel="noreferrer" >Enviar mensaje</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+5493424061761</h5>
            <a href="https://api.whatsapp.com/send?phone=5493424061761" target="_blank" without rel="noreferrer" >Enviar mensaje</a>
          </article>
        </div>

        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Tu nombre"
            name="name"
            required
          />
          <input
            type="text"
            placeholder="Tu email"
            name="email"
            required
          />
          <textarea
            placeholder="Mensaje"
            rows="7"
            name="message"
            required
          ></textarea>
          <input type="submit" value="Enviar" className="btn btn-primary"/>
        
          {message && <span>Gracias, responderé lo antes posible :)</span>}
        </form>

      </div>
    </section>
  );
};

export default Contact;
