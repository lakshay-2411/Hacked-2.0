import React from "react";
import PhoneBluetoothSpeakerIcon from "@mui/icons-material/PhoneBluetoothSpeaker";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import "./contact.css";
import { ReactComponent as DiscordContact } from "../../assets/discord.svg";
import img_gaurangi from "../../assets/Gaurangi.jpg";
import img_aditya from "../../assets/Aditya.jpg";
import ReactGA from "react-ga";

const contact = () => {
  const handlecontactOptions = (card) => {
    document.querySelector(card).classList.toggle("contact-card-flip");
  };

  const handleLaunch = (target) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "Contact Option",
    });
    const rocket = document.querySelector(`#${target}`);
    rocket.classList.toggle("contact-card-launch");
  };
  return (
    <React.Fragment>
      <div id="contact" className="parent-contact">
        <div className="contact-title">
          <img src="/images/rrr.webp" alt="arrow-logo" />
          Contacts
        </div>
        <div className="parent-container">
          {/* -----------------------------------------Contact 1 ------------------------------------------- */}
          <div>
            <div className="contact-container">
              <div className="contact-card">
                <div className="contact-card-front">
                  <img src={img_gaurangi} alt="Gaurangi president" />
                  <div className="contact-card-details">
                    <h1 className="contact-card-name">Gaurangi </h1>
                    <h2 className="contact-card-description">Coordinator</h2>
                    <h3
                      className="contact-card-options"
                      onClick={() => handlecontactOptions(".contact-card")}
                    >
                      Contact Options{" "}
                      <KeyboardDoubleArrowRightIcon
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    </h3>
                  </div>
                </div>
                <div className="contact-card-back">
                  <div className="contact-card-details">
                    <h1 className="contact-card-name">Contact</h1>
                    <h2 className="contact-card-description">
                      <span
                        className="contact-card-phone"
                        onClick={() => {
                          handleLaunch("contact-card-launch1");
                          setTimeout(() => {
                            window.open(
                              "https://api.whatsapp.com/send?phone=7988098718",
                            );
                          }, 2000);
                        }}
                      >
                        <PhoneBluetoothSpeakerIcon
                          className="phone"
                          style={{
                            width: "35px",
                            height: "35px",
                          }}
                        />
                        +91 7988098718
                        <span id="contact-card-launch1">
                          <RocketLaunchIcon
                            className="rocketLaunch"
                            style={{
                              width: "20px",
                              height: "20px",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        className="contact-card-email"
                        onClick={() => {
                          handleLaunch("contact-card-launch2");
                          setTimeout(() => {
                            window.open("mailto:gaurangi.22cse@bmu.edu.in");
                          }, 2000);
                        }}
                      >
                        <EmailRoundedIcon
                          className="email"
                          style={{
                            width: "35px",
                            height: "35px",
                          }}
                        />
                        gaurangi.22cse
                        <span id="contact-card-launch2">
                          <RocketLaunchIcon
                            className="rocketLaunch"
                            style={{
                              width: "20px",
                              height: "20px",
                            }}
                          />
                        </span>
                      </span>
                    </h2>
                    <h3
                      className="contact-card-options"
                      onClick={() => handlecontactOptions(".contact-card")}
                    >
                      <KeyboardDoubleArrowLeftIcon
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                      />
                      Back
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* -----------------------------------------Contact 2 ------------------------------------------- */}
          <div>
            <div className="contact-container">
              <div className="contact-card1">
                <div className="contact-card-front">
                  <img
                    src={img_aditya}
                    alt="Kishore President - Whitehatians"
                  />
                  <div className="contact-card-details">
                    <h1 className="contact-card-name">Aditya Rastogi</h1>
                    <h2 className="contact-card-description">Coordinator</h2>
                    <h3
                      className="contact-card-options"
                      onClick={() => handlecontactOptions(".contact-card1")}
                    >
                      Contact Options{" "}
                      <KeyboardDoubleArrowRightIcon
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    </h3>
                  </div>
                </div>
                <div className="contact-card-back1">
                  <div className="contact-card-details">
                    <h1 className="contact-card-name">Contact</h1>
                    <h2 className="contact-card-description">
                      <span
                        className="contact-card-phone"
                        onClick={() => {
                          handleLaunch("contact-card-launch11");
                          setTimeout(() => {
                            window.open(
                              "https://api.whatsapp.com/send?phone=8826427240",
                            );
                          }, 2000);
                        }}
                      >
                        <PhoneBluetoothSpeakerIcon
                          className="phone"
                          style={{
                            width: "35px",
                            height: "35px",
                          }}
                        />
                        +91 8826427240
                        <span id="contact-card-launch11">
                          <RocketLaunchIcon
                            className="rocketLaunch"
                            style={{
                              width: "20px",
                              height: "20px",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        className="contact-card-email"
                        onClick={() => {
                          handleLaunch("contact-card-launch12");
                          setTimeout(() => {
                            window.open("mailto:aditya.rastogi.22cse@bmu.edu.in");
                          }, 2000);
                        }}
                      >
                        <EmailRoundedIcon
                          className="email"
                          style={{
                            width: "35px",
                            height: "35px",
                          }}
                        />
                        aditya.rastogi.22cse
                        <span id="contact-card-launch12">
                          <RocketLaunchIcon
                            className="rocketLaunch"
                            style={{
                              width: "20px",
                              height: "20px",
                            }}
                          />
                        </span>
                      </span>
                    </h2>
                    <h3
                      className="contact-card-options"
                      onClick={() => handlecontactOptions(".contact-card1")}
                    >
                      <KeyboardDoubleArrowLeftIcon
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                      />
                      Back
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default contact;