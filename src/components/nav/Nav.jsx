import { useLocation } from 'react-router-dom'
import DesktopNav from './desktop-nav/DesktopNav'
import MobileNav from './mobile-nav/MobileNav'
import './nav.css'

const Nav = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <>
            <nav key="navbar">
                <MobileNav className='mobile-nav'/>
                <DesktopNav className='desktop-nav'/>
            </nav>
            {/* Spacer for fixed desktop nav - hidden on homepage */}
            {!isHomePage && <div className="desktop-nav-spacer" />}
        </>
    );
};

export default Nav;
