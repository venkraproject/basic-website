import React from "react";
import Categories from '../components/categories/Categories'
import Contact from '../components/contact/Contact'
import Header from '../components/header/Header'

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <div className="contact-center">
                Catalogo
            </div>
            <Categories />
            <Contact />
        </div>
    );
};

export default Home;
