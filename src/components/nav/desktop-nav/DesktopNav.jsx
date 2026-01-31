import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./desktop-nav.css";
import LOGO_LIGHT from "../../../assets/logo-blanco.png";
import LOGO_DARK from "../../../assets/logo-negro.png";

// Height values in rem
const LOGO_MAX = 5;
const LOGO_MIN = 2;
const PADDING_MAX = 1.5;
const PADDING_MIN = 0.5;

// Total height change (logo + top padding + bottom padding)
const HEIGHT_DIFF = (LOGO_MAX - LOGO_MIN) + (PADDING_MAX - PADDING_MIN) * 2;

const DesktopNav = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [remInPx, setRemInPx] = useState(16);

    useEffect(() => {
        // Get actual rem size in pixels
        setRemInPx(parseFloat(getComputedStyle(document.documentElement).fontSize));

        const handleScroll = () => {
            // maxScroll in pixels = height difference in rem * pixels per rem
            const maxScroll = HEIGHT_DIFF * remInPx;
            const progress = Math.min(window.scrollY / maxScroll, 1);
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [remInPx]);

    // Interpolate values based on scroll progress
    const logoHeight = LOGO_MAX - (scrollProgress * (LOGO_MAX - LOGO_MIN));
    const padding = PADDING_MAX - (scrollProgress * (PADDING_MAX - PADDING_MIN));
    const isCompact = scrollProgress > 0.5;

    return (
        <div
            className="desktop-nav"
            style={{
                "--logo-height": `${logoHeight}rem`,
                "--nav-padding": `${padding}rem`,
                "--bg-opacity": scrollProgress,
            }}
            key="desktop-navbar"
        >
            <div className="desktop-nav__logo">
                <Link to="/">
                    <img
                        src={LOGO_DARK}
                        alt="venkra-logo"
                        style={{ opacity: 1 - scrollProgress }}
                    />
                    <img
                        src={LOGO_LIGHT}
                        alt="venkra-logo"
                        style={{ opacity: scrollProgress }}
                    />
                </Link>
            </div>

            <div className="desktop-nav__links">
                <Link
                    className="desktop-nav__link"
                    to="/catalogue"
                    style={{ color: isCompact ? "var(--color-light)" : "var(--color-dark)" }}
                >
                    Catálogo
                </Link>
                <Link
                    className="desktop-nav__link"
                    to="/contact"
                    style={{ color: isCompact ? "var(--color-light)" : "var(--color-dark)" }}
                >
                    Contáctanos
                </Link>
            </div>
        </div>
    );
};

export default DesktopNav;
