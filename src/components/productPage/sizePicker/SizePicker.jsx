import "./sizePicker.css";

const SizePicker = ({ sizes, setCurrentSize, currentSize }) => {
    function notAvailable(){
        alert('hola')
    }

    return (
        <div className="single_product-size_picker">
            <h5>Tamaños</h5>
            <p>Cantidad de unidades disponibles</p>
            <div className="size_options-container">
                {sizes.map((sizeOption, index) => {
                    return (
                        <button
                            onClick={() => {
                                if(sizeOption.amount > 0 ){
                                    setCurrentSize(sizeOption)
                                }
                            }}
                            className={
                                (sizeOption.amount>0 ? "size_option" : "size_unavailable").concat(
                                sizeOption.id === currentSize.id ? " active" : "")
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
