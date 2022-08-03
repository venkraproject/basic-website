import { useParams } from "react-router-dom";
import { useState } from "react";
import "./singleProduct.css";

// Components
import SingleProductSwiper from "../../components/productPage/productSwiper/ProductSwiper";
import ColorChooser from "../../components/productPage/colorPicker/ColorPicker";
import SizePicker from "../../components/productPage/sizePicker/SizePicker";

// Data
import products from "../../data/products";
import productImages from "../../data/productImages";

const SingleProduct = () => {
    const { productId } = useParams();
    const product = products.find((product) => product.id === productId);

    // Get product images
    const allImages = productImages.filter(
        (image) => image.referencia === product.id
    );

    // Get product colors
    const allColors = [...new Set(allImages.map((image) => image.color))];

    // Set state for color and size
    const [currentColor, setCurrentColor] = useState(allColors[0]);
    const [currentSize, setCurrentSize] = useState({
        id: "m",
        name: "M",
        amount: product.m,
    });

    // Filter images per color
    const shownImages = allImages.filter(
        (image) =>
            image.referencia === product.id && image.color === currentColor
    );

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
                        <div>{product.name}</div>
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
                            <h3>${product.price.toLocaleString()}</h3>
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
