import { useContext } from "react";

import { ProductContext } from "../../context/Product";
import { ProductCard } from "../../components/productcard/ProductCard";

import "./shop.style.scss"

export const Shop = () => {

  const {products} = useContext(ProductContext)
  console.log("products array ",products)

  return (
    <div className="products-container">
      {products.map((products) => {
        return <ProductCard products={products}/> 
      })}
    </div>
  );
};
