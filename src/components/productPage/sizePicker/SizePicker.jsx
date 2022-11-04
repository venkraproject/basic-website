import "./sizePicker.css";

const SizePicker = (props) => {
    const { sizes, setCurrentSize, currentSize } = props;

    return (
        <div className="single_product-size_picker">
            <h5>Tamaños</h5>
            <p>Cantidad de unidades disponibles</p>
            <div className="size_options-container">
                {sizes.map((sizeOption, index) => {
                    return (
                        <button
                            onClick={() => {
                                setCurrentSize(sizeOption);
                            }}
                            className={
                                sizeOption.id === currentSize.id
                                ? "size_option active" 
                                : "size_option"
                            }
                            key={sizeOption.id + index}
                        >
                            <h5>{sizeOption.name}</h5>
                            <p>{sizeOption.amount}</p>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default SizePicker;
