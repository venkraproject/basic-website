import CardGrid from "../../components/cardGrid/CardGrid";
import all_categories from "../../data/categories";

const Categories = () => {
    return (
        <section className="container">
            <CardGrid itemList={all_categories} />
        </section>
    );
};

export default Categories;
