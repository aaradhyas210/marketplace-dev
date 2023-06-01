import React from "react";
import "./index.css";
import pwcLogo from "../../assets/pwcLogo.png";

const TextSection = () => {
  const getHeaderWithLogo = () => {
    return (
      <div className="rowContainer">
        <img src={pwcLogo} style={{ width: "52px", height: "40px" }} />
        <div className="border" />
        <p className="title">Generative AI</p>
      </div>
    );
  };
  const getContent = () => {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p className="content">Collection Of</p>
        <p className="contentMax">Generative AI</p>
        <p className="contentMax">Solutions</p>
      </div>
    );
  };
  const getLogoGroup = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",

          marginTop: "30px",
        }}
      >
        <p className="content">
          Unleashing the Power of AI for Limitless Creativity and Innovation
        </p>
      </div>
    );
  };
  return (
    <div className="textContainer">
      {getHeaderWithLogo()}
      {getContent()}
      {getLogoGroup()}
    </div>
  );
};
export default TextSection;
