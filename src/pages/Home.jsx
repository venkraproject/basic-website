import React from "react";
import Categories from '../components/categories/Categories'
import Contact from '../components/contact/Contact'
import Header from '../components/header/Header'

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <h1>Catalogo</h1>
            <Categories />
            <Contact />
        </div>
    );
};

export default Home;
