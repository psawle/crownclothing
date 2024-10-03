import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { ProductContext } from "../../context/Product"
import { ProductCard } from "../../components"

import "./categories_item.scss"

export const CategoriesItem = () => {
    const {category} = useParams()
    const {products} = useContext(ProductContext)
    const [categoryList,setCateoryList] = useState([])
    console.log("cccccccat",category,"pppppprodt",products)
    useEffect(() => {
      setCateoryList(products[category])
    },[category,products])

    return (
        <div className="categoriesList-Container">
           {categoryList && categoryList.map((product) => <ProductCard key={product.id} product={product}/>)}
        </div>
    )
}