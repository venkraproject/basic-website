import { HashRouter, Routes, Route } from "react-router-dom";

import AppUI from './AppUI'
import About from "../pages/About";
import Home from "../pages/home/Home";
import Products from "../pages/catalogue/Products";
import Categories from "../pages/catalogue/Categories";
import Catalogue from "../pages/catalogue/Catalogue";
import SingleProduct from "../pages/catalogue/SingleProduct";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import ScrollToTop from "../components/ScrollToTop";
import { DataFetch } from "../data/DataFetching";
import { useState, useEffect } from "react";

export default function App() {

    const [ allProducts, setAllProducts ] = useState([])
    const [ allImages, setAllImages ] = useState([])
    const [ categories, setCategories ] = useState([])

    useEffect(() => {
        DataFetch('categories', setCategories )
        DataFetch('products', setAllProducts )
        DataFetch('images', setAllImages )
    }, [])

    return (
        <HashRouter>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<AppUI />}>
                        <Route index element={<Home categories={categories}/>} />
                        <Route path="about" element={<About />} />
                        <Route path="catalogue" element={<Catalogue />}>
                            <Route index element={<Categories categories={categories}/>} />
                            <Route path=":categoryId" element={<Products 
                                allProducts={allProducts} 
                                categories={categories}/>} />
                                
                        <Route path=":categoryId/:productId" element={<SingleProduct allImages={allImages} products={allProducts}/>}/>
                            <Route path="*" element={<Error />} />
                        </Route>
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<Error />} />
                    </Route>
                </Routes>
            </ScrollToTop>
        </HashRouter>
    );
}