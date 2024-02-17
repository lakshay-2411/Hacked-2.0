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
<a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
<a href="#"><i className="fa-brands fa-instagram"></i></a>
<a href="#"><i class="fa-brands fa-discord"></i></a>
<a href="#"><i className="fa-brands fa-x-twitter"></i></a>
</div>

{/* <div class="club">
<img src="./images/1.jpg" width={"45px"} height={"45px"}/>
<img src="./images/1.jpg" width={"45px"} height={"45px"}/>
<img src="./images/1.jpg" width={"45px"} height={"45px"}/>
</div> */}

<div class="row" id="copyright">
<div style={{marginLeft:'10px', marginTop:'18px'}}>Copyrights © 2024. All rights reserved by Hacked 2.0 </div>
<div><img src="./images/67.png" id="milestone"/></div>
</div>
</div>
</footer>
  );
}
