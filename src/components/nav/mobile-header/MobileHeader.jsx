import { Link, useLocation } from "react-router-dom";
import LOGO from "../../../assets/logo-negro.png";
import "./mobile-header.css";

const pageNames = {
    '/catalogue': 'Catálogo',
    '/contact': 'Contáctanos',
    '/about': 'Nosotros',
};

const MobileHeader = () => {
    const location = useLocation();
    const basePath = '/' + location.pathname.split('/')[1];
    const pageName = pageNames[basePath];

    return (
        <div className="mobile-header">
            <Link to="/">
                <img src={LOGO} alt="venkra-logo" />
            </Link>
            {pageName && <div className="mobile-header__page-name">{pageName}</div>}
        </div>
    );
};

export default MobileHeader;
