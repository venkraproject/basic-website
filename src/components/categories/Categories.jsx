import { Link } from "react-router-dom";
import pCategories from "../../data/categories";
import './categories.css'

const Categories = () => {
    return (
        <section className="container">
            <h2>Catalogue</h2>
            <div className="products">
                <div className="catalogue__products">
                    {pCategories.map((pCategory) => {
                        return (
                            <Link to={`/products?category=${pCategory.id}`} className="catalogue__product">
                                <div className="catalogue__product-image">
                                    <img src={pCategory.image} alt={pCategory.name}/>
                                </div>
                                <h3>{pCategory.name}</h3>
                                <p>Descripcion</p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Categories;
