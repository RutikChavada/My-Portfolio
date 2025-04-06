import React from "react";
import AOS from "aos";
import "./About.css";
import { useEffect } from "react";
import "aos/dist/aos.css";
import about from "../../assets/about.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function About() {
    const handleResumeClick = () => {
        const resumeUrl = "/resume.pdf"; // Resume file in 'public/' folder
        window.open(resumeUrl, "_blank"); // Open resume in a new tab
        setTimeout(() => {
          const link = document.createElement("a");
          link.href = resumeUrl;
          link.download = "Rutvik_Chavada_Resume.pdf"; // Custom filename
          link.click();
        }, 1000); // Delay download by 1 second (optional)
      };
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);
    return (
        <>
            <section class="about" id="about">
                <h2 class="heading"><i class="fas fa-user-alt"></i> About <span>Me</span></h2>

                <div class="row">

                    <div class="image">
                        <img draggable="false" class="tilt" src={about} alt="" />
                    </div>
                    <div class="content">
                        <h3 data-aos="fade-down">I'm Rutvik Chavada</h3>
                        <span data-aos="fade-down" class="tag">Full Stack Developer</span>

                        <p data-aos="fade-down">I am a Full-Stack developer based in Surat, India.
                            I am an Computer Engineering undergraduate from <a href="https://www.ppsu.ac.in/">P P Savani University.</a>
                            I am very passionate about improving my coding skills & developing applications & websites.
                            I build WebApps and Websites using MERN Stack.
                            Working for myself to improve my skills.
                            Love to build Full-Stack clones. </p>

                        <div data-aos="fade-down" class="box-container">
                            <div class="box">
                                <p><span> Age: </span> 20</p>
                                <p><span> Phone : </span> +91 8866076516</p>
                            </div>
                            <div class="box">
                                <p><span> Email : </span> rutvikchavda0225@gmail.com</p>
                                <p><span> Place : </span> Surat, India - 394107</p>
                            </div>
                        </div>

                        <div className="resumebtn">
  <button className="btn" onClick={handleResumeClick}>
    <span>Resume</span>
    <FontAwesomeIcon id="rightarrow1" icon={faArrowRight} />
  </button>
</div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About    