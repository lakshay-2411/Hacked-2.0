import React, { useEffect } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./faqs.css";
import ReactGA from "react-ga";

const faqs = () => {
  const handleArrow = (element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "FAQs",
    });
    const elementVisible = element.currentTarget.querySelector(
      ".faqs-content-description"
    );
    const arrow = element.currentTarget.querySelector(".faqs-arrow");

    elementVisible.classList.toggle("faq-visible");
    arrow.classList.toggle("arrow-transform");
  };

  const styles = {
    container: {
      position: "relative",
      zIndex: "-1",
      fontSize: "2.5vw",
      transition: "all 0.3s linear",
      cursor: "pointer",
    },
  };

  if (window.innerWidth <= 768) {
    styles.container = {
      ...styles.container,
      fontSize: "5vw",
    };
  }

  return (
    <React.Fragment>
      <div id="faqs" className="parent-faqs">
        <h1 className="faqs-title">
          <img src="/images/rrr.webp" alt="arrow-logo" />
          FAQs
        </h1>

        <div className="faqs-section">
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            What is Hacked 2.0?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            Hacked 2.0 is a 24-hour hackathon organized as part of the 67th Milestone college fest.
            It provides a platform for participants to showcase their creativity and problem-solving
            skills by addressing challenges related to the Sustainable Development Goals outlined 
            by the United Nations.
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            How to Register?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            It’s Simple just click on the link below. Fill in the necessary details and Voila 
            you’ve registered yourself for the Coolest Hackathon Ever!<br></br>
            <a href="https://unstop.com/hackathons/hacked-20-bml-munjal-university-bmu-gurgaon-901802" target="_blank" class="registration-link">Register</a>

            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            When and where will Hacked 2.0 take place?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            Hacked 2.0 will take place on March 1st and 2nd, 2024, at BML Munjal University, 
            Gurgaon, Haryana. It is a 24-hour event starting on March 1st and concluding with 
            the ending ceremony on March 2nd.
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            What do I get after attending Hacked 2.0?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            Prize pool for Hacked2.0 is up to Rs. 50,000/-. Top winners will also be awarded with 
            certificates of excellence. All participants will be awarded a certificate for 
            participation. Various other perks include a chance to network with industry 
            professionals and engaging in workshops gaining hand-on learning experiences 
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            For participants will travel reimbursement be provided?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            No, Hacked 2.0 does not offer travel reimbursement for participants. Participants 
            are responsible for their travel expenses. However, transportation from and to 
            Iffco Chowk Metro Stations to BMU will be provided by the university.
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            What is the theme of Hacked 2.0?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            The theme of Hacked 2.0 is OPEN! Participants can choose any theme they like as 
            long as it aligns with the Sustainable Development Goals of the UN.
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            Who can participate in Hacked 2.0?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            Hacked 2.0 is open to all college students who are passionate about technology and 
            innovation. Participants can form teams of up to 2-4 members.
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            Do I have to be a computer science major to participate?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            Not at all! Hacked 2.0 celebrates diversity in skills and backgrounds. 
            Whether you're a coder, designer, or dreamer, there's a place for you at our hackathon.
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            What should I bring to Hacked 2.0?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            Participants should bring in their Laptops, Chargers, Extension, Pillows, 
            Sleeping Bags and any other necessary software or tools, and enthusiasm for innovation!
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            What should I bring to Hacked 2.0?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            Participants should bring in their Laptops, Chargers, Extension, Pillows, 
            Sleeping Bags and any other necessary software or tools, and enthusiasm for innovation!
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            What should I bring to Hacked 2.0?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            Participants should bring in their Laptops, Chargers, Extension, Pillows, 
            Sleeping Bags and any other necessary software or tools, and enthusiasm for innovation!
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
            What should I bring to Hacked 2.0?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
            Participants should bring in their Laptops, Chargers, Extension, Pillows, 
            Sleeping Bags and any other necessary software or tools, and enthusiasm for innovation!
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default faqs;
