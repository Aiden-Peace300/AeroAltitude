import './Welcome.css';
import landingPageDroneVideo from './images/landingPageDroneVideo.mp4'

export default function Welcome() {
  return (
    <div className="gif-wrapper"> {/* New wrapper div */}
      <div className="image-container">
        <video
          className="landingPageDroneGif"
          autoPlay
          loop
          muted
          playsInline
          src={landingPageDroneVideo}
        />
        <div className="text-container">
          <ul className="dash">
            <li className="overlay-intro">SOUTHERN CALIFORNIA CAPTURED DATA</li>
          </ul>
          <br />
          <h3 className="overlay-heading">
            EMBRACE THE <br /> LIMITLESS <br /> POTENTIAL OF <br /> DATA TECHNOLOGY
          </h3>
          <br />
          <p className="overlay-outro">
            With southern California reach, proprietary software and game-changing
            aerial imaging, Aero Altitude connects data-seekers to professional
            data-capturers. We stand for unbound progress – unlocking the full
            potential of drone technology and aerial data.
          </p>
          <br />
          <br />
          <a className="cta" href="#contact">
            <button className="contact-button">GET A QUOTE</button>
          </a>
        </div>
      </div>
    </div>
  );
}
