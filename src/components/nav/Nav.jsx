import { useLocation } from 'react-router-dom'
import DesktopNav from './desktop-nav/DesktopNav'
import MobileNav from './mobile-nav/MobileNav'
import MobileHeader from './mobile-header/MobileHeader'
import './nav.css'

const Nav = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <>
            {/* Mobile header - only visible on mobile, hidden on homepage */}
            {!isHomePage && <MobileHeader />}

            <nav key="navbar">
                <MobileNav />
                <DesktopNav />
            </nav>

            {/* Spacer for fixed desktop nav - only on desktop, not on homepage */}
            {!isHomePage && <div className="desktop-nav-spacer" />}
        </>
    );
};

export default Nav;
