import { ProductCard } from "../productcard/ProductCard"

import "./category-preview.scss"


export const CategoryPreview = ({title,products}) => {
    //   const productToPreview = products.filter((_,idx) => idx < 4)
   
    return (
        <div className="category-preview-container">
            <h2>
                <span>{title}</span>
            </h2>
           <div className="preview">
                {products.filter((_,idx) => idx < 4).map((product,title) => {
                    console.log("isdindnd",product)
                    return <ProductCard key={product.id} product={product}/>
                })}
            </div> 
        </div>
    )
} 