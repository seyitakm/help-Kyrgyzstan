import React from "react";
import qr from "../components/QRs/bnb.jpg";
import "../components/Styles/CardDetails.css";
import bnb from "../components/icons/bnb.png";

const BNB = () => {
  return (
    <div className="mainDetails">
      <div className="widthDetails">
        <div className="cardDetails">
          <img src={qr} alt="qrcode" />
          <div className="imgDetails">
            <img
              style={{ width: "60px", height: "60px" }}
              src={bnb}
              alt="icon"
            />
            <h3>BNB Address</h3>
            <p className="asdf pishka">
              bnb1fw7hu4p2n04u7e23pw
              <br />
              emykuy7dq6anwgmugfdw
            </p>
            <button
              className="asdf button"
              onClick={() => {
                navigator.clipboard.writeText(
                  "bnb1fw7hu4p2n04u7e23pwemykuy7dq6anwgmugfdw"
                );
              }}
            >
              <span className="top">copy address</span>
            </button>
          </div>
        </div>
        <div className="blockchain">
          <h3>Check this account address on blockchain</h3>
          <a href="https://bscscan.com/search?f=0&q=bnb1fw7hu4p2n04u7e23pwemykuy7dq6anwgmugfdw">
            <button>Check</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BNB;
