import React from "react";
import "./SocialMedia.css";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const data = [
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/soumen.bag.9235",
  },
  {
    icon: <FiInstagram />,
    link: "https://www.instagram.com/soumen_bag56/",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/soumen-bag-5588a0229/",
  },
  {
    icon: <FaGithub/>,
    link: "https://github.com/Soumen-Bag"
  },{
    icon: <FaTwitter/>,
    link: "https://x.com/SoumenB00223591"
  }
];
const SocialMedia = () => {
  return (
    <div className="social-media">
      {
        data.map((item,index)=>{
          return(
            <a key={index} href={item.link}>{item.icon}</a>
          )
        })
      }
    </div>
  );
};

export default SocialMedia;
