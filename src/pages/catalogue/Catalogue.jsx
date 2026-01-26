import { Link, Outlet, useParams } from "react-router-dom";
import "./catalogue.css";
import Header from "../../components/header/Header";

const CatalogueLayout = () => {
    const { categoryId } = useParams()
    let camisetas =
        categoryId === "camisetas"
            ? "catalogue__selected-category"
            : "catalogue__non-selected-category";
    let gorras =
        categoryId === "gorras"
            ? "catalogue__selected-category"
            : "catalogue__non-selected-category";
    let busos =
        categoryId === "busos_y_hoodies"
            ? "catalogue__selected-category"
            : "catalogue__non-selected-category";

    return (
        <div className="catalogue__container" key="shared-catalohue">
            <Header sectionTitle="CATALOGO"/>
            <div className="catalogue__links-container">
                <div className="catalogue__links">
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
                        <Link to="/catalogue/busos_y_hoodie">
                    <div className={busos}>
                            Busos y Hoodie
                    </div>
                        </Link>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default CatalogueLayout;
