import React from "react";
import qr from "../components/QRs/usdttrc20.jpg";
import "../components/Styles/CardDetails.css";
import usdt from "../components/icons/Tether.png";
import { useState } from "react";

const USDTTRC20 = () => {
  const { state, setState } = useState();
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
            <h3>USDT (TRC20)</h3>
            <p className="asdf pishka">
              TEAGNjruQU2YyDv69qr
              <br />
              aytuWf36fjHnfBA
            </p>
            <button
              className="asdf button"
              onClick={() => {
                navigator.clipboard.writeText(
                  "TEAGNjruQU2YyDv69qraytuWf36fjHnfBA"
                );
              }}
            >
              <span className="top">copy address</span>
            </button>
          </div>
        </div>
        <div className="blockchain">
          <h3>Check this account address on blockchain</h3>
          <a href="https://tronscan.org/#/address/TEAGNjruQU2YyDv69qraytuWf36fjHnfBA">
            <button>Check</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default USDTTRC20;
