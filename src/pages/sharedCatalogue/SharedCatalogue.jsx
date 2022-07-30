import { Link, Outlet, useLocation  } from "react-router-dom";
import './sharedCatalogue.css'
import LOGO from '../../assets/logo-negro.png'

const Catalogue = () => {

    const category = new URLSearchParams( useLocation().search ).get('category');
    let camisetas = category==="camisetas" ? "shared-catalogue__selected-category" : "shared-catalogue__non-selected-category";
    let gorras = category==="gorras" ? "shared-catalogue__selected-category" : "shared-catalogue__non-selected-category";
    let busos = category=="busos" ? "shared-catalogue__selected-category" : "shared-catalogue__non-selected-category";

    return (
        <div className="shared-catalogue__container">
            <div className="shared-catalogue__content">
                <Link to="/catalogue">
                    <div className="shared-catalogue__banner">
                        <img className="shared-catalogue__banner-img" src={LOGO} alt="venkra logo" />
                        <div className="shared-catalogue__title-container">
                            <div className="catalogue__title">
                                CATALOGO
                            </div>
                        </div>
                    </div>
                </Link>
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