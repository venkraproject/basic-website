import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import Error from '../Error'
import CardGrid from "../../components/cardGrid/CardGrid";

const Products = ({ allProducts, categories }) => {

    const { categoryId } = useParams();

    const [ category, setCategory ] = useState('')
    const [ filteredProducts, setFilteredProducts ] = useState([])

    useEffect(() => {
        let currentCategory = ''
        if (categories.length) {
            currentCategory = categories.find((tempCat) => tempCat.id === categoryId)
            setCategory(currentCategory)
        }
        if (currentCategory && currentCategory.id) {
            const filteredTemp = allProducts.filter(prod => prod.category===currentCategory.id)
            setFilteredProducts(filteredTemp)
        }
    }, [ categoryId, allProducts, categories ])
    
    // Check if category exists
    if(category===undefined) {
        return <Error message={`The category "${categoryId}" doesn't exist`}/>
    }

    return (
        <div className="container" key="products">
            <CardGrid destinationParent={category.id+"/"} itemList={filteredProducts}/>
            <div className={category==='' ? '' : "hide"}>
                <h2>Cargando, por favor espera...</h2>
            </div>
            {/* <div className={filteredProducts && !filteredProducts.length ? "" : "hide"}>
                <ComingSoon />
            </div> */}
        </div>
    );
};

export default Products;
