import Button from "../button/Button.jsx"
import { CartContext } from "../../context/CartContext.js"

import "./productcard.scss"
import { useContext } from "react"

export const ProductCard =  ({products}) => {

    const {id,name,imageUrl,price} = products
    const {addItemToCart} = useContext(CartContext)

    const addProduct = () => addItemToCart(products)
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