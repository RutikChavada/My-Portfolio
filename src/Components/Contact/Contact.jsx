import React from "react";
import "./Contact.css";
import contact2 from "../../assets/contact2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
                  AOS.init({ duration: 1000, once: false });
              }, []);
  return (
    <>
      <section className="contact" id="contact">
        <h2 className="heading">
          <i className="fas fa-headset"></i> Get in <span>Touch</span>
        </h2>

        <div className="container">
          <div className="content">
            <div data-aos="fade-right" className="image-box">
              <img
                draggable="false"
                src={contact2}
                alt="Contact"
              />
            </div>
            <form action="https://formspree.io/f/xwpvjknp" method="POST">
              <div data-aos="fade-left" className="form-group">
                <div className="field">
                  <input type="text" name="name" placeholder="Name" required />
                  <i className="fas fa-user"></i>
                </div>
                <div className="field">
                  <input type="text" name="email" placeholder="Email" required />
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="field">
                  <input type="text" name="phone" placeholder="Phone" />
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="message">
                  <textarea
                    placeholder="Message"
                    id="message"
                    name="message"
                    required
                  ></textarea>
                  <i className="fas fa-comment-dots"></i>
                </div>
              </div>
              <div className="button-area">
                <button type="submit">
                  Submit <i className="fa fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
