import './App.css';
import './Prices.css'

export default function Prices() {
  return (
    <div class="prices">
      <h1 class="free_consultation">FREE 30-MIN CONSULTATION. <span>SCHEDULE A CALL TODAY TO GET STARTED.</span></h1>
      <div className="rowOfPrices">
        <div className="photography">
          <h1 className="header_text">PHOTOGRAPHY</h1>
          <ul className="ul_content">
            <li>Single Image: $25</li>
            <li>5-Image Set: $100 ($20 per image)</li>
            <li>10-Image Set: $175 ($17.50 per image)</li>
          </ul>
        </div>
        <div className="photography">
          <h1 className="header_text">VIDEOGRAPHY</h1>
          <ul className="ul_content">
            <li>15-Second Clip: $65</li>
            <li>30-Second Clip: $120</li>
            <li>1-Minute Highlight Reel: $230</li>
          </ul>
        </div>
        <div className="photography">
          <h1 className="header_text">BUNDLE PACK</h1>
          <ul className="ul_content">
            <li>Photo & Video Combo (5 images + 15-second clip): $150</li>
            <li>10 images + 45-second Clip Combo: $300</li>
          </ul>
        </div>
      </div>
      <h1 className="inspection_fee">STARTING AT $65 FOR LOCATION INSPECTION. TRAVEL FEES MAY APPLY.</h1>
      <div className="discount_alert">
        <h1 className="discount_header">DISCOUNT ALERT</h1>
        <p className="discount_text">10% discount on combined services</p>
      </div>
    </div>
  );
}