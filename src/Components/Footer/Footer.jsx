import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


function Footer() {
    return (
        <>
            <section className="footer">

                <div className="box-container">

                    <div className="box">
                        <h3>Rutvik's Portfolio</h3>
                        <p>Thank you for taking the time to visit my portfolio website. I hope you enjoy exploring my work as much as I enjoyed creating it. Together, let's make meaningful connections and inspire positive change!<br /> <br /> Keep Rising and stay connected !</p>
                    </div>

                    <div className="box">
                        <h3>quick links</h3>
                        <a href="#home"><i class="fas fa-chevron-circle-right"></i> home</a>
                        <a href="#about"><i class="fas fa-chevron-circle-right"></i> about</a>
                        <a href="#skills"><i class="fas fa-chevron-circle-right"></i> skills</a>
                        <a href="#education"><i class="fas fa-chevron-circle-right"></i> education</a>
                        <a href="#work"><i class="fas fa-chevron-circle-right"></i> work</a>
                        <a href="#experience"><i class="fas fa-chevron-circle-right"></i> experience</a>
                    </div>

                    <div className="box">
                        <h3>contact info</h3>
                        <p> <i class="fas fa-phone"></i>+91 8866076516</p>
                        <p> <i class="fas fa-envelope"></i>rutvikchavda0225@gmail.com</p>
                        <p> <i class="fas fa-map-marked-alt"></i>Surat, India-394107</p>
                        <div className="share">

                            <a href="https://www.linkedin.com/in/rutik-chavada-895561251/" class="fab fa-linkedin" aria-label="LinkedIn" target="_blank"></a>
                            <a href="https://github.com/RutikChavada" class="fab fa-github" aria-label="GitHub" target="_blank"></a>
                            <a href="mailto:rutvikchavda0225@gmail.com" class="fas fa-envelope" aria-label="Mail" target="_blank"></a>
                            <a href="https://t.me/Rutvik_Chavada" class="fab fa-telegram-plane" aria-label="Telegram" target="_blank"></a>
                        </div>
                    </div>
                </div>

                <h1 className="credit">All content © Rutvik Chavada 2025. All rights reserved.</h1>

            </section>
        </>
    )
}

export default Footer;