import React from "react";
import qr from "../components/QRs/usdterc20.jpg";
import "../components/Styles/CardDetails.css";
import usdt from "../components/icons/Tether.png";

const USDTERC20 = () => {
  return (
    <div className="mainDetails">
      <div className="widthDetails">
        <div className="cardDetails">
          <img src={qr} alt="qrcode" />
          <div className="imgDetails">
            <img
              style={{ width: "60px", height: "60px" }}
              src={usdt}
              alt="icon"
            />
            <h3>USDT (ERC20)</h3>
            <p className="asdf pishka">
              0xaC4bCb4142286332430FDfa63d1fdaC7062285A3
            </p>
            <button className="asdf button">copy address</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USDTERC20;
