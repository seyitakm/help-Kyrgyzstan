import axios from "axios";
import React from "react";
import { useState } from "react";
import qr from "../components/QRs/trx.jpg";
import "../components/Styles/CardDetails.css";
import trx from "../components/icons/TRON.png";

const TRX = () => {
  const { balance, setBalance } = useState("");
  async function getAccount() {
    const res = await axios(
      "https://apilist.tronscan.org/api/account?address=TEAGNjruQU2YyDv69qraytuWf36fjHnfBA"
    );
    res.data.balances.forEach((i) => {
      console.log(i);
    });
  }
  getAccount();
  return (
    <div className="mainDetails">
      <div className="widthDetails">
        <div className="cardDetails">
          {balance}
          <img src={qr} alt="qrcode" />
          <div className="imgDetails">
            <img
              style={{ width: "60px", height: "60px" }}
              src={trx}
              alt="icon"
            />
            <h3>TRX Address</h3>
            <p className="asdf pishka">
              TEAGNjruQU2YyDv69qra
              <br />
              ytuWf36fjHnfBA
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

export default TRX;
