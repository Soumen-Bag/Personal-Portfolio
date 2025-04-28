import React from 'react';
import './ProjectSection.css';
import weatherImage from '../Images/weather.jpg'
const projects = [
  {
    name: 'Weather App',
    description: 'A weather forecasting app using OpenWeather API.',
    image: weatherImage,
    sourceCode: 'https://github.com/Soumen-Bag/Weather-App-Now.git',
    demo: 'https://weather-app-demo.com',
  },
];

const ProjectSection = () => {
  return (
    <section id="project" className="projectSection">
      <h1 className="sectionTitle">Projects</h1>
      <div className="projectsContainer">
        {projects.map((project, index) => (
          <div key={index} className="projectCard">
            <img src={project.image} alt={project.name} className="projectImage" />
            <div className="projectContent">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="buttonContainer">
                <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="projectButton">
                  View Source Code
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="projectButton">
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
