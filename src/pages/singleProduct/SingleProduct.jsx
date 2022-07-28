import { Link, useParams, useLocation } from "react-router-dom";
import products from "../../data/products";
import categories from '../../data/categories';

const SingleProduct = () => {
    const { productId } = useParams();
    const product = products.find((product) => product.id === productId);

    const currentCategory = categories.find((cat) => cat.id === product.category);
    
    const searchParams = new URLSearchParams( useLocation().search );

    return (
        <section className="section product">
            <h2>{product.name}</h2>
            <Link to='/catalogue'>Catálogo</Link>
            <Link to={`/products?category=${product.category}`}>{currentCategory.name}</Link>
            <br />
            <img src={product.image} alt={product.name} width='300px'/>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <h3>Tallas Disponibles:</h3>
            XL:{product.xl} <br/>
            L:{product.l} <br/>
            M:{product.m} <br/>
            S:{product.s} <br/>
            <p>{product.colores_temp}</p>
            <p>{searchParams.get('intento')}</p>
        </section>
    );
};

export default SingleProduct;
