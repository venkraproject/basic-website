import { useParams } from "react-router-dom";

// Components
import ComingSoon from '../ComingSoon'
import Error from '../Error'
import CardGrid from "../../components/cardGrid/CardGrid";

// Data
import all_products from "../../data/products";
import categories from "../../data/categories";

const Products = (props) => { 
    // Get Category from url parameters
    const { categoryId } = useParams();
    const category = categories.find((category) => category.id === categoryId);

    // Check if category exists
    if(category===undefined) {
        return (
            <div key="error">
                <Error message={`The category "${categoryId}" doesn't exist`}/>
            </div>
        )
    }

    // Get category products
    const shownProducts = all_products.filter((product) => 
        product.category === category.id
    )
    const emptyCategory = !shownProducts.length ? "" : "hide";
    

    return (
        <div className="container" key="products">
            <CardGrid destinationParent={category.id+"/"} itemList={shownProducts}/>
            <div className={emptyCategory}>
                <ComingSoon />
            </div>
        </div>
    );
};

export default Products;
