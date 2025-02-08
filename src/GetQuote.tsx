import './App.css';
import './GetQuote.css';
import { useForm } from '@formspree/react';
import { useState, useEffect } from 'react';

export default function GetQuote() {
  const [state, handleSubmit] = useForm("mgvokjne");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    inquiryType: '',
    projectDescription: '',
    projectNeeded: '',
    ExtraInformation: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        inquiryType: '',
        projectDescription: '',
        projectNeeded: '',
        ExtraInformation: '',
      });
    }
  }, [state.succeeded]);
  return (
    <div>
      <div className="background_photo_div">
        <img
          src="https://flyguys.com/wp-content/themes/flyguys/images/textures/Topographic-Background-Top.svg"
          alt="Get Quote SVG"
          className="background_photo"
        />
      </div>
      <div className="get_qoute">
        <div className="qoute_container">
          <div className="qoute_text">
            <ul className="dash">
              <li className="get_a_quote_header1">GET A QUOTE</li>
            </ul>
            <h1 className="get_a_quote_header2">
              TAKE YOUR <br /> PROJECT TO <br /> NEW HEIGHTS
            </h1>
            <p className="get_a_quote_text">
              Whether the project takes us to a major metropolitan city, a
              mid-sized town, or a rural area far away from civilization,
              we’re ready to deploy FAA-certified pilots and follow stringent
              safety measures. Connect with Aero Altitude for a quote, and let’s
              explore the right solution for you.
            </p>
          </div>
          <form className="quote-form graybox" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number*</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="inquiryType">
                Is this a personal inquiry or are you reaching out on behalf of a company?*
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                required
              >
                <option value="">Please Select</option>
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
                value={formData.projectDescription}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="projectNeeded">When is the project needed?</label>
              <textarea
                id="projectNeeded"
                name="projectNeeded"
                value={formData.projectNeeded}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="ExtraInformation">Any information you would like to provide?</label>
              <textarea
                id="projectNeeded"
                name="projectNeeded"
                value={formData.ExtraInformation}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit_button">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
}
