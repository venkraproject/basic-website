import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import "./catalogue.css";
import Header from "../../components/header/Header";

const CatalogueLayout = ({ categories }) => {
    const { categoryId } = useParams();
    const [menuOpen, setMenuOpen] = useState(false);

    const selectedCategory = categories.find(c => c.id === categoryId);

    return (
        <div className="catalogue__container" key="shared-catalohue">
            <Header sectionTitle="CATALOGO"/>
            <div className="catalogue__links-container">
                {/* Hamburger button - mobile only */}
                <button
                    className="catalogue__hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className={`catalogue__hamburger-icon ${menuOpen ? 'open' : ''}`}></span>
                    <span className="catalogue__hamburger-label">
                        {selectedCategory?.name || 'Categorías'}
                    </span>
                </button>

                {/* Desktop: always visible / Mobile: toggle */}
                <div className={`catalogue__links ${menuOpen ? 'open' : ''}`}>
                    {categories.map((category) => (
                        <Link
                            to={`/catalogue/${category.id}`}
                            key={category.id}
                            onClick={() => setMenuOpen(false)}
                        >
                            <div className={
                                categoryId === category.id
                                    ? "catalogue__selected-category"
                                    : "catalogue__non-selected-category"
                            }>
                                {category.name}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default CatalogueLayout;
