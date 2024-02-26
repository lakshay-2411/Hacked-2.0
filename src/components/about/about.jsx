import React, { useEffect } from "react";
import ReactGA from "react-ga";
import "./about.css";

const about = () => {
  const handleWebClicks = (webLink) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: webLink,
    });
    window.open(webLink);
  };
  useEffect(() => {
    document.title = "About Us";
    const observer = new IntersectionObserver(
      (entryies) => {
        entryies.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id == "about-left")
              entry.target.classList.add("aboutScrollAnimateLeft");
            if (entry.target.id == "about-right")
              entry.target.classList.add("aboutScrollAnimateRight");
          }
        });
      },
      {
        threshold: 1,
      },
    );
    const divs = document.querySelectorAll(
      ".foundation-title,.foundation-description,.about-srmvec-title,.about-srmvec-description,.about-csi-title,.about-csi-description,.about-whitehatians-title,.about-whitehatians-description",
    );
    divs.forEach((div) => observer.observe(div));
  });

  return (
    <React.Fragment>
      <div id="about" className="parent-about">
        <h1 className="about-title">About Us</h1>
        <div className="foundation">
          <div className="foundation-title " id="about-right">
            <img
              src="/images/67-milestone.png"
              alt="srm logo"
              className="about-srm-logo"
            />
            About 67th Milestones
            {/* <img
              src="/images/bml-logo.png"
              alt="srmvec logo"
              className="about-srmvec-logo"
            /> */}
          </div>
          <div className="foundation-description" id="about-left">
          67th Milestone is the ultimate fusion of innovation and celebration at BML Munjal 
          University. As the Annual Techno-Cultural-Management and Sports fest, it's a three-day 
          extravaganza (March 1st to 3rd, 2024) filled with electrifying showcases, captivating 
          performances, and thrilling competitions. It's where creativity meets excellence, and 
          where memories are made to last a lifetime. 🎉
          </div>
        </div>

        <div className="srmvec">
          <div
            className="about-srmvec-title "
            id="about-left"
            onClick={() => handleWebClicks("https://www.bmu.edu.in/")}
          >
            <img
              className="about-srmvec-logo"
              src="/images/bml-logo.png"
              alt="srmvec logo"
            />
            About BMU
          </div>
          <div className="about-srmvec-description" id="about-right">
          BML Munjal University (BMU) is a beacon of innovation and creativity. Founded by the 
          esteemed Hero Group, we're dedicated to nurturing ethical leaders equipped with the 
          knowledge and skills to thrive in a rapidly evolving world. As a not-for-profit 
          initiative, we aim to inspire, challenge, and transform students. Welcome to BMU, 
          where greatness awaits.
          </div>
        </div>
        <div className="csi">
          <div
            className="about-csi-title"
            id="about-right"
            onClick={() => handleWebClicks("http://www.hacked24.in/")}
          >
            <img
              className="about-csi-logo"
              src="/images/logo.png"
              alt="csi logo"
            />
            About Hacked 2.0
          </div>
          <div className="about-csi-description" id="about-left">
          Hacked 2.0 isn't just a hackathon; it's a revolution in innovation. Dedicated to 
          pushing the boundaries of creativity and problem-solving, Hacked 2.0 focuses on UN 
          sustainable development goals. Join us for an exhilarating journey of coding, 
          collaboration, and making a difference. Welcome to Hacked 2.0, where innovation knows 
          no bounds! 🚀

          </div>
        </div>
        <div className="whitehatians">
          <div
            className="about-whitehatians-title"
            id="about-left"
            onClick={() => handleWebClicks("https://www.herody.in/")}
          >
            <img
              className="about-whitehatians-logo"
              src="/images/herody.png"
              alt="whitehatians logo"
            />
            About Herody
          </div>
          <div className="about-whitehatians-description" id="about-right">
          Herody is the ultimate ally for brands, facilitating target achievement by harnessing 
          the power of student gig workers. Empowering youths to earn and grow remotely while 
          offering brands a seamless platform to engage with the vibrant college demographic. 
          With a vast network and innovative services, herody is transforming marketing to 
          millennials.
          </div>
        </div>
        <div className="csi">
          <div
            className="about-csi-title"
            id="about-right"
            onClick={() => handleWebClicks("https://unstop.com/")}
          >
            <img
              className="about-csi-logo"
              src="/images/unstop.png"
              alt="csi logo"
            />
            About Unstop
          </div>
          <div className="about-csi-description" id="about-left">
          Unstop is where talent meets opportunity, connecting students and freshers 
          worldwide to their dream careers. It's more than a platform; it's a playground 
          for unlocking potential, showcasing skills, and gaining CV points. With a global 
          reach, Unstop empowers individuals to #BeUnstoppable in their academic and career 
          journeys.
          </div>
        </div>
        <div className="whitehatians">
          <div
            className="about-whitehatians-title"
            id="about-left"
            onClick={() => handleWebClicks("hhttps://www.codingblocks.com/")}
          >
            <img
              className="about-whitehatians-logo"
              src="/images/codingBlock.png"
              alt="whitehatians logo"
            />
            About Coding Blocks
          </div>
          <div className="about-whitehatians-description" id="about-right">
          Coding Blocks, founded in 2014, is committed to shaping skilled software engineers 
          for the global stage. Our mission is to narrow the gap between industry demands and 
          conventional education by offering immersive, hands-on training. At Coding Blocks, 
          we believe in practical learning that goes beyond theory. With industry-aligned courses 
          and project-based learning, we ensure our students are well-equipped to thrive in the 
          tech world. Embark on a journey of growth and innovation with Coding Blocks!
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default about;
