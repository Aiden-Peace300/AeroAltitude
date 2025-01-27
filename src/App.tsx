import './App.css';
import logo from './images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Pdf from './documents/Document.pdf';
import { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { IoClose } from 'react-icons/io5';
import Footer from './Footer'
import Welcome from './Welcome.tsx'
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
                <a href="#">DRONE SERVICES</a>
              </li>
              <li>
                <a href="#">INDUSTRIES</a>
              </li>
              <a className="cta" href="#contact" onClick={toggleEmailPopup}>
                <button className="contact-button">GET A QUOTE</button>
              </a>
            </ul>
          </nav>
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
      <div>
        <Welcome />
      </div>
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
