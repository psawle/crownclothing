import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { ReactComponent as Crown } from "../../assets/crown.svg";

import { UserContext } from "../../context/Context";
import { CartContext } from "../../context/CartContext";
import { CartIcon } from "../cart-icon/CartIcon";
import { CartDropDown } from "../cart-dropdown/CartDropDown";

import "./navigation.style.scss";

export const Navigation = () => {
  const navigate = useNavigate();
  const {currentUser} = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)

  return (
    <>
      <nav className="navigation-container">
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
      </nav>
    </>
  );
};
