import React, { useState } from "react";
import "./desktop-nav.css";
import LOGO from "../../../assets/logo-blanco.png";
import { Link } from "react-router-dom";

const DesktopNav = () => {
    const [navBar, setNavBar] = useState(false);

    const changeBg = () => {
        if (window.scrollY >= 150) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };

    window.addEventListener("scroll", changeBg);

    return (
        <div className={navBar ? "desktop-nav active" : "desktop-nav"} key="desktop-navbar">
            <div className="left">
                <Link className="logo-link" to="/">
                    <img src={LOGO} alt="venkra-logo" />
                </Link>
            </div>
            <div className="right">
                <Link className="section-link" to="/catalogue">
                    Catálogo
                </Link>
                <Link className="section-link" to="/about">
                    Contáctanos
                </Link>
            </div>
        </div>
    );
};

export default DesktopNav;
