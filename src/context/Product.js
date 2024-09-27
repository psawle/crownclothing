import { createContext,useState } from "react";

import ShopData from "../utils/shop-data.json";

export const ProductContext = createContext({
    products:[],
})

export const ProductsProvider = ({children}) => {
    const [products , setProducts] = useState(ShopData);
    const value = {products}

    return(
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}