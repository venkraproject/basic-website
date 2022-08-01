import { Link, Outlet, useParams } from "react-router-dom";
import "./catalogueLayout.css";
import LOGO from "../../assets/logo-negro.png";

const CatalogueLayout = () => {
    const { categoryId } = useParams()
    let camisetas =
        categoryId === "camisetas"
            ? "shared-catalogue__selected-category"
            : "shared-catalogue__non-selected-category";
    let gorras =
        categoryId === "gorras"
            ? "shared-catalogue__selected-category"
            : "shared-catalogue__non-selected-category";
    let busos =
        categoryId === "busos"
            ? "shared-catalogue__selected-category"
            : "shared-catalogue__non-selected-category";

    return (
        <div className="shared-catalogue__container" key="shared-catalohue">
            <div className="shared-catalogue__banner">
                <img
                    className="shared-catalogue__banner-img"
                    src={LOGO}
                    alt="venkra logo"
                />
                <div className="shared-catalogue__title-container">
                    <div className="catalogue__title">CATALOGO</div>
                </div>
            </div>
            <div className="shared-catalogue__links-container">
                <div className="shared-catalogue__links">
                        <Link to="/catalogue/camisetas">
                    <div className={camisetas}>
                            Camisetas
                    </div>
                        </Link>
                        <Link to="/catalogue/gorras">
                    <div className={gorras}>
                            Gorras
                    </div>
                        </Link>
                        <Link to="/catalogue/busos">
                    <div className={busos}>
                            Busos
                    </div>
                        </Link>
                </div>
            </div>
            <Outlet onChange={() => alert("testing")} />
        </div>
    );
};

export default CatalogueLayout;
