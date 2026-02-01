import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./singleProduct.css";
import socialLinks from "../../config/socialLinks";

// Components
import SingleProductSwiper from "../../components/productPage/productSwiper/ProductSwiper";
import ColorChooser from "../../components/productPage/colorPicker/ColorPicker";
import SizePicker from "../../components/productPage/sizePicker/SizePicker";

const SingleProduct = ({ allImages, products }) => {
    const { productId } = useParams();

    const [ product, setProduct ] = useState(null)
    const [ allColors, setAllColors ] = useState([])
    const [ currentColor, setCurrentColor ] = useState();
    const [ currentSize, setCurrentSize ] = useState({});
    const [ shownImages, setShownImages ] = useState([])

    useEffect(() => {
        if(products.length) {
            setProduct(products.find((p) => p.id === productId))
        }
    }, [productId, products])

    useEffect(() => {
        if (!product) return

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

    }, [product, allImages, currentColor])

    if (!product) {
        return (
            <section className="section__product" key="singleProduct">
                <p>Cargando...</p>
            </section>
        )
    }

    const sizes = [
        { id: "s", name: "S", amount: product.s },
        { id: "m", name: "M", amount: product.m },
        { id: "l", name: "L", amount: product.l },
        { id: "xl", name: "XL", amount: product.xl },
    ];

    const buyLink =
        `https://wa.me/message/QOKZX3EJBF7UD1${socialLinks.whatsapp.url}?text=Hola%2C%20estoy%20interesado%20en%20` +
        product.name +
        " (" +
        product.id +
        ")" +
        " en talla " +
        currentSize.name +
        " y color " +
        currentColor;

    function buyButton(){
        if(currentSize.name){
            return(
                <a
                    href={buyLink}
                    target="_blank"
                    rel="noreferrer"
                    className="single_product-buy_button"
                >
                    Compra ahora
                </a>
            )
        } else {
            return(
                <button
                    type="button"
                    className="single_product-buy_button"
                    onClick={sizeAlert}
                >
                    Compra ahora
                </button>
            )
        }
    }

    function sizeAlert(){
        alert('Porfavor selecciona tu talla')
    }

    return (
        <section className="section__product" key="singleProduct">
            <div className="single_product-left">
                <SingleProductSwiper shownImages={shownImages} />
            </div>
            <div className="single_product-right">
                <div>
                    <div className="single_product-title">
                        <div>{product.name}{currentSize.name? " - Talla: " + currentSize.name:""}</div>
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

                        {buyButton()}
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleProduct;
