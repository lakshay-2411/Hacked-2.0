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
          Organised By
          <img src="/images/rrr.webp" alt="arrow-logo" />
        </h1>
        <div className="sponsors-container">
          <div className="sponsors-border">
            <a href="https://www.bmu.com/" rel="noreferrer" target="_blank">
              <img src="/images/bml-logo.png" />
            </a>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a
                  href="https://www.instagram.com/acm_bmu/"
                  rel="noreferrer"
                  target="_blank"
                >
                  ACM
                </a>
              </h1>
              <h1 className="sponsor-title">
                <a
                  href="https://www.instagram.com/scimat_bmu/"
                  rel="noreferrer"
                  target="_blank"
                >
                  SciMat
                </a>
              </h1>
              <h1 className="sponsor-title">
                <a
                  href="https://www.instagram.com/sata_bmu/"
                  rel="noreferrer"
                  target="_blank"
                >
                  SATA
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
