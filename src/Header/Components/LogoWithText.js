import React from "react";

const LogoWithText = ({ imageSrc, text }) => {
    const getImageSize = () => {
        if (text === 'Oculus') {
            return ({
                width: '35px',
                height: '35px',
                marginLeft: '10px',
            })
        }
        else if (text === 'Video') {
            return ({
                width: '30px',
                height: '30px',
                marginLeft: '8px'
            })
        }
        else if (text === 'WebGL') {
            return ({
                width: '45px',
                height: '19px',
                marginBottom: '8px',
                marginLeft: '4px'
            })
        }
        else {
            return ({
                width: '22px',
                height: '22px',
                marginBottom: '4px',
                marginLeft: '24px'
            })
        }
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <img src={imageSrc} style={getImageSize()} />
            <p className="iconText">{text}</p>
        </div>
    )
}
export default LogoWithText