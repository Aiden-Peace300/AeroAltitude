import './OverviewOfServices.css';
import './App.css'
import { GiAerialSignal } from "react-icons/gi";
import { BsClipboard2Data } from "react-icons/bs";
import { GiGolfFlag } from "react-icons/gi";
import { GiTalk } from "react-icons/gi";
import { IoWifiSharp } from "react-icons/io5";
import { GiFarmTractor } from "react-icons/gi";

export default function OverviewOfService() {
  return (
  <div class="services">
    <h1 class="header-text">PLACES WE WILL GO</h1>
    <p class="overview-text">Aero Altitude is more than a provider – we’re partners in solutions. Our specialized services can help take your project to the next level. Venture forward with us.</p>
    <div class="services_overview">
      <div className="col_1">
        <div className="service">
          <div className="aerial_icon">
            <GiAerialSignal/>
          </div>
          <div>
            <h1 className="service-header">Aerial Imaging</h1>
            <p className="service-text">See your project from a new vantage point with a variety of video, still, and thermal images – expertly packaged in immediately usable formats.</p>
          </div>
        </div>
        <div className="service">
          <div className="aerial_icon">
            <BsClipboard2Data />
          </div>
          <div>
            <h1 className="service-header">Inspections</h1>
            <p className="service-text">Go to difficult spaces without sending a human and perform inspections of pitched roofs, industrial stacks, cell towers, wind turbines, hazardous waste sites, or emergency situations.</p>
          </div>
        </div>
        <div className="service">
          <div className="aerial_icon">
            <GiGolfFlag />
          </div>
          <div>
            <h1 className="service-header">Surveying & Mapping</h1>
            <p className="service-text">Scan mountainous terrain, icy locations, and areas where wildlife may be a concern – creating a safer environment for your team.</p>
          </div>
        </div>
      </div>
      <div className="col_2">
        <div className="service">
          <div className="aerial_icon">
            <GiTalk />
          </div>
          <div>
            <h1 className="service-header">Consulting</h1>
            <p className="service-text">Get your very own drone program off the ground with expert consulting from the FlyGuys team. We’ll also help ensure cost-efficiency, regulatory compliance, and safety.</p>
          </div>
        </div>
        <div className="service">
          <div className="aerial_icon">
            <IoWifiSharp />
          </div>
          <div>
            <h1 className="service-header">Marketing & Media</h1>
            <p className="service-text">Produce professional, broadcast-quality videos with captivating visuals.</p>
          </div>
        </div>
        <div className="service">
          <div className="aerial_icon">
          <GiFarmTractor />
          </div>
          <div>
            <h1 className="service-header">Volumetrics</h1>
            <p className="service-text">Use remote sensing techniques to measure, model, and analyze material volume.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
