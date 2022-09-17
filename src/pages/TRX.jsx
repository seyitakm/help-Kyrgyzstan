import axios from "axios";
import React from "react";
import { useState } from "react";
import qr from "../components/QRs/trx.jpg";
import "../components/Styles/CardDetails.css";

const TRX = () => {
  const { balance, setBalance } = useState("");
  async function getAccount() {
    const res = await axios(
      "https://apilist.tronscan.org/api/account?address=TEAGNjruQU2YyDv69qraytuWf36fjHnfBA"
    );
    res.data.balances.forEach((i) => {
      return setBalance(i.amount);
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
            <h3>TRX Address</h3>
            <p className="asdf pishka">TEAGNjruQU2YyDv69qraytuWf36fjHnfBA</p>
            <button className="asdf button">copy address</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TRX;
