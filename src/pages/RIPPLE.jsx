import React from "react";
import qr from "../components/QRs/ripple.jpg";
import "../components/Styles/CardDetails.css";

const RIPPLE = () => {
  return (
    <div className="mainDetails">
      <div className="widthDetails">
        <div className="cardDetails">
            <img src={qr} alt="qrcode" />
          <div className="imgDetails">
            <h3>Ripple Address</h3>
            <p className="asdf pishka">rhh7ytELXgTRvai2FzDENYffFSfEaHK5v9</p>
            <button className="asdf button">copy address</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RIPPLE;
