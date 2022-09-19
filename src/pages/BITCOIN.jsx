import React from "react";
import "../components/Styles/CardDetails.css";
import qr from "../components/QRs/btc.jpg";
import btc from "../components/icons/Bitcoin.png";

const BITCOIN = () => {
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
            <button className="asdf button">copy address</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BITCOIN;
