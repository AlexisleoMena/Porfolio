import React from 'react';
import * as Icons from "../../helpers/getIcons.js";
import './experience.css';

const Skill = ({name}) => (
  <div className="experience__details">
    <img src={Icons[name]} alt=""/>
    <h4>{name === "Cpp" ? "C++" : name}</h4>
  </div>
)

const Experience = () => {
  return (
    <section id="experience">
      <h2>Habilidades técnicas</h2>
      <div className="experience__content">
        <Skill name="HTML" />
        <Skill name="CSS" />
        <Skill name="JavaScript" />
        <Skill name="TypeScript" />
        <Skill name="Go" />
        <Skill name="Cpp" />
        <Skill name="React" />
        <Skill name="Redux" />
        <Skill name="PostgreSQL" />
        <Skill name="MongoDB" />
        <Skill name="NodeJS" />
        <Skill name="ExpressJS" />
        <Skill name="Sequelize" />
        <Skill name="Git" />
        <Skill name="Bootstrap" />
        <Skill name="Tailwindcss" />
        <Skill name="Sass" />
      </div>
    </section>
  )
}

export default Experience