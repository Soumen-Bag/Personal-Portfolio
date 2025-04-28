// Home.js
import React from "react";
import "./Home.css";
import myImage from "../Images/logo3.png";
import SocialMedia from "../SocialMediaSection/SocialMedia";

const Home = () => {
  return (
    <section id="home" className="home-section">
      {/* Text Content */}
      <div>
        <div className="intro-text">
          <p className="greeting">Hello,</p>
          <div className="intro-heading">
            <h1>
              I'm <span className="highlight">Soumen</span>
            </h1>
            <h2>React Js Developer</h2>
          </div>
          <p className="details">
            I'm a passionate React.js developer skilled in creating visually
            appealing, user-friendly websites. I strive to make interactive and
            responsive digital experiences.
          </p>
          <a
            href="/resume.pdf"
            // download="Soumen-Resume.pdf"
            target="_blank"
            className="cta-button"
          >
            View My Resume
          </a>
          <SocialMedia />
        </div>
      </div>

      {/* Image Content */}
        <img src={myImage} alt="Soumen" className="profile-image" />
    </section>
  );
};

export default Home;
