import React from "react";
import qr from "../components/QRs/usdttrc20.jpg";
import "../components/Styles/CardDetails.css";

const USDTTRC20 = () => {
  return (
    <div className="mainDetails">
      <div className="widthDetails">
        <div className="cardDetails">
            <img src={qr} alt="qrcode" />
          <div className="imgDetails">
            <h3>Tether (TRC20) Address</h3>
            <p className="asdf pishka">TEAGNjruQU2YyDv69qraytuWf36fjHnfBA</p>
            <button className="asdf button">copy address</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USDTTRC20;
