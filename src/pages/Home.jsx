import React from "react";
import Categories from '../components/categories/Categories'

const Home = () => {
    return (
        <div className="Home">
            <div className="header__container">
                <h1>HEADER</h1>
            </div>
            <h1>Catalogo</h1>
            <Categories />
            <h1>CONTACT</h1>
        </div>
    );
};

export default Home;
