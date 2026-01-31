import "./footer.css";
import Logo from "../../assets/logo.svg?react";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";
import { Link } from "react-router-dom";
import socialLinks from "../../config/socialLinks";

const Footer = () => {
    return (
        <footer id="footer">

            <Link className="footer__logo" to="/">
                <Logo />
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
                <a href={socialLinks.facebook.url} target="_blank" rel="noreferrer">
                    <BsFacebook />
                </a>
                <a href={socialLinks.instagram.url} target="_blank" rel="noreferrer">
                    <BsInstagram />
                </a>
                <a href={socialLinks.facebook.contactUrl} target="_blank" rel="noreferrer">
                    <BsMessenger />
                </a>
                <a href={socialLinks.whatsapp.url} target="_blank" rel="noreferrer">
                    <BsWhatsapp />
                </a>
            </div>

            <div className="footer__copyright">
                <small>
                    <a href="https://profile.juanrcifuentes.com" target="_blank" rel="noreferrer">@juanrcifuentes</a>{" "}
                    All rights reserved
                </small>
            </div>
        </footer>
    );
};

export default Footer;
