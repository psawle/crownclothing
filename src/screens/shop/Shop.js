import { Route, Routes } from "react-router-dom";
import { useContext } from "react";

import { ProductContext } from "../../context/Product";
import { ProductList } from "../product-list";
import { CategoriesItem } from "../categories-item";

import "./shop.style.scss"

export const Shop = () => {
  const {products} = useContext(ProductContext);

  return (
    <Routes>
    <Route index element={<ProductList key={products.title}  products={products}/>}></Route>
    <Route path=":category" element={<CategoriesItem key={products.title}  products={products}/>}></Route>
  </Routes>
  )
  
};
