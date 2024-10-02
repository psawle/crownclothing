import { useContext } from "react";

import { ProductContext } from "../../context/Product";
// import { ProductCard } from "../../components/productcard/ProductCard";

import "./shop.style.scss"
import { CategoryPreview } from "../../components/category-preview/CategoryPreview";

export const Shop = () => {

  const {products} = useContext(ProductContext)

  return (
    <>
      {Object.keys(products).map((title) => {
        const product = products[title]
        return <CategoryPreview key={title} title={title} products={product}/>
      })}
    </>
  );
};
