/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";
import Container from "../../Shared/Container";
import CategoryCell from "./CategoryCell";
import { categories } from "./categoriesData";

const Categories = () => {
    const [params, setParams] = useSearchParams();
    const category = params.get('category')
    console.log(category);
    return (
        <Container>
            <div className="pt-4 flex items-center justify-between overflow-x-auto">
                {categories.map(ctg =>
                    <CategoryCell
                        key={ctg.label}
                        label={ctg.label}
                        icon={ctg.icon}
                        selected={category === ctg.label}
                    ></CategoryCell>)}
            </div>
        </Container>
    );
};

export default Categories;