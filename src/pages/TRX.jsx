import React from "react";
import qr from "../components/QRs/trx.jpg";
import "../components/Styles/CardDetails.css";

const TRX = () => {
  return (
    <div className="mainDetails">
      <div className="widthDetails">
        <div className="cardDetails">
            <img src={qr} alt="qrcode" />
          <div className="imgDetails">
            <h3>TRX Address</h3>
            <p className="asdf pishka">TEAGNjruQU2YyDv69qraytuWf36fjHnfBA</p>
            <button className="asdf button">copy address</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TRX;
