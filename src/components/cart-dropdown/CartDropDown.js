// import { useContext } from "react"

// import Button from "../button/Button"
// import { CartContext } from "../../context/CartContext"
// import { CartItem } from "../cart-item/CartItem"

// import "./cart-dropdown.style.scss"

// export const CartDropDown = () => {
//     const {cartItems } = useContext(CartContext)
//     console.log("cartitems inside dropdown file",cartItems)
//     return (
//         <div className="cart-dropdown-container">
//             <div className="cart-items">
//                  {cartItems.map((item) => <CartItem item={item}/>)} 
//             </div>
//             <Button >Go to checkout</Button>
//         </div>
//     )
// }

import { useContext } from 'react';

import { CartContext } from '../../context/CartContext';

import Button from '../button/Button';
import { CartItem } from '../cart-item/CartItem';

import './cart-dropdown.style.scss';

export const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

// export default CartDropdown;