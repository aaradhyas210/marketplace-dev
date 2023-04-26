import React, { useState } from "react";
import "./index.css";
import jewellery from "../assets/Jewellery_Thumbnail.png";
import showroom from "../assets/showroom.png";
import automobile from "../assets/Automobile_New_Logo.png";
import volvo from "../assets/volvo.png";
import bank from "../assets/bank.jpg";
import insurance from "../assets/insurance.png";
import kankan from "../assets/kankan.PNG";
import clothing from "../assets/Clothing_Template.png";
import office from "../assets/Template_Office.png";
import health from "../assets/health.png";
import sentosa from "../assets/sentosa.png";
import rbl from "../assets/rbl.png";
import maxlife from "../assets/maxlife.png";
import school from "../assets/school.png";
import factory from "../assets/factory.png";
import training from "../assets/RansomwareTemplate.png";
import arrow from "../assets/arrow.png";
import roblox from "../assets/RobloxTemplate.png";
import realestate from "../assets/TemplateEstate.png";
// import refresh from "../assets/refresh-ccw.png";
// import full from "../assets/full.png";
// import close from "../assets/close.png";
import JewelleryverseVideo from "../assets/Jewellery.mp4";
import OfficeverseVideo from "../assets/Office_New_Video_2.mp4";
import AutomobileverseVideo from "../assets/Auto_New_Video.mp4";
import ClothingverseVideo from "../assets/Clothingverse_modified.mp4";
import HealthVerseVideo from "../assets/Healthcare.mp4";
import SentosaVerseVideo from "../assets/SentosaVideo.mp4";
import SchoolverseVideo from "../assets/School.mp4";
import FactoryVerseVideo from "../assets/Factory_Tour.mp4";
import MetaverseNoCodeVideo from "../assets/Metaverse No-code platform overview.mp4";
import TrainingVerseVideo from "../assets/RansomWareIncident.mp4";
import RobloxVerseVideo from "../assets/Roblox.mp4";
import RealEstateVerseVideo from "../assets/RealEstateNew.mp4";
import WebGlCard from "./WebGlCard";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
const mockData = [
  {
    imageSrc: jewellery,
    name: "Jewellery Verse",
    url: "https://pwcjewelleryshowroom.azurewebsites.net/",
    videoUrl: JewelleryverseVideo,
    isVideoDisabled: false,
  },
  {
    imageSrc: automobile,
    name: "Auto Verse",
    url: "https://pwcautodemo.azurewebsites.net/",
    videoUrl: AutomobileverseVideo,
    isVideoDisabled: false,
  },
  // {
  //     imageSrc: volvo,
  //     name: 'Fashion',
  //     url: 'https://pwcclothingshowroomdemo.azurewebsites.net/',
  //     videoUrl: ClothingverseVideo,
  //     isVideoDisabled: false
  // },
  {
    imageSrc: office,
    name: "Office Verse",
    url: "https://pwc-officeverse.azurewebsites.net/Host/",
    videoUrl: OfficeverseVideo,
    isVideoDisabled: false,
  },
  // {
  //     imageSrc: kankan,
  //     name: 'Kanak Jewellery',
  //     url: 'https://pwcjewelleryshowroom.azurewebsites.net/'
  // },
  // {
  //     imageSrc: clothing,
  //     name: 'New gen Clothing',
  //     url: 'https://pwcclothingshowroomdemo.azurewebsites.net/'
  // },
  {
    imageSrc: health,
    name: "Healthcare Verse",
    url: "https://pwchealthcare.azurewebsites.net/",
    videoUrl: HealthVerseVideo,
    isVideoDisabled: false,
  },
  {
    imageSrc: sentosa,
    name: "Sentosa Verse",
    url: "https://sentosashowcase.azurewebsites.net/",
    videoUrl: SentosaVerseVideo,
    isVideoDisabled: false,
  },
  {
    imageSrc: school,
    name: "School Verse",
    url: "https://pwcschoolexperience.azurewebsites.net/",
    videoUrl: SchoolverseVideo,
    isVideoDisabled: false,
  },
  {
    imageSrc: factory,
    name: "Factory Verse",
    url: "https://pwcfactorymetaverse.azurewebsites.net",
    videoUrl: FactoryVerseVideo,
    isVideoDisabled: false,
  },
  {
    imageSrc: training,
    name: "Training Verse",
    url: "https://pwctrainingexperience.azurewebsites.net/",
    videoUrl: TrainingVerseVideo,
    isVideoDisabled: false,
  },
  {
    imageSrc: clothing,
    name: "Clothing Verse",
    url: "https://pwcclothingmetastore.azurewebsites.net/",
    videoUrl: ClothingverseVideo,
    isVideoDisabled: false,
  },
  {
    imageSrc: roblox,
    name: "Roblox Verse",
    url: "",
    videoUrl: RobloxVerseVideo,
    isVideoDisabled: false,
  },
  {
    imageSrc: realestate,
    name: "RealEstate Verse",
    url: "https://pwcrealestateexperience.azurewebsites.net/",
    videoUrl: RealEstateVerseVideo,
    isVideoDisabled: false,
  },
  // {
  //     imageSrc: arrow,
  //     name: 'Arrow Showroom',
  //     url: 'https://pwcarrowmetaverse.azurewebsites.net',
  //     videoUrl: "",
  //     isVideoDisabled: true
  // }
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
          <p className="projectTitle">Metaverse Solutions</p>
          <div className="cardArea">
            {mockData.map(
              ({ imageSrc, name, url, videoUrl, isVideoDisabled }, index) => {
                return (
                  <div key={index} style={{ padding: "5px" }}>
                    <WebGlCard
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
