import React from "react";
import Cards from "./components/Cards";
import Official from "./components/Official";

const Homepage = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 className="donateH2">Donate via cryptocurrency</h2>
        <p className="donateP">choose the cryptocurrency and click to pay</p>
      </div>
      <Cards />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "5%",
        }}
      >
        <h2 className="donateH2">Donate via VISA</h2>
      </div>
      <Official />
    </div>
  );
};

export default Homepage;
