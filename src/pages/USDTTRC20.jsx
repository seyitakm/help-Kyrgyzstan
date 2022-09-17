import React from "react";
import qr from "../components/QRs/usdttrc20.jpg";

const USDTTRC20 = () => {
  return (
    <div className="mainDetails">
      <div className="widthDetails">
        <div className="cardDetails">
          usdttrc20
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

export default USDTTRC20;
