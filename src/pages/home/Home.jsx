import React from "react";
import Profile from "../../assets/home.jpg";
import { FaLinkedin, FaGithub, FaEnvelopeOpen } from "react-icons/fa";
import CV from "../../assets/Alexander-Cv.pdf";
import { FaDownload } from "react-icons/fa";
import "./home.css";
const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__container">
        <div className="home__data">
          <h1 className="home__title">
            <span>I’m Alexander Salomon.</span> Front-End Developer
          </h1>

          <p className="home__description">
            I am a web developer and frontend programmer passionate about
            creating interactive and engaging experiences on the web, I
            specialize in developing responsive and optimized web applications.
            I am committed to excellence and I am always looking for new
            challenges to continue growing as a professional.
          </p>

          <a href={CV} download="" className="button">
            Download Cv{" "}
            <span className="button__icon">
              {" "}
              <FaDownload />{" "}
            </span>
          </a>

          <div className="contact__social">
            <a
              href="https://github.com/SaloAlex"
              className="contact__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/alexander-salomon-98a814183/"
              className="contact__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:dvdsalomon6@gmail.com" className="contact__social-link">
              <FaEnvelopeOpen />
            </a>
          </div>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;
