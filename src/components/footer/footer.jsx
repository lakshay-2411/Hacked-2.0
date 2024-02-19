import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div>
          Copyrights © 2024.
          <br />
          All rights reserved by Hacked 2.0{" "}
        </div>
        <div className="row" id="icons">
          <a rel="noreferrer" target="_blank" href="#">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/hacked_bmu?igsh=bG40anR0Z2I2bGRq"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a rel="noreferrer" target="_blank" href="#">
            <i className="fa-brands fa-discord"></i>
          </a>
          <a rel="noreferrer" target="_blank" href="#">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
        <img src="/images/67-milestone.png" id="milestone" />
      </div>
    </footer>
  );
}
