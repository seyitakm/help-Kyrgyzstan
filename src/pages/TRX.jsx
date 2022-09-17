import React from "react";
import qr from "../components/QRs/trx.jpg";
import "../components/Styles/CardDetails.css";

const TRX = () => {
  return (
    <div className="mainDetails">
      <div className="widthDetails">
        <div className="cardDetails">
          trx
          <div>
            <img src={qr} alt="qrcode" />
            <label htmlFor="address"></label>
            <p id="address">TEAGNjruQU2YyDv69qraytuWf36fjHnfBA</p>
            <button>copy address</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TRX;
