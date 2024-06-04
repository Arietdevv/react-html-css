import React from "react";

const Free = () => {
  return (
    <div id="free">
      <div className="container">
        <div className="free">
          <div className="free_block">
            <div className="block_free">
              <h3>Free</h3>
              <p>Brief price description</p>
              <div className="free_price">
                <h1>0</h1>
                <div className="price_free">
                  <h5>$</h5>
                  <h6>Per / month </h6>
                </div>
              </div>
              <p>Only 2 Operators</p>
              <p>Notifications</p>
              <p>Landing Pages</p>
              <button>Order Now</button>
            </div>
            <div className="block_free2">
              <h3>Standard</h3>
              <p>Brief price description</p>
              <div className="free_price2">
                <h1>5</h1>
                <div className="price_free2">
                  <h5>$</h5>
                  <h6>Per / month </h6>
                </div>
              </div>
              <p>5+ Operators</p>
              <p>Notifications</p>
              <p>Landing Pages</p>
              <button>Order Now</button>
            </div>
            <div className="block_free">
              <h3>Premium</h3>
              <p>Brief price description</p>
              <div className="free_price">
                <h1>10</h1>
                <div className="price_free">
                  <h5>$</h5>
                  <h6>Per / month </h6>
                </div>
              </div>
              <p>10+ Operators</p>
              <p>Notifications</p>
              <p>Landing Pages</p>
              <button>Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Free;
