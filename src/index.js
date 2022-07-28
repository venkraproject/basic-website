import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/products/Products";
import Catalogue from "./pages/Catalogue";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import ScrollToTop from "./components/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <HashRouter>
        <ScrollToTop>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="catalogue" element={<Catalogue />} />
                    <Route path="products" element={<Products />} />
                    <Route path="products/:productId" element={<SingleProduct />}/>
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </ScrollToTop>
    </HashRouter>
);
