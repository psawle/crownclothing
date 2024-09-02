import { Category } from "../category-item/Category";
import "./directory.style.scss";

export const Directory = ({categories}) => {
  console.log("categ",categories)
  return (
    <>
    <div className="categories-container">
      {categories.categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
    </>
  );
};
