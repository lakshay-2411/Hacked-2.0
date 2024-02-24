import React from "react";
import "./convener.css";
import first from "../../assets/first.png"
import second from "../../assets/second.png"
import third from "../../assets/third.png"
const convener = () => {
  return (
    <React.Fragment>
      <div className="parent-convener">
        <div className="convener-title">
          <img src="/images/rrr.webp" alt="" className="convener-logo" />
          <h1 className="convener-title-name">Prize</h1>
        </div>

      <div className="convener">
        <div className="convener-container">
          <div className="convener-card">
            <img
              className="convener-card-image"
              src={first}
              alt="convenerimg"
            />
            <h1 className="convener-name"> 25000/-</h1>
          </div>
        </div>  
        <div className="convener-container">
            <div className="convener-card">
              <img
                className="convener-card-image"
                src={second}
                alt="convenerimg"
              />
              <h1 className="convener-name"> 15000/-</h1>
            </div>
          </div>
          <div className="convener-container">
            <div className="convener-card">
              <img
                className="convener-card-image"
                src={third}
                alt="convenerimg"
              />
              <h1 className="convener-name"> 10000/-</h1>
            </div>
          </div>
          <div className="convener-container">
            <div className="convener-card">
              <img
                className="convener-card-image"
                src="/images/bml-logo.png"
                alt="convenerimg"
              />
              <h1 className="convener-name fourth">
                <ul>
                    <li>All participate will get Hacked 2.0 certificates</li>
                    <li>To all participants will have Wolfram | One for 30 days</li>
                </ul>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default convener;
