import "./TopBar.css";
import { NavLink, Link } from "react-router-dom";

const TopBar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="top-left">
        <i className="top-icon fa-brands fa-twitter-square"></i>
        <i className="top-icon fa-brands fa-facebook-square"></i>
        <i className="top-icon fa-brands fa-instagram-square"></i>
      </div>

      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>
          <li className="top-list-item">
            <NavLink className="link" to="/about">
              About
            </NavLink>
          </li>
          <li className="top-list-item">
            <NavLink className="link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="top-list-item">
            <NavLink className="link" to="/write">
              Write
            </NavLink>
          </li>
          <li className="top-list-item">
            <NavLink className="link" to="/logout">
              {user && "Logout"}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
            <img
              className="top-img"
              src={require("../../assets/images/oty.jpg")}
              alt="profile-img"
            />
        ) : (
          <ul className="top-list">
            <li className="top-list-item">
              <NavLink className="link" to="/register">
                Register
              </NavLink>
            </li>
            <li className="top-list-item">
              <NavLink className="link" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        )}
        <i class="search-icon fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;
