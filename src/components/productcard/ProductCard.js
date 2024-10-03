import Button from "../button/Button.jsx"
import { CartContext } from "../../context/CartContext.js"

import "./productcard.scss"
import { useContext } from "react"

export const ProductCard =  ({product}) => {
    const {id,name,imageUrl,price} = product
    const {addItemToCart} = useContext(CartContext)

    const addProduct = () => addItemToCart(product)
    return (
        <div className="product-card-container" key={id}>
            <img src={imageUrl} alt="product"/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted" onClick={addProduct}>Add to Cart</Button>
        </div>
    )
}