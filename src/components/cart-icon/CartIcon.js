import { useContext } from "react"
import {ReactComponent as ShoppingCart} from "../../assets/shopping-bag.svg"

import { CartContext } from "../../context/CartContext"

import "./carticon.style.scss"

export const CartIcon = () => {
   const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext)

   const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen)
   }

    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingCart className="shopping-icon"/>
            <span className="item-count">{cartCount}</span>
        </div>
    )
}