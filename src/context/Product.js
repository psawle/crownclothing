import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/Firebase";
// import { addCollectionsAndDocument, getCategoriesAndDocuments } from "../utils/firebase/Firebase";

// import SHOP_DATA from "../utils/shop-data";

export const ProductContext = createContext({
  products: {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({});
    
    useEffect(() => {
        const getCategoriesMap = async () => {
            const getcategories = await getCategoriesAndDocuments();
            setProducts(getcategories)
        };
        
        getCategoriesMap();
    }, []);
    
    const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
