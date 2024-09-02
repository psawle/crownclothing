import { Link, useNavigate } from "react-router-dom";

import { ReactComponent as Crown } from "../../assets/crown.svg";
import "./navigation.style.scss";

export const Navigation = () => {
  const navigate = useNavigate();

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
          <li className="nav-items" onClick={() => navigate("/signup")}>SignUp</li>
          <li className="nav-items" onClick={() => navigate("/login")}>Login</li>
        </ul>
      </nav>
    </>
  );
};
