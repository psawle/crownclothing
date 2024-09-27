import { useContext } from "react"
import {ReactComponent as ShoppingCart} from "../../assets/shopping-bag.svg"

import { CartContext } from "../../context/CartContext"

import "./carticon.style.scss"

export const CartIcon = () => {
   const {isCartOpen,setIsCartOpen} = useContext(CartContext)
   console.log("cccc",isCartOpen);

   const toggleIsCartOpen = () => {
    console.log("toggle chal gaya")
    setIsCartOpen(!isCartOpen)
   }

    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingCart className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}