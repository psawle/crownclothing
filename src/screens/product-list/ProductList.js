

import { useContext } from "react";

import { ProductContext } from "../../context/Product";
import { CategoryPreview } from "../../components";

export const ProductList = () => {

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
