import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-titles">
        <span className="header-title-lg">Wordie Blog</span>
      </div>
      <img
        className="header-img"
        src={require("../../assets/images/sky.jpg")}
        alt="header-img"
      />
    </div>
  );
};

export default Header;
