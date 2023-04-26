import React from "react";
import './index.css'
import pwcLogo from '../../assets/pwcLogo.png'
import Vector from '../../assets/Vector.png'
import youtube from '../../assets/youtube.png'
import web from '../../assets/web.png'
import oculus from '../../assets/oculus.png'

import LogoWithText from "./LogoWithText";
const TextSection = () => {
    const getHeaderWithLogo = () => {
        return (
            <div className="rowContainer">
                <img src={pwcLogo} style={{ width: '52px', height: '40px' }} />
                <div className="border" />
                <p className="title">
                    Metaverse
                </p>
            </div >
        )
    }
    const getContent = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p className="content">
                    Collection Of
                </p>
                <p className="contentMax">
                    Metaverse
                </p>
                <p className="contentMax">
                    Solutions
                </p>
                <p className="contentMin">
                    Thank you for visiting our Metaverse journey
                </p>
            </div >
        )
    }
    const getLogoGroup = () => {
        return (
            <div style={{ display: 'flex', alignItems:'flex-end',justifyContent:'space-between', width: '320px' }}>
                <LogoWithText imageSrc={oculus} text="Oculus"/>
                <LogoWithText imageSrc={web} text="WebGL"/>
                <LogoWithText imageSrc={youtube} text="Video"/>
                <LogoWithText imageSrc={Vector} text="Brochure"/>        
            </div>
        )
    }
    return (
        <div className="textContainer">
            {getHeaderWithLogo()}
            {getContent()}
            {getLogoGroup()}
            
        </div>
    )
}
export default TextSection