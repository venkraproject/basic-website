import { Link } from "react-router-dom";
import LOGO from "../../../assets/logo-negro.png";
import "./mobile-header.css";

const MobileHeader = () => {
    return (
        <div className="mobile-header">
            <Link to="/">
                <img src={LOGO} alt="venkra-logo" />
            </Link>
        </div>
    );
};

export default MobileHeader;
