import React from "react";
import { ReactComponent as LaunchLink } from "../../assets/link-launch.svg";
import "./sponsors.css";
import Contact from "./contact";
import Faqs from "./faqs";
import Convener from "./convener";
import Coordinators from "./coordinators";
const sponsors = () => {
  return (
    <React.Fragment>
      <div className="parent-sponsors">
        <h1 className="sponsors-title">
          Sponsors
          <img src="/images/rrr.webp" alt="arrow-logo" />
        </h1>
        <div className="sponsors-container">
          <div className="sponsors-border">
            <a href="https://www.codingblocks.com/" rel="noreferrer" target="_blank">
              <img src="/images/codingBlock.png" />
            </a>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a
                  href="https://www.codingblocks.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Coding Blocks
                </a>
              </h1>
            </div>
          </div>
          <div className="sponsors-border">
            <a href="https://unstop.com/" rel="noreferrer" target="_blank">
              <img src="/images/unstop.png" />
            </a>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a
                  href="https://unstop.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Unstop
                </a>
              </h1>
            </div>
          </div>
        </div>
        <Faqs />
        {<Contact /> }
        {<Convener />}
        {/*<Coordinators />*/}
      </div>
    </React.Fragment>
  );
};

export default sponsors;
