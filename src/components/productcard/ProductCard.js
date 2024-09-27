import Button from "../button/Button.jsx"

import "./productcard.scss"

export const ProductCard =  ({products}) => {

    const {id,name,imageUrl,price} = products
    console.log("image url", imageUrl)
    return (
        <div className="product-card-container" key={id}>
            <img src={imageUrl} alt="product"/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted" >Add to Cart</Button>
        </div>
    )
}