import React from "react";
import qr from "../components/QRs/usdtbep20.jpg";
import "../components/Styles/CardDetails.css";

const USDTBEP20 = () => {
  return (
    <div className="mainDetails">
      <div className="widthDetails">
        <div className="cardDetails">
          usdtbep20
          <div>
            <img src={qr} alt="qrcode" />
            <label htmlFor="address"></label>
            <p id="address">0xaC4bCb4142286332430FDfa63d1fdaC7062285A3</p>
            <button>copy address</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USDTBEP20;
