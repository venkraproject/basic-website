import React from "react";
import "./footer.css";
import LOGO from "../../assets/logo.png";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer id="footer">

            <Link  className="footer__logo" to="/">
                <img src={LOGO} alt="" />
            </Link>

            <ul className="permalinks">
                <Link to="/">
                    Home
                </Link>
                <Link to="/catalogue">
                    Catálogos
                </Link>
                <Link to="/contact">
                    Contáctanos
                </Link>
                <Link to="/contact">
                    Trabaja con nosotros
                </Link>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/Venkra.co/" target="_blank" rel="noreferrer">
                    <BsFacebook />
                </a>
                <a href="https://www.instagram.com/venkra.co/" target="_blank" rel="noreferrer">
                    <BsInstagram />
                </a>
                <a href="https://m.me/Venkra.co" target="_blank" rel="noreferrer">
                    <BsMessenger />
                </a>
                <a href="https://wa.me/message/DHRR36X34O6ZC1" target="_blank" rel="noreferrer">
                    <BsWhatsapp />
                </a>
            </div>

            <div className="footer__copyright">
                <small>
                    <a href="https://profile.juanrcifuentes.com" target="_blank" rel="noreferrer">@juanrcifuentes</a>{" "}
                    <a href="https://github.com/Ncano27" target="_blank" rel="noreferrer">@ncano27</a>{" "}
                    All rights reserved
                </small>
            </div>
        </footer>
    );
};

export default Footer;
