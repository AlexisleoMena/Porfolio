import React from 'react';
import * as Icons from "../../helpers/getIcons.js";
import './experience.css';

const Skill = ({name}) => (
  <div className="experience__details">
    <img src={Icons[name]} alt=""/>
    <h4>{name}</h4>
  </div>
)

const Experience = () => {
  return (
    <section id="experience">
      <h2>Habilidades técnicas</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desarrollo Front-end</h3>
          <div className="experience__content">
            <Skill name="HTML" />
            <Skill name="CSS" />
            <Skill name="JavaScript" />
            <Skill name="React" />
            <Skill name="Redux" />
          </div>
        </div>
        <div className="experience__backend">
          <h3>Desarrollo Back-end</h3>
          <div className="experience__content">
            <Skill name="NodeJS" />
            <Skill name="ExpressJS" />
            <Skill name="PostgreSQL" />
            <Skill name="Sequelize" />
            <Skill name="Git" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience