import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoSunnyOutline, IoMoonOutline, IoColorPaletteOutline } from "react-icons/io5";
import { useTheme } from "../../../context/ThemeContext";
import ThemePanel from "../../theme-panel/ThemePanel";
import LOGO from "../../../assets/logo-negro.png";
import "./mobile-header.css";

const pageNames = {
    '/catalogue': 'Catálogo',
    '/contact': 'Contáctanos',
    '/about': 'Nosotros',
};

const MobileHeader = () => {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const basePath = '/' + location.pathname.split('/')[1];
    const pageName = pageNames[basePath];

    return (
        <div className="mobile-header">
            <div className="mobile-header__top">
                <Link to="/">
                    <img src={LOGO} alt="venkra-logo" />
                </Link>
                <div className="mobile-header__actions">
                    <button
                        className="mobile-header__theme-toggle"
                        onClick={toggleTheme}
                        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {theme === 'dark' ? <IoSunnyOutline /> : <IoMoonOutline />}
                    </button>
                    <button
                        className="mobile-header__theme-toggle"
                        onClick={() => setIsPanelOpen(true)}
                        aria-label="Customize colors"
                    >
                        <IoColorPaletteOutline />
                    </button>
                </div>
            </div>
            {pageName && <div className="mobile-header__page-name">{pageName}</div>}
            <ThemePanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
        </div>
    );
};

export default MobileHeader;
