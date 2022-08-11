import React from "react";
import DesktopNav from './desktop-nav/DesktopNav'
import MobileNav from './mobile-nav/MobileNav'
import './nav.css'

const Nav = () => {
    return (
        <nav key="navbar">
            <MobileNav className='mobile-nav'/>
            <DesktopNav className='desktop-nav'/>
        </nav>
    );
};

export default Nav;
