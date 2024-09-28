

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';
import Button from '../button/Button';
import { CartItem } from '../cart-item/CartItem';

import './cart-dropdown.style.scss';

export const CartDropDown = () => {
  const { cartItems,isCartOpen,setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate()
  
  const handleCheckout = () => {
    setIsCartOpen(!isCartOpen)
    navigate('/checkout')
  }
  
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
      <Button onClick={handleCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};

// export default CartDropdown;