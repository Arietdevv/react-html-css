import React from "react";
import logo20 from "../../img/Group 204.png";
import logo21 from "../../img/Group 205.png";
const Clien = () => {
  return (
    <div id="cli">
      <div className="container">
        <div className="cli">
          <h1>What Clients Say</h1>
          <h5>
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics
          </h5>
          <div className="cli_block">
            <div className="block_cli">
              <img src={logo20} alt="img" />
              <p>
                Product helps you see how many <br /> more days you need to work
                to <br /> reach your financial goal.
              </p>
              <img src={logo21} alt="img" />
            </div>
            <div className="block_cli">
              <img src={logo20} alt="img" />
              <p>
                Product helps you see how many <br /> more days you need to work
                to <br /> reach your financial goal.
              </p>
              <img src={logo21} alt="img" />
            </div>
            <div className="block_cli">
              <img src={logo20} alt="img" />
              <p>
                Product helps you see how many <br /> more days you need to work
                to <br /> reach your financial goal.
              </p>
              <img src={logo21} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clien;
