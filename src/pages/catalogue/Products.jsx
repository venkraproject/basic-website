import { useParams } from "react-router-dom";

// Components
import Card from '../../components/card/Card'
import ComingSoon from '../ComingSoon'
import Error from '../Error'

// Data
import all_products from "../../data/products";
import categories from "../../data/categories";

const Products = (props) => { 

    const { categoryId } = useParams();
    const category = categories.find((category) => category.id === categoryId);

    if(category===undefined) {
        const message = `The category "${categoryId}" doesn't exist`
        return (
            <div key="error">
                <Error message={message}/>
            </div>
        )
    }

    const shownProducts = []
    if (!(category===undefined)) {
        all_products.forEach((product) => {
            if(product.category === category.id) {
                shownProducts.push(product)
            }
        })
    }
    const emptyCategory = !shownProducts.length ? "empty" : "hide";
    

    return (
        <div className="container" key="products">
            <div className="catalogue__products">
                {shownProducts.map((product) => {
                    return (
                        <div key={"product-key-"+product.id}>
                            <Card 
                                card_image_url={product.image}
                                card_title={product.name}
                                card_id={product.id}
                                card_destination={`/catalogue/${category.id}/${product.id}`}
                                card_description={`$${product.price.toLocaleString()}`}
                            />
                        </div>
                    );
                })}
            </div>
            <div className={emptyCategory}>
                <ComingSoon />
            </div>
        </div>
    );
};

export default Products;
