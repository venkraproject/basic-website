import { Link } from "react-router-dom";
import './card.css'

const Card = (props) => {
    let image_url = props.card_image_url;
    let card_title = props.card_title;
    let card_id = props.card_id;
    let card_destination = props.card_destination;
    let card_short_description = props.card_short_description;
    let card_key = "card-" + card_id;

    return (
        <Link className="card-container" to={card_destination} key={card_key}>
            <div className="card_image-container">
                <img className="card_image" src={image_url} alt={card_id} />
            </div>
            <div className="card_description-container">{card_short_description}</div>
            <div className="card_title-container">{card_title}</div>
        </Link>
    );
};

export default Card;
