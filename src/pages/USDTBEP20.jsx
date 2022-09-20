import React from "react";
import qr from "../components/QRs/usdtbep20.jpg";
import "../components/Styles/CardDetails.css";
import usdt from "../components/icons/Tether.png";

const USDTBEP20 = () => {
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
            <h3>USDT (BEP20)</h3>
            <p className="asdf pishka">
              0xaC4bCb4142286332430
              <br />
              FDfa63d1fdaC7062285A3
            </p>
            <button
              className="asdf button"
              onClick={() => {
                navigator.clipboard.writeText(
                  "0xaC4bCb4142286332430FDfa63d1fdaC7062285A3"
                );
              }}
            >
              <span className="top">copy address</span>
            </button>
          </div>
        </div>
        <div className="blockchain">
          <h3>Check this account address on blockchain</h3>
          <a href="https://etherscan.io/address/0xaC4bCb4142286332430FDfa63d1fdaC7062285A3">
            <button>Check</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default USDTBEP20;
