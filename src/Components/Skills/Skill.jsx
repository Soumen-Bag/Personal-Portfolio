import React from "react";
import "./Skill.css";
import { skills } from "./skillData";

const Skill = () => {
  return (
    <section id="skill" className="skillsSection">
      <h1 className="skillsHeading">Skills</h1>
      <div className="skillsContainer">
        {skills.map((data, index) => (
          <div className="skillCard" key={index}>
            <img
              src={data.imageSrc}
              alt={`${data.title} logo`}
              className="skillImage"
            />
            <h4 className="skillTitle">{data.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
