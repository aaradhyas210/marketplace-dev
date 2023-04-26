import React, { useState } from "react";
import "./index.css";
import webqa from "../assets/Web scraping tool - QnA Chatbot.png";
import speechassistant from "../assets/Speech Assistant.png";
import docsummary from "../assets/Document Summary.png";
import videosummary from "../assets/Video Summarization.png";
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
    url: "https://gptchatbott.azurewebsites.net/",
    videoUrl: WebQAVideo,
    isVideoDisabled: false,
  },
  {
    imageSrc: speechassistant,
    name: "Speech assistant",
    url: "https://speechgtp.azurewebsites.net/",
    videoUrl: SpeechVideo,
    isVideoDisabled: false,
  },
  {
    imageSrc: docsummary,
    name: "Document Summary - QnA Application",
    url: "",
    videoUrl: DocSummaryVideo,
    isVideoDisabled: false,
  },
  {
    imageSrc: videosummary,
    name: "Video summarization - QnA Application",
    url: "",
    videoUrl: VidSummaryVideo,
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
  // const [data, setData] = useState([
  //     {
  //         imageSrc: jewellary,
  //         name: 'Jewellary',
  //         url: 'https://pwcjewelleryshowroomdemo.azurewebsites.net/'
  //     },
  //     {
  //         imageSrc: volvo,
  //         name: 'Automobile',
  //         url: 'https://pwcautodemo.azurewebsites.net/'
  //     },
  //     {
  //         imageSrc: showroom,
  //         name: 'Fashion',
  //         url: 'https://pwcclothingshowroomdemo.azurewebsites.net/'
  //     }
  // ])
  // const addData = () => {
  //     const newData = data.concat({
  //         imageSrc: bank,
  //         name: 'Bank',
  //         url: 'Webgl link'
  //     });
  //     setData(newData);
  // };
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
              ({ imageSrc, name, url, videoUrl, isVideoDisabled }, index) => {
                return (
                  <div key={index} style={{ padding: "5px" }}>
                    <GenAICard
                      imageSrc={imageSrc}
                      name={name}
                      url={url}
                      videoUrl={videoUrl}
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
              {/* <ModalFooter style={{ background: "#FFB600" }}>
                        <div style={{ display: 'flex' }}>
                            <a href={iframeLink} target='_blank' onClick={() => setShow(false)}>
                                <img src={full} style={{ width: '65px', height: '65px' }} />
                            </a>
                            <buton onClick={() => setShow(false)}>
                                <img src={close} style={{ width: '65px', height: '65px' }} />
                            </buton>
                        </div>
                    </ModalFooter> */}
            </Modal>
          </div>
          {/* <button className="loadBtn" onClick={addData}>
                <span
                    style={{
                        fontFamily: 'PwC Helvetica Neue',arial,serif,
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "43px",
                        textAlign: 'center',
                        color: "#FFFFFF",
                        paddingRight: '10px'
                    }}
                >
                    Load More
                </span>
                <img src={refresh} style={{ width: "16px", height: "16px" }} />
            </button> */}
        </div>
      </div>
    </div>
  );
};
export default Body;
