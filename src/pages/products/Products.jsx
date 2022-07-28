import { Link, useLocation } from "react-router-dom";
import all_products from "../../data/products";
import categories from '../../data/categories'
import './products.css'

const Products = () => {    
    const category = new URLSearchParams( useLocation().search ).get('category');
    console.log(category)

    const currentCategory = categories.find((cat) => cat.id === category);

    const products = []
    all_products.forEach((product) => {
        if(product.category === category) {
            products.push(product)
        }
    })
    console.log(products)

    return (
        <section className="container">
            <h2>{currentCategory.name}</h2>
            <div className="catalogue__products">
                {products.map((product) => {
                    return (
                        <Link to={`/products/${product.id}`} className="catalogue__product">
                            <h5>{product.name}</h5>
                            <div className="catalogue__product-image">
                                <img src={product.image} alt={product.name}/>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default Products;
