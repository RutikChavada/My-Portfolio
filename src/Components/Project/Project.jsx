import React from "react";
import "./Project.css";
import ppsu from "../../assets/ppsu.jpg";
import mbv from "../../assets/mbv.jpg";
import hotel from "../../assets/hotel.png";
import geminy from "../../assets/geminy.png";
import ml from "../../assets/pridection.png";
import news from "../../assets/news.png";
import url from "../../assets/url.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import realestet from "../../assets/real_estet.png"
import { faCheckToSlot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";


const projects = [
  {
    image: hotel,
    description: "Hotel Management System - A full-stack MERN project for hotel Website.",
    link: "https://github.com/RutikChavada/Hotel-Website",
    title: "Hotel Management Website"
  },
  {
    image: realestet,
    description: "Real Estate Website by using the React,SCSS,Node,Prisma,Mongodb.",
    link: "https://github.com/RutikChavada/Real-estate-Website",
    title: "Real Estate Web Application"
  },
  
  
  {
    image: ml,
    description: "Machine learning Web Application For the Pridection Of Remaining Usefull Life of jet Engine",
    link: "https://github.com/RutikChavada/Remaining-Life-Pridection-Of-Jet-Engine",
    title: "Remaining Useful Life Pridection"
  },
  {
    image: geminy,
    description: "AI Chat Bot by using the OpenAI API.",
    link: "https://github.com/RutikChavada/AI-Chat-Bot",
    title: "AI Chat Bot"
  },
  {
    image: url,
    description: "URL Shortner - A full stack web application with Authentication Sysytem.",
    link: "https://github.com/RutikChavada/URL-Shortner",
    title: "URL Shortner"
  },
  {
    image: news,
    description: "News Website - Represent the live Headlines by using the News API.",
    link: "https://github.com/RutikChavada/News-Website",
    title: "News Website"
  },
];

function Project() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <section className="App" id="project">
      <h1><FontAwesomeIcon id="work" icon={faCheckToSlot} />My <span>Work</span></h1>
      <div className="grid-container">
        {projects.map((project, index) => (
          <div data-aos="zoom-in" className="grid-item" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
              <h3 className="project-title">{project.title}
                <FontAwesomeIcon id="rightarrow" icon={faArrowRight} />
              </h3>
              <div className="overlay">
                <p data-aos="fade-down">{project.description}</p> {/* Description only on hover */}
                <button className="bton">View<FontAwesomeIcon id="eye" icon={faEye} /></button>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
