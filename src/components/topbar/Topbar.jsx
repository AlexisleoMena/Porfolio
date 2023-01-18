import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { Link } from "react-scroll";

import './topbar.css';

const Topbar = () => {
  return (
    <nav>
      <Link to="home" spy={true} smooth={true} offset={-100} ><AiOutlineHome /></Link>
      <Link to="about" spy={true} smooth={true} offset={-50}  ><AiOutlineUser /></Link>
      <Link to="experience" spy={true} smooth={true} offset={-50}  ><BiBook /></Link>
      <Link to="portfolio" spy={true} smooth={true} offset={-50} ><RiServiceLine /></Link>
      <Link to="contact" spy={true} smooth={true} offset={-50}  ><BiMessageSquareDetail /></Link>
    </nav>
  )
}

export default Topbar;