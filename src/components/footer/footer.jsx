import React, {useEffect, useState} from "react";
import "./footer.css";

// import logo from "../navbar/LOGO.png";
// import dsc from "./dsc.png";
// // import cross from "./cross.svg";


export default function Footer() {
  const [template, setTemplate] = useState(false);
  const [viewTemplate, setViewTemplate] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const listenScrollEvent = e => {
    if (window.scrollY > 2800) setTemplate(true);
    else if (window.scrollY < 2800) setTemplate(false);
  };

  return (
    <footer>
<div class="footer">
<div class="row" id="icons">
<a href="#"><i className="fa fa-facebook"></i></a>
<a href="#"><i className="fa fa-instagram"></i></a>
<a href="#"><i className="fa fa-youtube"></i></a>
<a href="#"><i className="fa fa-twitter"></i></a>
</div>

<div class="club">
<img src="./images/1.jpg" width={"45px"} height={"45px"}/>
<img src="./images/1.jpg" width={"45px"} height={"45px"}/>
<img src="./images/1.jpg" width={"45px"} height={"45px"}/>
</div>

<div class="row" id="copyright">
Copyrights © 2023. All rights reserved by Hacked 2.0 
</div>
</div>
</footer>
  );
}
