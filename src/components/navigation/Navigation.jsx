
import { useContext } from "react";

import { ReactComponent as Crown } from "../../assets/crown.svg";

import { UserContext } from "../../context/Context";
import { CartContext } from "../../context/CartContext";
import { CartIcon } from "../cart-icon/CartIcon";
import { CartDropDown } from "../cart-dropdown/CartDropDown";

import {NavigationContainer, LinkContainer, NavItemContainer, NavItems} from "./navigation.style.jsx";

export const Navigation = () => {
  const {currentUser} = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)

  return (
    <>
      <NavigationContainer>
          <LinkContainer  to="/">
            <Crown />
          </LinkContainer>
          <NavItemContainer>
          <NavItems to="/shop">
            Shop
          </NavItems>
          <NavItems to="/contact">
            Contact
          </NavItems>
          {currentUser ? <NavItems as ='span' to="/signout">SignOut</NavItems> : <NavItems to="/signin">SignIn</NavItems>}
          <NavItems><CartIcon/></NavItems>
        </NavItemContainer>
        {isCartOpen && <CartDropDown/>}
      </NavigationContainer>
    </>
  );
};
