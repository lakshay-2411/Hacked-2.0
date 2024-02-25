import React from "react";
import "./convener.css";
import first from "../../assets/first.png"
import second from "../../assets/second.png"
import third from "../../assets/third.png"
import sparkle from "../../assets/sparkle.webp"
import { Height } from "@mui/icons-material";
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
                src={sparkle}
                alt="convenerimg"
                style={{height: '15rem', width: '15rem'}}
              />
              <h1 className="convener-name fourth"> All participants will get Hacked 2.0 certificates</h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default convener;
