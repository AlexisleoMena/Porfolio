import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hola, soy</h5>
        <h1>Alexis Mena</h1>
        <h5 className="text-light">Full-Stack Developer</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Desplazarse al final
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
