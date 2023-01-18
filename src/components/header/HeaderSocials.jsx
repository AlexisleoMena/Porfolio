import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/alexis-leonardo-mena" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://www.github.com/AlexisleoMena" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials