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
              src="/images/bml-logo.png"
              alt="srm logo"
              className="about-srm-logo"
            />
            67th Milestones Celebration
            <img
              src="/images/bml-logo.png"
              alt="srmvec logo"
              className="about-srmvec-logo"
            />
          </div>
          <div className="foundation-description" id="about-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            ullam perferendis adipisci ipsa quam odit veniam placeat error
            explicabo tenetur dolor quaerat distinctio voluptate unde velit,
            earum ducimus vitae nemo! Debitis ut nostrum temporibus dolores aut
            dolorum esse mollitia itaque deleniti iste labore, error dolore ab
            repellendus repudiandae impedit eius quae cupiditate et incidunt.
            Voluptas, illo facilis ipsa, nam veniam labore reiciendis incidunt
            facere quas aut itaque ratione assumenda! Veritatis sunt dolorem
            fuga ex, amet veniam ducimus aspernatur molestias corrupti eveniet
            laborum, repudiandae laboriosam quod assumenda non consequuntur
            deserunt maiores aliquam eaque, commodi totam autem libero omnis?
            Eos, sed provident.
          </div>
        </div>

        <div className="srmvec">
          <div
            className="about-srmvec-title "
            id="about-left"
            onClick={() => handleWebClicks("https://www.bmu.com")}
          >
            <img
              className="about-srmvec-logo"
              src="/images/bml-logo.png"
              alt="srmvec logo"
            />
            About BMU
          </div>
          <div className="about-srmvec-description" id="about-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            nisi, iste molestiae facilis eveniet molestias laboriosam nemo
            ratione nam architecto adipisci repellat distinctio ipsa facere modi
            vero cum. Fugit laborum temporibus eveniet nam architecto beatae
            consequatur, alias facilis aut odit.
          </div>
        </div>
        <div className="csi">
          <div
            className="about-csi-title"
            id="about-right"
            onClick={() => handleWebClicks("http://www.bmu.com/")}
          >
            <img
              className="about-csi-logo"
              src="/images/bml-logo.png"
              alt="csi logo"
            />
            About sata
          </div>
          <div className="about-csi-description" id="about-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A officia
            consequuntur dolores quae sequi rem? Veritatis sint quibusdam
            dolores dolorem cupiditate mollitia reiciendis modi accusantium
            laborum, nisi aut eum porro exercitationem deleniti praesentium
            obcaecati. Amet nobis soluta, fuga eum sapiente itaque id iure
            recusandae magnam inventore perferendis qui odit laborum quas
            necessitatibus repudiandae eligendi cupiditate incidunt vel tenetur
            magni corrupti!
          </div>
        </div>
        <div className="whitehatians">
          <div
            className="about-whitehatians-title"
            id="about-left"
            onClick={() => handleWebClicks("https://www.bmu.com")}
          >
            <img
              className="about-whitehatians-logo"
              src="/images/bml-logo.png"
              alt="whitehatians logo"
            />
            About acm
          </div>
          <div className="about-whitehatians-description" id="about-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            officiis modi, eligendi iste accusantium excepturi adipisci deleniti
            totam doloribus quis explicabo, dolorem laborum nemo soluta
            blanditiis! Excepturi velit rerum dolorem, commodi sequi sit omnis
            facere tempore aut, illum quaerat dicta et consectetur! Veritatis
            vitae nobis repellendus dolores! Impedit, blanditiis esse.
          </div>
        </div>
        <div className="csi">
          <div
            className="about-csi-title"
            id="about-right"
            onClick={() => handleWebClicks("http://www.bmu.com/")}
          >
            <img
              className="about-csi-logo"
              src="/images/bml-logo.png"
              alt="csi logo"
            />
            About SciMat
          </div>
          <div className="about-csi-description" id="about-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A officia
            consequuntur dolores quae sequi rem? Veritatis sint quibusdam
            dolores dolorem cupiditate mollitia reiciendis modi accusantium
            laborum, nisi aut eum porro exercitationem deleniti praesentium
            obcaecati. Amet nobis soluta, fuga eum sapiente itaque id iure
            recusandae magnam inventore perferendis qui odit laborum quas
            necessitatibus repudiandae eligendi cupiditate incidunt vel tenetur
            magni corrupti!
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default about;
