import React from "react";
import logo5 from "../../img/icon bd.png";

const Specifically = () => {
  return (
    <div id="spec">
      <div className="container">
        <div className="spec">
          <h1>
            Product was Built Specifically <br />
            for You
          </h1>
          <div className="spec_block">
            <div className="block_spec">
              <img src={logo5} alt="img" />
              <div className="block_txt">
                <h3>First click tests</h3>
                <p>
                  While most people enjoy <br /> casino gambling
                </p>
              </div>
            </div>
            <div className="block_spec">
              <img src={logo5} alt="img" />
              <div className="block_txt">
                <h3>Design surveys</h3>
                <p>
                  Sports betting, lottery and <br /> bingo playing for the fun
                </p>
              </div>
            </div>
            <div className="block_spec">
              <img src={logo5} alt="img" />
              <div className="block_txt">
                <h3>Preference tests</h3>
                <p>
                  The Myspace page defines <br /> the individual.
                </p>
              </div>
            </div>
            <div className="block_spec">
              <img src={logo5} alt="img" />
              <div className="block_txt">
                <h3>Five second tests</h3>
                <p>
                  Personal choices and the <br /> overall personality of the
                  <br />
                  person.
                </p>
              </div>
            </div>
          </div>
          <button>SIGN UP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Specifically;
