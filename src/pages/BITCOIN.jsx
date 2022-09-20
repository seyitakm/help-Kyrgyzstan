import React from "react";
import "../components/Styles/CardDetails.css";
import qr from "../components/QRs/btc.jpg";
import btc from "../components/icons/Bitcoin.png";
import { useState } from "react";

const BITCOIN = () => {
  //   const { p } = useState();
  return (
    <div className="mainDetails">
      <div className="widthDetails">
        <div className="cardDetails">
          <img src={qr} alt="qrcode" />
          <div className="imgDetails">
            <img
              style={{ width: "60px", height: "60px" }}
              src={btc}
              alt="icon"
            />
            <h3>Bitcoin Address</h3>
            <p className="asdf pishka">
              bc1qav7emgpgcejejuytk8xrkdmn4a8gw4cwlv342w
            </p>
            <button
              className="asdf button"
              onClick={() => {
                navigator.clipboard.writeText(
                  "bc1qav7emgpgcejejuytk8xrkdmn4a8gw4cwlv342w"
                );
              }}
            >
              <span className="top">copy address</span>
            </button>
          </div>
        </div>
        <div className="blockchain">
          <h3>Check this account address on blockchain</h3>
          <a href="https://www.blockchain.com/btc/address/bc1qav7emgpgcejejuytk8xrkdmn4a8gw4cwlv342w">
            <button>Check</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BITCOIN;
