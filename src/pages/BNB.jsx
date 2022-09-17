import React from "react";
import qr from "../components/QRs/bnb.jpg";
import "../components/Styles/CardDetails.css";

const BNB = () => {
  return (
    <div className="mainDetails">
      <div className="widthDetails">
        <div className="cardDetails">
            <img src={qr} alt="qrcode" />
          <div className="imgDetails">
            <h3>BNB Address</h3>
            <p className="asdf pishka">bnb1fw7hu4p2n04u7e23pwemykuy7dq6anwgmugfdw</p>
            <button className="asdf button">copy address</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BNB;
