import React from "react";
import qr from "../components/QRs/ripple.jpg";
import "../components/Styles/CardDetails.css";
import ripple from "../components/icons/Ripple XRP.png";

const RIPPLE = () => {
  return (
    <div className="mainDetails">
      <div className="widthDetails">
        <div className="cardDetails">
          <img src={qr} alt="qrcode" />
          <div className="imgDetails">
            <img
              style={{ width: "60px", height: "60px" }}
              src={ripple}
              alt="icon"
            />
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
