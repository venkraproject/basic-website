import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoSunnyOutline, IoMoonOutline, IoColorPaletteOutline } from "react-icons/io5";
import { useTheme } from "../../../context/ThemeContext";
import ThemePanel from "../../theme-panel/ThemePanel";
import "./desktop-nav.css";
import LOGO_LIGHT from "../../../assets/logo-blanco.png";
import LOGO_DARK from "../../../assets/logo-negro.png";

// Height values in rem
const LOGO_MAX = 5;
const LOGO_MIN = 2;
const PADDING_MAX = 0.5;
const PADDING_MIN = 0.5;

// Total height change (logo + top padding + bottom padding)
const HEIGHT_DIFF = (LOGO_MAX - LOGO_MIN) + (PADDING_MAX - PADDING_MIN) * 2;

const pageNames = {
    '/catalogue': 'Catálogo',
    '/contact': 'Contáctanos',
    '/about': 'Nosotros',
};

const DesktopNav = () => {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();
    const isHomePage = location.pathname === "/";
    const basePath = '/' + location.pathname.split('/')[1];
    const pageName = pageNames[basePath];

    const [scrollProgress, setScrollProgress] = useState(isHomePage ? 1 : 0);
    const [remInPx, setRemInPx] = useState(16);
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    useEffect(() => {
        // Reset scroll progress when route changes
        setScrollProgress(isHomePage ? 1 : 0);
    }, [isHomePage]);

    useEffect(() => {
        // Get actual rem size in pixels
        setRemInPx(parseFloat(getComputedStyle(document.documentElement).fontSize));

        const handleScroll = () => {
            if (isHomePage) {
                // On homepage: start compact, stay compact until scroll up
                const maxScroll = HEIGHT_DIFF * remInPx;
                // Reverse: progress goes from 1 to 0 as we scroll down, but we want to stay compact
                // Actually, on homepage we want it always compact, just fade in the background
                const bgProgress = Math.min(window.scrollY / 100, 1);
                setScrollProgress(1); // Always compact on homepage
                // We'll handle bg separately
                document.documentElement.style.setProperty('--home-bg-opacity', bgProgress);
            } else {
                // On other pages: normal shrinking behavior
                const maxScroll = HEIGHT_DIFF * remInPx;
                const progress = Math.min(window.scrollY / maxScroll, 1);
                setScrollProgress(progress);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Call once on mount
        return () => window.removeEventListener("scroll", handleScroll);
    }, [remInPx, isHomePage]);

    // Interpolate values based on scroll progress
    const logoHeight = LOGO_MAX - (scrollProgress * (LOGO_MAX - LOGO_MIN));
    const padding = PADDING_MAX - (scrollProgress * (PADDING_MAX - PADDING_MIN));
    const pageNameSize = 1.1 - (scrollProgress * 0.35); // 1.1rem -> 0.75rem

    // On homepage: use light logo and light links always
    // On other pages: transition based on scroll
    const useLight = isHomePage || scrollProgress > 0.5;

    // Background opacity: on homepage it's controlled separately, on other pages it's scrollProgress
    const bgOpacity = isHomePage ? 'var(--home-bg-opacity, 0)' : scrollProgress;

    return (
        <div
            className={`desktop-nav ${isHomePage ? 'desktop-nav--homepage' : ''}`}
            style={{
                "--logo-height": `${logoHeight}rem`,
                "--nav-padding": `${padding}rem`,
                "--bg-opacity": bgOpacity,
                "--page-name-size": `${pageNameSize}rem`,
            }}
            key="desktop-navbar"
        >
            <div className="desktop-nav__left">
                <div className="desktop-nav__logo">
                    <Link to="/">
                        <img
                            src={LOGO_DARK}
                            alt="venkra-logo"
                            style={{ opacity: isHomePage ? 0 : 1 - scrollProgress }}
                        />
                        <img
                            src={LOGO_LIGHT}
                            alt="venkra-logo"
                            style={{ opacity: isHomePage ? 1 : scrollProgress }}
                        />
                    </Link>
                </div>
                {pageName && !isHomePage && (
                    <div className="desktop-nav__page-name">
                        <span style={{ opacity: 1 - scrollProgress }}>{pageName}</span>
                        <span style={{ opacity: scrollProgress }}>{pageName}</span>
                    </div>
                )}
            </div>

            <div className="desktop-nav__links">
                <Link
                    className="desktop-nav__link"
                    to="/catalogue"
                    style={{ color: useLight ? "var(--color-light)" : "var(--color-dark)" }}
                >
                    Catálogo
                </Link>
                <Link
                    className="desktop-nav__link"
                    to="/contact"
                    style={{ color: useLight ? "var(--color-light)" : "var(--color-dark)" }}
                >
                    Contáctanos
                </Link>
                <button
                    className="desktop-nav__theme-toggle"
                    onClick={toggleTheme}
                    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    style={{ color: useLight ? "var(--color-light)" : "var(--color-dark)" }}
                >
                    {theme === 'dark' ? <IoSunnyOutline /> : <IoMoonOutline />}
                </button>
                <button
                    className="desktop-nav__theme-toggle"
                    onClick={() => setIsPanelOpen(true)}
                    aria-label="Customize colors"
                    style={{ color: useLight ? "var(--color-light)" : "var(--color-dark)" }}
                >
                    <IoColorPaletteOutline />
                </button>
            </div>
            <ThemePanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
        </div>
    );
};

export default DesktopNav;
