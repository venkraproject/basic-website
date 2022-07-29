import { Link, useLocation } from "react-router-dom";
import all_products from "../../data/products";
import './products.css'

const Products = (props) => {    
    console.log(props)

    const category = new URLSearchParams( useLocation().search ).get('category');

    const products = []
    all_products.forEach((product) => {
        if(product.category === category) {
            products.push(product)
        }
    })

    return (
        <div className="container">
            <div className="catalogue__products">
                {products.map((product) => {
                    return (
                        <Link key={product.id} to={`/catalogue/products/${product.id}?category=${category}`} className="catalogue__product">
                            <div className="catalogue__product-image">
                                <img src={product.image} alt={product.name}/>
                            </div>
                            <h3>{product.name}</h3>
                            <p>${product.price.toLocaleString()}</p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Products;
