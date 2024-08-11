import React from "react";
import "./Header.css";
import { FaPhone, FaClock, FaBars } from "react-icons/fa";
import Logo from "../../Assets/Images/restaurant_image.png";

const Header = () => {
  return (
    <div className="header">
      <div className="sub__header">
        <div className="sub__header__left">
          <div>
            <FaClock /> 7:30AM - 9:30PM
          </div>
          <div>
            <FaPhone /> +880 1630 225 015
          </div>
        </div>
        <div className="sub__header__right">Register</div>
      </div>
      <div className="main__header">
        <div className="main__header__left">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <div className="main__header__right">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
          <span>Blog</span>
          <span>
            <FaBars className="menu" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
