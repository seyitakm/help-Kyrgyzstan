import React from "react";
import batkenVisa from "../components/icons/BatkenBeneficiary.jpg";
import batkenVisa2 from "../components/icons/BatkenBeneficiary2.jpg";

const Official = () => {
  return (
    <div className="mainCard">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          //   flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            // flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <img style={{ width: "40%" }} src={batkenVisa} alt="b" />
          <img style={{ width: "40%" }} src={batkenVisa2} alt="b" />
        </div>

        <div style={{ marginTop: "2%", padding: "25px" }}>
          <p
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: "25px",
              fontFamily: "Oxygen",
              fontWeight: 600,
            }}
          >
            <strong>
              In connection with the situation on the Kyrgyz-Tajik border of the
              Batken region of the country, we inform you about the details for
              transferring charitable assistance.
            </strong>{" "}
            <p style={{ marginTop: "2%", fontSize: "20px" }}>
              1. Recipient: Office of the authorized representative of the
              Kyrgyz Republic in Batken region Beneficiary's bank: MFKR Central
              Treasury Beneficiary account in the treasury system:
              4409021103005073 BIK 440902 - (MKP, VKP) BIK 440001 - through
              banks
            </p>{" "}
            <p style={{ marginTop: "2%", fontSize: "20px" }}>
              2. Beneficiary's account through commercial banks:
              1352119929762602 Beneficiary bank: Aiyl Bank OJSC BIK 135001
              Purpose of payment: assistance to victims of the Batken events
              Payment code: 14411100 #HelpBatken
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Official;
