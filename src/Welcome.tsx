import './Welcome.css';
import landingPageDroneGif from './images/landingPageDroneGif.gif';
import { useEffect, useRef } from 'react';

export default function Welcome() {
  const gifRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (gifRef.current) {
      // Force the GIF to reload by appending a timestamp to the src
      gifRef.current.src = `${landingPageDroneGif}?${new Date().getTime()}`;
    }
  }, []);

  return (
    <div className="image-container">
      <img
        ref={gifRef}
        className="landingPageDroneGif"
        src={landingPageDroneGif}
        alt="loading..."
      />
    <div className="text-container">
      <ul class="dash">
        <li className="overlay-intro">SOUTHERN CALIFORNIA CAPTURED DATA</li>
      </ul>
      <br />
      <h3 className="overlay-heading">
        EMBRACE THE <br /> LIMITLESS <br /> POTENTIAL OF <br /> DATA TECHNOLOGY
      </h3>
      <br />
      <p className="overlay-outro"> With southern California reach, proprietary software and game-changing aerial imaging, Aero Altitude connects data-seekers to professional data-capturers. We stand for unbound progress – unlocking the full potential of drone technology and aerial data.</p>
      <br />
      <br />
      <a className="cta" href="#contact">
        <button className="contact-button">GET A QUOTE</button>
      </a>
    </div>

  </div>
  );
}
