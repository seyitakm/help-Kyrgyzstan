import React from "react";
import qr from "../components/QRs/eth.jpg";
import "../components/Styles/CardDetails.css";
import eth from "../components/icons/Ethereum ETH.png";

const ETHER = () => {
  return (
    <div className="mainDetails">
      <div className="widthDetails">
        <div className="cardDetails">
          <img src={qr} alt="qrcode" />
          <div className="imgDetails">
            <img
              style={{ width: "60px", height: "60px" }}
              src={eth}
              alt="icon"
            />
            <h3>Ethereum Address</h3>
            <p className="asdf pishka">
              0xaC4bCb4142286332430FDfa63d1fdaC7062285A3
            </p>
            <button
              className="asdf button"
              onClick={() => {
                navigator.clipboard.writeText(
                  "0xaC4bCb4142286332430FDfa63d1fdaC7062285A3"
                );
              }}
            >
              copy address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ETHER;
