import './App.css';
import logo from './images/load.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Pdf from './documents/Document.pdf';
import { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { IoClose } from 'react-icons/io5';
import Footer from './Footer'
import landingPageDroneGif from './images/landingPageDroneGif.gif'

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
          <nav className='nav_class'>
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
      <img className="landingPageDroneGif" src={landingPageDroneGif} alt="loading..." />
      {emailPopupVisible && <Contact onClose={handleCloseContactPopup} />}
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
