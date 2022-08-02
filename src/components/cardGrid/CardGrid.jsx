import React from "react";
import Card from "../card/Card";
import "./cardGrid.css";

const CardGrid = (props) => {
    const { itemList, destinationParent = "" } = props;
    return (
        <div className="card_grid">
            {itemList.map((item) => {
                return (
                    <div key={"item-key-" + item.id}>
                        <Card
                            card_image_url={item.image}
                            card_title={item.name}
                            card_id={item.id}
                            card_destination={`/catalogue/${destinationParent}${item.id}`}
                            card_short_description={
                                item.price === undefined
                                    ? ""
                                    : item.short_description
                            }
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default CardGrid;
