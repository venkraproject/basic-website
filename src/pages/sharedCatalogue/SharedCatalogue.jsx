import { Link, Outlet, useLocation  } from "react-router-dom";
import './sharedCatalogue.css'

const Catalogue = () => {

    const category = new URLSearchParams( useLocation().search ).get('category');
    let camisetas = category==="camisetas" ? "shared-catalogue__selected-category" : "shared-catalogue__non-selected-category";
    let gorras = category==="gorras" ? "shared-catalogue__selected-category" : "shared-catalogue__non-selected-category";
    let busos = category=="busos" ? "shared-catalogue__selected-category" : "shared-catalogue__non-selected-category";
    let general_catalogue = category=="none" ? "catalogue__title shared-catalogue__selected-category" : "catalogue__title shared-catalogue__non-selected-category";

    return (
        <div className="shared-catalogue__container">
            <div className="shared-catalogue__content">
                <div className="shared-catalogue__title-container">
                    <div className={general_catalogue}>
                        <Link to="/catalogue?category=none">
                            CATALOGO
                        </Link>
                    </div>
                </div>
                <div className="shared-catalogue__links-container">
                    <div className="shared-catalogue__links">
                        <div className={camisetas}>
                            <Link to="/catalogue/products?category=camisetas">
                                Camisetas
                            </Link>
                        </div>
                        <div className={gorras}>
                            <Link to="/catalogue/products?category=gorras">
                                Gorras
                            </Link>
                        </div>
                        <div className={busos}>
                            <Link to="/catalogue/products?category=busos">
                                Busos
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet onChange={() => alert('testing')}/>
        </div>
    );
};

export default Catalogue;