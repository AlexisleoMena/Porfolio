import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Alexisleo Mena</a>
      <ul className="permalinks">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#experience">Habilidades técnicas</a></li>
        <li><a href="#portfolio">Proyectos recientes</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/alexis-leonardo-mena/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/AlexisleoMena" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Alexisleo 2022. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer