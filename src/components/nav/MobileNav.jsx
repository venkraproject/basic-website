import React from "react";
import "./mobile-nav.css";
import LOGO from "../../assets/logo-blanco.png";
import { BiPhotoAlbum } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

const MobileNav = () => {
    return (
        <div className="mobile-nav" key="mobile-navbar">
            <Link className="logo-link" to="/">
                <img src={LOGO} alt="venkra-logo" />
            </Link>
            <Link className="section-link" to="/catalogue">
                <BiPhotoAlbum />
            </Link>
            <Link className="section-link" to="/about">
                <IoIosContact />
            </Link>
            <a
                className="wa-link"
                href="https://wa.me/message/DHRR36X34O6ZC1"
                target="_blank"
                rel="noreferrer"
            >
                <BsWhatsapp />
            </a>
        </div>
    );
};

export default MobileNav;
