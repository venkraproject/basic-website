import { Link, Outlet } from "react-router-dom";
import './sharedCatalogue.css'

const Catalogue = () => {
    return (
        <div className="shared-catalogue__container">
            <Link to="/catalogue" className="catalogue__title">
                <h2>CATALOGO</h2>
            </Link>
            <div className="shared-catalogue__links">
                <div>

                    <Link to="/catalogue/products?category=camisetas">
                        Camisetas
                    </Link>
                </div>
                <Link to="/catalogue/products?category=gorras">
                    Gorras
                </Link>
                <Link to="/catalogue/products?category=busos">
                    Busos
                </Link>
            </div>


            <Outlet onChange={() => alert('testing')}/>
        </div>
    );
};

export default Catalogue;