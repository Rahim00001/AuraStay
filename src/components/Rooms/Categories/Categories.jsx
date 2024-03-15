import Container from "../../Shared/Container";
import CategoryCell from "./CategoryCell";
import { categories } from "./categoriesData";

const Categories = () => {
    return (
        <Container>
            <div className="pt-4 flex items-center justify-between overflow-x-auto">
                {categories.map(category => <CategoryCell key={category.label} category={category}></CategoryCell>)}
            </div>
        </Container>
    );
};

export default Categories;