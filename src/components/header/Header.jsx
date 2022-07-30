import React from "react";
import "./header.css";
import {BsChevronDown} from "react-icons/bs"
import img from "../../assets/full-logo.png"
import VID from "../../assets/main.mp4"

const Header = () => {
    let img_url = "https://i.postimg.cc/wjN7B58s/car-1.jpg";
    return (
        <section id="header">
            <video src={VID} autoPlay loop muted/>
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
