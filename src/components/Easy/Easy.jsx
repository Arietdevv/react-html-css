import React from "react";
import logo10 from "../../img/1.png";
import logo11 from "../../img/3.png";
import logo12 from "../../img/4.png";
import logo13 from "../../img/5.png";

const Easy = () => {
  return (
    <div id="easy">
      <div className="container">
        <div className="easy">
          <h1>Quick & Easy Process</h1>
          <p>
            Do you require some help for your project: Conception workshop,{" "}
            <br />
            prototyping, marketing strategy, landing page, Ux/UI?
          </p>
          <div className="easy_img">
            <img src={logo13} alt="" />
            <img src={logo12} alt="" />
          </div>
          <div className="img_easy">
            <img src={logo10} alt="" />
            <img src={logo11} alt="" />
          </div>
          <button>Contact our expert</button>
        </div>
      </div>
    </div>
  );
};

export default Easy;
