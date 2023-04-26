import React from "react";
import "./index.css";

const GenAICard = ({
  imageSrc,
  url,
  name,
  videoUrl,
  isLinkDisabled,
  isVideoDisabled,
  onClick,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img src={imageSrc} className="cardImage" />
      <div className="cardContent">
        <div className="cardText">
          <p className="pTitle">
            <b style={{ wordBreak: "break-word" }}>{name}</b>
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {isLinkDisabled ? (
            <a
              style={{ marginRight: "19px", cursor: "not-allowed" }}
              className="linkText"
            >
              Link
            </a>
          ) : (
            <a
              style={{ marginRight: "19px" }}
              className="linkText"
              onClick={() =>
                window.open(url + "?dt=" + new Date().getTime(), "_blank")
              }
            >
              Link
            </a>
          )}
          {isVideoDisabled ? (
            <a
              style={{
                backgroundColor: "#E0301E",
                color: "#FFFFFF",
                cursor: "not-allowed",
              }}
              className="linkText"
            >
              Video
            </a>
          ) : (
            <a className="linkText" onClick={onClick(videoUrl)}>
              Video
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default GenAICard;
