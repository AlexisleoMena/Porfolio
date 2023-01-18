import React from 'react';
import ME from '../../assets/Me.png';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h2>Sobre mí</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <p>
          Soy desarrollador Web Full Stack autodidacta, colaborativo y con mucha dedicación. 
Tengo un amplio conocimiento en el desarrollo de aplicaciones web utilizando el Stack PERN (PostgreSQL, Express.js, React.js, Node.js). Además, tengo experiencia realizando proyectos complejos en colaboración con distintos desarrolladores utilizando metodología SCRUM. 
Me apasiona aprender tecnologías nuevas y trasmitir ese conocimiento adquirido a mi entorno, así como también, escuchar y aprender de lo que mi entorno tiene para ofrecerme.
          </p>
          <a href="#contact" className="btn btn-primary">Contactame</a>
        </div>
      </div>
    </section>
  )
}

export default Intro