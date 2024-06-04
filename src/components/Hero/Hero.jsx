import React from "react";
import logo3 from "../../img/Triangle Copy 6 (1).png";
import logo4 from "../../img/amico.png";
const Hero = () => {
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero_txt">
            <h1>
              Work at the speed <br />
              of thought
            </h1>
            <p>
              Tools, tutorials, design and innovation experts, all <br /> in one
              place! The most intuitive way to imagine <br /> your next user
              experience.
            </p>
            <div className="hero_btn">
              <button>Get started</button>
              <div className="hero_img">
                <img src={logo3} alt="img" />
                <a href="#">Watch the Video</a>
              </div>
            </div>
          </div>
          <img src={logo4} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
