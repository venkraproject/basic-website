import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./singleProduct.css";

// Components
import SingleProductSwiper from "../../components/productPage/productSwiper/ProductSwiper";
import ColorChooser from "../../components/productPage/colorPicker/ColorPicker";
import SizePicker from "../../components/productPage/sizePicker/SizePicker";

const SingleProduct = ({ allImages, products }) => {
    const { productId } = useParams();

    // Set state for color and size
    const [ product, setProduct ] = useState({
        id:"temp_id",
        name:"Loading",
        category:"loading",
        price:65000,
        description: "Loading",
        short_description:"$65.000",
        img_url:"https://i.postimg.cc/dV8jXLM6/c-t-shirt-P.jpg",
        xl:5,
        l:5,
        m:5,
        s:1,
        tallas:"{xl:5,xl:10,m:10,s:5}"
    })
    const [ allColors, setAllColors ] = useState([])
    const [ currentColor, setCurrentColor ] = useState();
    const [ currentSize, setCurrentSize ] = useState({
        id: "m",
        name: "M",
        amount: product.m,
    });
    const [ shownImages, setShownImages ] = useState([])

    useEffect(() => {
        if(products.length) {
            setProduct(products.find((product) => product.id === productId))
        }

        const productImages = allImages.filter(
            (image) => image.referencia === product.id
        )

        const currentImages = productImages.filter(
            (image) =>
                image.referencia === product.id && image.color === currentColor
        );
        setShownImages(currentImages)

        // Get product colors
        const colors = [...new Set(productImages.map((image) => image.color))];
        setAllColors(colors)
        if(!currentColor){
            setCurrentColor(colors[0])
        }
        
    }, [product, productId, products, allImages, currentColor])
    
    const sizes = [
        { id: "s", name: "S", amount: product.s },
        { id: "m", name: "M", amount: product.m },
        { id: "l", name: "L", amount: product.l },
        { id: "xl", name: "XL", amount: product.xl },
    ];

    const buyLink =
        "https://wa.me/+573044644001?text=Hola%2C%20estoy%20interesado%20en%20" +
        product.name +
        " (" +
        product.id +
        ")" +
        " en talla " +
        currentSize.name +
        " y color " +
        currentColor;

    return (
        <section className="section__product" key="singleProduct">
            <div className="single_product-left">
                <SingleProductSwiper shownImages={shownImages} />
            </div>
            <div className="single_product-right">
                <div>
                    <div className="single_product-title">
                        <div>{product.name} - Talla: {currentSize.name}</div>
                    </div>

                    <p>{product.description}</p>

                    <ColorChooser
                        allColors={allColors}
                        setCurrentColor={setCurrentColor}
                        currentColor={currentColor}
                    />

                    <SizePicker
                        sizes={sizes}
                        setCurrentSize={setCurrentSize}
                        currentSize={currentSize}
                    />
                </div>
                <div>
                    <div className="single_product-buy_section">
                        <div className="single_product-buy_price">
                            <h3>{product.short_description}</h3>
                        </div>
                        <a
                            href={buyLink}
                            target="_blank"
                            rel="noreferrer"
                            className="single_product-buy_button"
                        >
                            Compra ahora
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleProduct;
