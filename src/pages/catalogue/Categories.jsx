import CardGrid from "../../components/cardGrid/CardGrid";

function Categories(props) {
    const { categories } = props

    return (
        <section className="container">
            <CardGrid itemList={categories} />
        </section>
    );
};

export default Categories;
