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
            <li>Single Image: $35</li>
            <li>5-Image Set: $175 ($35 per image)</li>
            <li>10-Image Set: $350 ($35 per image)</li>
          </ul>
        </div>
        <div className="photography">
          <h1 className="header_text">VIDEOGRAPHY</h1>
        </div>
        <div className="photography">
          <h1 className="header_text">BUNDLE PACK</h1>
        </div>
      </div>
    </div>
  );
}