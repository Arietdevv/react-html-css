import React from "react";
import logo from "../../img/Group 190 (1).png";
import logo1 from "../../img/Frame 49.png";
import "./../../css/media.css";
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="head_img">
            <img src={logo} alt="img" />
            <h2>PRODUCT</h2>
          </div>
          <div className="head_txt">
            <h4>Product</h4>
            <h4>Customers</h4>
            <h4>Pricing</h4>
            <h4>Resources</h4>
            <button>Sign In</button>
            <button className="btn">Sign Up</button>
            <img src={logo1} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
