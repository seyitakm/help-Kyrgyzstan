import React from "react";
import qr from "../components/QRs/bnb.jpg";
import "../components/Styles/CardDetails.css";

const BNB = () => {
  return (
    <div className="mainDetails">
      <div className="widthDetails">
        <div className="cardDetails">
          <div>
            <img src={qr} alt="qrcode" />
            <label htmlFor="address"></label>
            <p id="address">bnb1fw7hu4p2n04u7e23pwemykuy7dq6anwgmugfdw</p>
            <button>copy address</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BNB;
