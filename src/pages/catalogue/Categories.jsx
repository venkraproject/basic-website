// import './categories.css'
import Card from '../../components/card/Card'
import pCategories from "../../data/categories";
import './categories.css'

const Catalogue = () => {
    return (
        <>
            <section className="container">
                <div className="products">
                    <div className="catalogue__products">
                        {pCategories.map((pCategory) => {
                            return (
                                <div key={"category-key-"+pCategory.id}>
                                    <Card
                                        card_image_url={pCategory.image}
                                        card_title={pCategory.name}
                                        card_id={pCategory.id}
                                        card_destination={`/catalogue/${pCategory.id}`}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Catalogue;
