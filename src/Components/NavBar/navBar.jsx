import React from "react";
import "./navBar.css";
const NavBar = () => {
  return (
    <nav className="main">
      <div className="leftItem">Portfolio</div>
      <div className="rightItem">
        <a href="#home">Home</a>
        <a href="#aboutMe">About me</a>
        <a href="#skill">Skill</a>
        <a href="#project">Project</a>
        <a href="#contactMe">Contact Me</a>
      </div>
    </nav>
  );
};

export default NavBar;
