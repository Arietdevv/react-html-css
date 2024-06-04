import React from "react";
import logo15 from "../../img/image.png";
import logo16 from "../../img/image (1).png";
import logo17 from "../../img/image (2).png";
import logo18 from "../../img/carosolt.png";

const Contents = () => {
  return (
    <div id="con">
      <div className="container">
        <div className="con">
          <h1>Contents Strategies</h1>
          <h6>
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </h6>
          <div className="block_con">
            <div className="con_block">
              <img src={logo15} alt="img" />
              <p>By Wahid Ari | 03 March 2019</p>
              <h3>
                Increasing Prosperity <br /> With Positive Thinking
              </h3>
            </div>
            <div className="con_block">
              <img src={logo16} alt="img" />
              <p>By Wahid Ari | 03 March 2019</p>
              <h3 className="mot">
                Motivation Is The First <br /> Step To Success
              </h3>
            </div>
            <div className="con_block">
              <img src={logo17} alt="img" />
              <p>By Wahid Ari | 03 March 2019</p>
              <h3>
                Increasing Prosperity <br /> With Positive Thinking
              </h3>
            </div>
          </div>
          <div className="con_pagin">
            <img src={logo18} alt="img" />
            <h4>Price Table</h4>
            <p>We offer competitive price</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
