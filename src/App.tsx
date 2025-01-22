import './App.css';
import logo from './images/aidensLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Pdf from './documents/Document.pdf';
import { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { IoClose } from 'react-icons/io5';
import Footer from './Footer'
export default function App() {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const [emailPopupVisible, setEmailPopupVisible] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible);
  };

  const toggleEmailPopup = () => {
    setEmailPopupVisible(!emailPopupVisible);
  };

  const handleCloseContactPopup = () => {
    setEmailPopupVisible(false);
  };

  return (
    <div>
      <header>
        <img className="logo" src={logo} alt="logo" />
        <div className="nav__links">
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#qualifications">Qualifications</a>
              </li>
            </ul>
          </nav>
          <a className="cta" href="#contact" onClick={toggleEmailPopup}>
            <button className="contact-button">Contact</button>
          </a>
        </div>
        <div className="bars-icon" onClick={toggleMobileNav}>
          {mobileNavVisible ? <IoClose /> : <FontAwesomeIcon icon={faBars} />}
        </div>
      </header>
      {mobileNavVisible && (
        <div className="list-container">
          <IconClicked />
        </div>
      )}
      {emailPopupVisible && <Contact onClose={handleCloseContactPopup} />}
      <section id="home" className="meet">
        <div className="container">
          <div className="content">
            <div className="meet-main">
              <div className="photoOfAiden_container">
                <a
                href="https://github.com/Aiden-Peace300"
                target="_blank"
                rel="noopener noreferrer">
                <div className="photoOfAiden"></div>
                </a>
              </div>
              <div className="meet-text">
                <h2 className="position">START HERE!</h2>
                <p>
                  Hi, I'm Aiden Peace. A passionate Full-Stack React Developer
                  based in Lake Forest, California. 📍
                </p>
                <div className="contact-row">
                  <a
                    href="https://www.linkedin.com/in/aiden-peace-025918211/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="fab fa-linkedin"
                    />
                  </a>
                  <a
                    href="https://github.com/Aiden-Peace300"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="fab fa-github"
                    />
                  </a>
                  <a
                    className="resume"
                    href={Pdf}
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className="resume-button">View Resume</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="services" className="services">
        <div className="container">
          <div className="skill-content">
            <div className="skills">
              <Skills />
            </div>
          </div>
        </div>
      </section> */}
      {/* <section id="projects" className="projects">
        <div className="container">
          <div className="project-content">
            <div className="projects">
              <Projects />
            </div>
          </div>
        </div>
      </section> */}
      {/* <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about">
              <About />
            </div>
          </div>
        </div>
      </section> */}
      {/* <section id="qualifications" className="qualifications">
        <div className="container">
          <div className="qualifications-content">
            <div className="qualifications">
              <Qualifications />
            </div>
          </div>
        </div>
      </section> */}
      <section id="footer" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer">
              <Footer />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
