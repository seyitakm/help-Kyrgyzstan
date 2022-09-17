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
          trx{balance}
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

export default TRX;
