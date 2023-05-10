import React, { useState } from "react";
import "./index.css";
import webqa from "../assets/webQAUpdated.PNG";
import speechassistant from "../assets/speechUpdated.PNG";
import docsummary from "../assets/docSummaryUpdated.PNG";
import videosummary from "../assets/videoSummarizationUpdated.PNG";
import WebQAVideo from "../assets/Web QnA - OpenAI.mp4";
import SpeechVideo from "../assets/React App - Demonstration.mp4";
import DocSummaryVideo from "../assets/Summary generation - Demonstration.mp4";
import VidSummaryVideo from "../assets/Video Summarization.mp4";

import GenAICard from "./GenAICard";

import { Modal, ModalHeader, ModalBody } from "reactstrap";
const mockData = [
  {
    imageSrc: webqa,
    name: "Web QnA",
    url: "https://agreeable-bush-002da0010.3.azurestaticapps.net/",
    videoUrl: WebQAVideo,
    isLinkDisabled: false,
    isVideoDisabled: false,
  },
  {
    imageSrc: speechassistant,
    name: "Speech assistant",
    url: "https://polite-sea-048e5a710.3.azurestaticapps.net/",
    videoUrl: SpeechVideo,
    isLinkDisabled: false,
    isVideoDisabled: false,
  },
  {
    imageSrc: docsummary,
    name: "Document Summary - QnA Application",
    url: "https://blue-dune-0148bf810.3.azurestaticapps.net/",
    videoUrl: DocSummaryVideo,
    isLinkDisabled: false,
    isVideoDisabled: false,
  },
  {
    imageSrc: videosummary,
    name: "Video summarization - QnA Application",
    url: "https://delightful-cliff-09e727610.3.azurestaticapps.net/",
    videoUrl: VidSummaryVideo,
    isLinkDisabled: false,
    isVideoDisabled: false,
  },
];

const Body = () => {
  const [show, setShow] = useState(false);
  const [iframeLink, setIframeLink] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = (url) => () => {
    setIframeLink(url);
    setShow(true);
  };
  return (
    <div className="resDesign">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ margin: "0 auto", width: "1080px" }}>
          <p className="projectTitle">Generative AI Solutions</p>
          <div className="cardArea">
            {mockData.map(
              (
                {
                  imageSrc,
                  name,
                  url,
                  videoUrl,
                  isLinkDisabled,
                  isVideoDisabled,
                },
                index
              ) => {
                return (
                  <div key={index} style={{ padding: "5px" }}>
                    <GenAICard
                      imageSrc={imageSrc}
                      name={name}
                      url={url}
                      videoUrl={videoUrl}
                      isLinkDisabled={isLinkDisabled}
                      isVideoDisabled={isVideoDisabled}
                      onClick={handleShow}
                    />
                  </div>
                );
              }
            )}
            <Modal
              centered={true}
              isOpen={show}
              toggle={handleClose}
              style={{ justifyContent: "center" }}
            >
              <ModalHeader
                toggle={handleClose}
                style={{ border: 0 }}
              ></ModalHeader>
              <ModalBody style={{ padding: "5px", top: "-50px" }}>
                <iframe src={iframeLink} scrolling="no" className="metaVideo" />
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
