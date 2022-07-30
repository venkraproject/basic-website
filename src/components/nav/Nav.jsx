import React from "react";
import "./nav.css";
import LOGO from "../../assets/logo-blanco.png";
import { BiPhotoAlbum } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div className="desktop-nav">
                <div className="left">
                    <Link className="logo-link" to="/">
                        <img src={LOGO} alt="venkra-logo" />
                    </Link>
                </div>
                <div className="right">
                    <Link className="section-link" to="/catalogue?category=none">
                        Catálogo
                    </Link>
                    <Link className="section-link" to="/about">
                        Contáctanos
                    </Link>
                </div>
            </div>
            <div className="mobile-nav">
                <Link className="logo-link" to="/">
                    <img src={LOGO} alt="venkra-logo" />
                </Link>
                <Link className="section-link" to="/catalogue?category=none">
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
        </nav>
    );
};

export default Nav;
