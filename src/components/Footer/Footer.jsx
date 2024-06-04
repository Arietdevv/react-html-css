import React from "react";

import logo from "../../img/Group 190 (1).png";
import logo23 from "../../img/Group 1340.png";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="fot_product">
            <img src={logo} alt="" />
            <h3>Product</h3>
            <div className="fon_icon">
              <img src={logo23} alt="img" />
              <img src={logo23} alt="img" />
              <img src={logo23} alt="img" />
            </div>
          </div>
          <div className="fot_resource">
            <h4>Resource</h4>
            <h5>About Us</h5>
            <h5>Blog</h5>
            <h5>Contact</h5>
            <h5>FAQ</h5>
          </div>
          <div className="fot_legal">
            <h4>Legal Stuff</h4>
            <h5>Disclaimer Us</h5>
            <h5>Financing</h5>
            <h5>Privacy Policy</h5>
            <h5>Terms of Service</h5>
          </div>
          <div className="fot_ener">
            <p>
              knowing you're always on <br /> the best energy deal.
            </p>
            <input type="text" />
            <div>
              <button>Sign up Now</button>
            </div>
          </div>
        </div>
      </div>
      <h2>Made With Love By Figmaland All Right Reserved </h2>
    </div>
  );
};

export default Footer;
