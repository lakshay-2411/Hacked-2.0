import React from "react";
import "./convener.css";
const coordinators = () => {
  return (
    <React.Fragment>
      <div className="parent-convener">
        <div className="convener-title">
          <img src="/images/rrr.webp" alt="" className="convener-logo" />
          <h1 className="convener-title-name">Coordinators</h1>
        </div>

        <div className="convener-container">
          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/bml-logo.png"
              alt="coordinatorimg1"
            />
            <h1 className="convener-name">Lorem Ipsum</h1>
            <h1 className="convener-position">Lorem ipsum dolor sit amet</h1>
          </div>
          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/bml-logo.png"
              alt="coordinatorimg2"
            />
            <h1 className="convener-name"> Lorem Ipsum</h1>
            <h1 className="convener-position">Lorem ipsum dolor sit amet</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default coordinators;
