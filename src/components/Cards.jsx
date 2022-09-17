import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/Cards.css";
const Cards = () => {
  const nav = useNavigate();
  return (
    <div className="mainCard">
      <div className="width">
        <div onClick={() => nav("usdttrc20")} className="card">
          USDT (TRC20)
        </div>
        <div onClick={() => nav("usdtbep20")} className="card">
          USDT (BEP20)
        </div>
        <div onClick={() => nav("usdterc20")} className="card">
          USDT (ERC20)
        </div>
        <div onClick={() => nav("bitcoin")} className="card">
          Bitcoin
        </div>
        <div onClick={() => nav("ether")} className="card">
          Ethereum
        </div>
        <div onClick={() => nav("bnb")} className="card">
          BNB
        </div>
        <div onClick={() => nav("trx")} className="card">
          TRX
        </div>
        <div onClick={() => nav("ripple")} className="card">
          Ripple
        </div>
      </div>
    </div>
  );
};

export default Cards;