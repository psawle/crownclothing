import { ProductCard } from "../productcard/ProductCard"

import "./category-preview.scss"


export const CategoryPreview = ({title,products}) => {
   
    return (
        <div className="category-preview-container">
            <h2>
                <span>{title}</span>
            </h2>
           <div className="preview">
                {products.filter((_,idx) => idx < 4).map((product) => {
                    return <ProductCard key={product.id} product={product}/>
                })}
            </div> 
        </div>
    )
} 