import React from "react";
import {
  FaEnvelopeOpen,
  FaLinkedin,
  FaDownload,
  FaPhoneSquareAlt,
  FaGithub,
} from "react-icons/fa";
import CV from "../../assets/Alexander-Cv.pdf";
import "./footer.css";

const Footer = () => {
  return (
    <section className="contact section">

      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don’t be Shy !</h3>

          <p className="contact__description">
            Feel free to get in touch whit me. I am always open to discussin new
            projects, creative ideas or opportunities to be part of your vision
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail Me</span>
                <h4 className="info__description">dvdsalomon6@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__description">011-15-6551-2567</h4>
              </div>
            </div>
          </div>

          <a href={CV} download="" className="button">
            Download Cv{" "}
            <span className="button__icon">
              {" "}
              <FaDownload />{" "}
            </span>
          </a>
          <div className="contact__social">
            <a
              href="https://www.linkedin.com/in/alexander-salomon-98a814183/"
              className="contact__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="https://github.com/SaloAlex" className="contact__social-link" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>

            <a href="mailto:dvdsalomon6@gmail.com" className="contact__social-link">
              <FaEnvelopeOpen />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
