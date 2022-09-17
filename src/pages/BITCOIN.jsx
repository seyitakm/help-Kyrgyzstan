import React from "react";
import "../components/Styles/CardDetails.css";
import qr from "../components/QRs/btc.jpg";

const BITCOIN = () => {
  return (
    <div className="mainDetails">
      <div className="widthDetails">
        <div className="cardDetails">
          <div>
            <img src={qr} alt="qrcode" />
            <label htmlFor="address"></label>
            <p id="address">bc1qav7emgpgcejejuytk8xrkdmn4a8gw4cwlv342w</p>
            <button>copy address</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BITCOIN;
