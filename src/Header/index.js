import React from "react";
import LogoSection from "./Components/LogoSection";
import TextSection from "./Components/TextSection";
import './index.css'
const Header = () => {
    return (
        <div className="header">
            <TextSection/>
            <LogoSection/>
        </div>
    )
}
export default Header