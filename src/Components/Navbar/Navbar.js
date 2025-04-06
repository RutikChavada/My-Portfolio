import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import Typed from "typed.js"
import mine from "../../assets/mine.png";
import ParticlesComponent from "../Particles/Particles";
// import mine1 from "../../assets/mine1.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-in-out'
    });
  }, []);

  const [showScrollButton, setShowScrollButton] = useState(false);

// Show button when user scrolls down
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
      const sections = document.querySelectorAll("section");
      let scrollPos = window.scrollY + 200;

      sections.forEach((section) => {
        const id = section.getAttribute("id");
        const offset = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPos >= offset && scrollPos < offset + height) {
          setActiveSection(`#${id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const typed = new Typed(".typing-text", {
      strings: [
        "frontend development",
        "backend development",
        "web designing",
        "web development"
      ],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
      showCursor: false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // Background Animation Logic
  useEffect(() => {
    const bgAnimation = document.getElementById("bgAnimation");
    if (bgAnimation) {
      const numberOfColorBoxes = 400;
      for (let i = 0; i < numberOfColorBoxes; i++) {
        const colorBox = document.createElement("div");
        colorBox.classList.add("colorBox");
        bgAnimation.append(colorBox);
      }
    }
  }, []);

  return (
    <>
      {/* Background Animation */}
      {/* <div className="bgAnimation" id="bgAnimation">
        <div className="backgroundAmim"></div>
      </div> */}
      {/* Navbar */}
      <header className={`header ${isScrolled ? "scrolled" : ""}`} data-aos="fade-down">
        <a href="/" className="logo" data-aos="fade-right">
          Rutvik
        </a>
        <FontAwesomeIcon
          id="menu"
          icon={menuOpen ? faTimes : faBars}
          className="menu-icon"
          onClick={toggleMenu}
          data-aos="fade-left"
        />
        <nav className={`navbar ${menuOpen ? "nav-toggle" : ""}`}>
          <ul>
            <li data-aos="fade-left" data-aos-delay="100">
              <a className={activeSection === `#home` ? "active" : ""} href="#home">
                Home
              </a>
            </li>
            <li data-aos="fade-left" data-aos-delay="200">
              <a className={activeSection === "#about" ? "active" : ""} href="#about">About</a>
            </li>
            <li data-aos="fade-left" data-aos-delay="300">
              <a className={activeSection === "#skills" ? "active" : ""} href="#skills">Skills</a>
            </li>
            <li data-aos="fade-left" data-aos-delay="400">
              <a className={activeSection === "#education" ? "active" : ""} href="#education">Education</a>
            </li>
            <li data-aos="fade-left" data-aos-delay="500">
              <a className={activeSection === "#project" ? "active" : ""} href="#project">Work</a>
            </li>
            <li data-aos="fade-left" data-aos-delay="600">
              <a className={activeSection === "#experience" ? "active" : ""} href="#experience">Experience</a>
            </li>
            <li data-aos="fade-left" data-aos-delay="700">
              <a className={activeSection === "#contact" ? "active" : ""} href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="home" id="home">
        <div className="particles-wrapper">
          <ParticlesComponent id="particles" />
        </div>
        <div className="content" data-aos="fade-right">
          <h2>
            Hello,
            <br /> I'm Rutvik <span>Chavada</span>
          </h2>
          <p>
            i am into <span className="typing-text"></span>
          </p>
          <a href="#about" className="btn" data-aos="zoom-in" data-aos-delay="300">
            <span>About Me</span>
            <FontAwesomeIcon id="button" icon={faArrowDown} />
          </a>
          <div className="socials" data-aos="fade-up" data-aos-delay="500">
            <ul className="social-icons">
              <li>
                <a
                  className="linkedin"
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/rutik-chavada-895561251/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a
                  className="github"
                  aria-label="GitHub"
                  href="https://github.com/RutikChavada"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  className="telegram"
                  aria-label="Telegram"
                  href="https://t.me/Rutvik_Chavada"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faTelegram} />
                </a>
              </li>
              <li>
                <a
                  className="instagram"
                  aria-label="Instagram"
                  href="https://www.instagram.com/_rutvik_02_/"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="image" data-aos="fade-left">
          <img draggable="false" src={mine} alt="" />
        </div>
      </section>
    </>
  );
}

export default Navbar;
