import React from "react";
import Catalogue from './catalogue/Categories'
import Contact from '../components/contact/Contact'
import Header from '../components/header/Header'

const Home = () => {
    return (
        <div className="Home" key="home">
            <Header />
            <div className="contact-center">
                Catalogo
            </div>
            <Catalogue />
            <Contact />
        </div>
    );
};

export default Home;
