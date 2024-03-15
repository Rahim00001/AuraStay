/* eslint-disable react/prop-types */

const CategoryCell = ({ category }) => {
    console.log(category);
    return (
        <div className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer">
            <category.icon size={26} />
            <div className="text-sm font-medium">
                {category.label}
            </div>
        </div>
    );
};

export default CategoryCell;