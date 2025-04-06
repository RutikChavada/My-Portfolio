import React from "react";
import "./Exp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendarAlt,
  faBuilding,
  faCode,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const Exp = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="heading">
        <FontAwesomeIcon icon={faBriefcase} /> Work <span>Experience</span>
      </h2>

      <div className="experience-container">
        <div className="experience-card" data-aos="fade-right">
          <div className="experience-header">
            <div className="experience-title">
              <h3>Full Stack Developer </h3>
              <div className="experience-company">
                <FontAwesomeIcon icon={faBuilding} />
                Self Employed
              </div>
            </div>
            <div className="experience-date">
              <FontAwesomeIcon icon={faCalendarAlt} />
              Oct 2023 - Present
            </div>
          </div>
          <p className="experience-description">
            Working as a self-employed Full Stack Developer, focusing on implementing
            cutting-edge Web Development solutions and Backend techniques
            to solve complex Website Management problems.
          </p>
          <div className="experience-skills">
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              React
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              Express
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              Node
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              Mongodb
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              MySQL
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              Python
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              Machine Learning
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              Flask
            </span>
          </div>
        </div>

        <div className="experience-card" data-aos="fade-left">
          <div className="experience-header">
            <div className="experience-title">
              <h3>Web Developer</h3>
              <div className="experience-company">
                <FontAwesomeIcon icon={faBuilding} />
                CLUMOSS
              </div>
            </div>
            <div className="experience-date">
              <FontAwesomeIcon icon={faCalendarAlt} />
              May 2024 - June 2024
            </div>
          </div>
          <p className="experience-description">
            Completed an intensive web development internship, working on
            real-world projects and gaining hands-on experience with modern web
            technologies.
          </p>
          <div className="experience-skills">
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              React.js
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              Node.js
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              MongoDB
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              Express
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              JavaScript
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              Postman
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              Git/Github
            </span>
          </div>
        </div>

        <div className="experience-card" data-aos="fade-left">
          <div className="experience-header">
            <div className="experience-title">
              <h3>Web Developer</h3>
              <div className="experience-company">
                <FontAwesomeIcon icon={faBuilding} />
                Bharat Intern
              </div>
            </div>
            <div className="experience-date">
              <FontAwesomeIcon icon={faCalendarAlt} />
              March 2024 - April 2024
            </div>
          </div>
          <p className="experience-description">
            Completed web development internship, working on
            real-world projects and gaining hands-on experience with Bigginer Friendly web
            technologies and Clear all basic concepts of designing and development.
          </p>
          <div className="experience-skills">
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              HTML
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              CSS
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              JavaScript
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              Express
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              React
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              UI/UX
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              Figma
            </span>
          </div>
        </div>
      </div>

      <div className="back-btn" data-aos="fade-up">
        <a href="/#home">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back to Home</span>
        </a>
      </div>
    </section>
  );
};

export default Exp;