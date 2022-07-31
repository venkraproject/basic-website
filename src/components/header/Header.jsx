import React from "react";
import {BsChevronDown} from "react-icons/bs"
import Bowser from 'bowser'

import "./header.css";

import img from "../../assets/full-logo.png"
import VID from "../../assets/main.mp4"

const Header = () => {

    const bowser = Bowser.getParser(window.navigator.userAgent);

    let video_section = {
        WebKit: <img className="header_banner-container" src={VID} alt="venkra banner"/>,
        Gecko: <video className="header_banner-container" src={VID} autoPlay loop muted/>,
        Blink: <video className="header_banner-container" src={VID} autoPlay loop muted/>
    }

    return (
        <section id="header">
            {video_section[bowser.getEngineName()]}
            <div className="header-content">
                <div className="container-header_logo">
                    <img src={img} alt=""/> 
                </div>
                <div className="header-scroll_down">
                    <div className="header-scroll_down-text">SCROLL DOWN</div> <br/> <div className="header-scroll_down-arrow"><BsChevronDown/></div>
                </div>
            </div>
        </section>
    );
};

export default Header;
