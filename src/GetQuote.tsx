import './App.css';
import './GetQuote.css';

export default function GetQuote() {
  return (
    <div>
      <div style={{ width: '100%' }}>
        <img
          src="https://flyguys.com/wp-content/themes/flyguys/images/textures/Topographic-Background-Top.svg"
          alt="Get Quote SVG"
          style={{ width: '100%' }}
        />
      </div>
      <div className="get_qoute">
        <div className="qoute_container">
          <div className="qoute_text">
            <h1>GET A QUOTE</h1>
            <h1>TAKE YOUR <br /> PROJECT TO <br /> NEW HEIGHTS</h1>
            <p>
              Whether the project takes us to a major metropolitan city, a
              mid-sized town, or a rural area far away from civilization,
              we’re ready to deploy FAA-certified pilots and follow stringent
              safety measures. Connect with Aero Altitude for a quote, and let’s
              explore the right solution for you.
            </p>
          </div>
          <form className="quote-form graybox">
            <div className="form-group">
              <label htmlFor="firstName">First Name*</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name*</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number*</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" required />
            </div>
            <div className="form-group">
              <label htmlFor="inquiryType">Is this a personal inquiry or are you reaching out on behalf of a company?*</label>
              <select id="inquiryType" name="inquiryType" required>
                <option>Please Select</option>
                <option value="personal">Personal</option>
                <option value="company">On Behalf of a Company</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="projectDescription">
                Describe what is needed for your drone imaging and data needs*
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="projectNeeded">When is the project needed?</label>
              <textarea id="projectNeeded" name="projectNeeded" required ></textarea>
            </div>
            <button type="submit" className="submit_button">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
}