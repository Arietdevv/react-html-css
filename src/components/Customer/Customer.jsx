import React from "react";
import logo7 from "../../img/321.png";
import logo8 from "../../img/Group 13.png";

const Customer = () => {
  return (
    <div id="cus">
      <div className="container">
        <div className="cus">
          <img src={logo7} alt="" />
          <div className="cus_txt">
            <p>Easier decision making for</p>
            <h1>Customer Support</h1>
            <p>
              The Myspace page defines the individual, his or her <br />
              characteristics, traits, personal choices and the overall <br />
              personality of the person.
            </p>
            <div className="cus_block">
              <img src={logo8} alt="" />
              <p>
                Never worry about overpaying for your <br /> energy again.{" "}
              </p>
            </div>
            <div className="cus_block">
              <img src={logo8} alt="" />
              <p>
                Never worry about overpaying for your <br /> energy again.{" "}
              </p>
            </div>
            <div className="cus_block">
              <img src={logo8} alt="" />
              <p>
                Never worry about overpaying for your <br /> energy again.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
