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
import Welcome from './Welcome.tsx';
import Prices from './Prices.tsx';
import OverviewOfServices from './OverviewOfServices.tsx';

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
        <a href="#home" className="logo" > 
          <img src={logo} alt="logo" style={{ height: 'auto', width: '50%', marginTop: '.5rem'}} />
        </a>
        <div className="nav__links">
          <nav className='nav_class'>
            <ul>
              <li>
                <a href="#droneservices">DRONE SERVICES</a> 
              </li>
              <li>
                <a href="#industry">INDUSTRY INSIGHTS</a>
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
      <section id="home">
        <Welcome />
      </section>
      <section id="industry" style={{ paddingTop: '140px' }}>
        <OverviewOfServices />
      </section>
      <section id="droneservices" style={{ paddingTop: '160px' }}>
        <Prices />
      </section>
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