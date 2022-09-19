import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/Cards.css";
import btc from "../components/icons/Bitcoin.png";
import eth from "../components/icons/Ethereum ETH.png";
import usdt from "../components/icons/Tether.png";
import ripple from "../components/icons/Ripple XRP.png";
import trx from "../components/icons/TRON.png";
import bnb from "../components/icons/bnb.png";

const Cards = () => {
  const nav = useNavigate();
  return (
    <div className="mainCard">
      <div className="width">
        <div onClick={() => nav("usdttrc20")} className="card">
          <img src={usdt} alt="" />
          USDT (TRC20)
          <div>
            <button className="payBtn" onClick={() => nav("usdttrc20")}>
              DONATE
            </button>
          </div>
        </div>
        <div onClick={() => nav("usdtbep20")} className="card">
          <img src={usdt} alt="" />
          USDT (BEP20)
          <div>
            <button className="payBtn" onClick={() => nav("usdtbep20")}>
              DONATE
            </button>
          </div>
        </div>
        <div onClick={() => nav("usdterc20")} className="card">
          <img src={usdt} alt="" />
          USDT (ERC20)
          <div>
            <button className="payBtn" onClick={() => nav("usdterc20")}>
              DONATE
            </button>
          </div>
        </div>
        <div onClick={() => nav("bitcoin")} className="card">
          <img src={btc} alt="" />
          Bitcoin
          <div>
            <button className="payBtn" onClick={() => nav("bitcoin")}>
              DONATE
            </button>
          </div>
        </div>
        <div onClick={() => nav("ether")} className="card">
          <img src={eth} alt="" />
          Ethereum
          <div>
            <button className="payBtn" onClick={() => nav("ether")}>
              DONATE
            </button>
          </div>
        </div>
        <div onClick={() => nav("bnb")} className="card">
          <img src={bnb} alt="" />
          BNB
          <div>
            <button className="payBtn" onClick={() => nav("bnb")}>
              DONATE
            </button>
          </div>
        </div>
        <div onClick={() => nav("trx")} className="card">
          <img src={trx} alt="" />
          TRX
          <div>
            <button className="payBtn" onClick={() => nav("trx")}>
              DONATE
            </button>
          </div>
        </div>
        <div onClick={() => nav("ripple")} className="card">
          <img src={ripple} alt="" />
          Ripple
          <div>
            <button className="payBtn" onClick={() => nav("ripple")}>
              DONATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
