import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { ReactComponent as Crown } from "../../assets/crown.svg";

import { UserContext } from "../../context/Context";
import { CartContext } from "../../context/CartContext";
import { CartIcon } from "../cart-icon/CartIcon";
import { CartDropDown } from "../cart-dropdown/CartDropDown";

import {NavigationContainer, LinkContainer, NavItemContainer, NavItems} from "./navigation.style.jsx";

export const Navigation = () => {
  const navigate = useNavigate();
  const {currentUser} = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)

  return (
    <>
      {/* <div className="navigation-container">
        <div className="nav-logo">
          <Link className="logi" to="/">
            <Crown />
          </Link>
        </div>
        <ul className="nav-item-container">
          <li className="nav-items" onClick={() => navigate("/shop")}>
            Shop
          </li>
          <li className="nav-items" onClick={() => navigate("/contact")}>
            Contact
          </li>
          {currentUser ? <li className="nav-items" onClick={() => navigate("/")}>SignOut</li> : <li className="nav-items" onClick={() => navigate("/signin")}>SignIn</li>}
          <li className="nav-items"><CartIcon/></li>
        </ul>
        {isCartOpen && <CartDropDown/>}
      </div> */}
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
