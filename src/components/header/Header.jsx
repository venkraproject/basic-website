import React from "react";
import img from "../../assets/logo-negro.png";
import "./header.css";

const Header = (props) => {
    let { sectionTitle } = props;
    return (
        <div id="header">
            <div className="header_img-container">
                <img className="header_img" src={img} alt="venkra logo" />
            </div>
            <div className="header_title">{sectionTitle}</div>
        </div>
    );
};

export default Header;
