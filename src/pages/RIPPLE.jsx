import React from "react";
import qr from "../components/QRs/ripple.jpg";

const RIPPLE = () => {
  return (
    <div className="mainDetails">
      <div className="widthDetails">
        <div className="cardDetails">
          ripple
          <div>
            <img src={qr} alt="qrcode" />
            <label htmlFor="address"></label>
            <p id="address">rhh7ytELXgTRvai2FzDENYffFSfEaHK5v9</p>
            <button>copy address</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RIPPLE;
