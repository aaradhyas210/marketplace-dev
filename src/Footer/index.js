import React from "react";
import styled from "styled-components";
import pwcwhite from "../assets/pwcwhite.png";
import "./index.css";

const Headers = styled.p`
  font-family: "PwC Helvetica Neue", arial, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #ffffff;
  padding-right: 40px;
`;

const Body = styled.p`
  font-family: "PwC Helvetica Neue", arial, serif;
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  color: #ffffff;
`;

const Footertexts = styled.p`
  font-family: "PwC Helvetica Neue", arial, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  padding-right: 25px;
  color: #ffffff;
`;
const Border = styled.div`
  border-top: 1px solid #d9d9d9;
`;
const ResDesign = styled.div`
  @media screen and (max-width: 1200px) {
    width: 1440px;
    height: 300px;
    // margin-top: 62.85rem;
  }
`;

const Footer = () => {
  return (
    <ResDesign>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "#2D2D2D",
        }}
      >
        <div className="footerSection">
          <div style={{ display: "flex" }}>
            <Body>
              Disclaimer: All the above links and videos are only for
              representation purpose
            </Body>
          </div>
        </div>
      </div>
    </ResDesign>
  );
};

export default Footer;
