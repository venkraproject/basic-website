import React from "react";
import "./colorPicker.css";

const ColorPicker = (props) => {
    const { allColors, setCurrentColor, currentColor } = props;

    return (
        <div className="single_product-color_picker">
            <h5>Elige tu color</h5>
            <p>Pregúntanos por disponibilidad</p>
            <div className="color_chooser-container">
                <div className="color_chooser-grid">
                    {allColors.map((color) => {
                        return (
                            <button
                                style={{ background: color }}
                                onClick={() => {
                                    setCurrentColor(color);
                                }}
                                className={
                                    currentColor === color
                                        ? "color_option active"
                                        : "color_option"
                                }
                                key={color}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ColorPicker;
