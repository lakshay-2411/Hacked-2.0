import { Instagram, LinkedIn } from "@mui/icons-material";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="left">
          <img src="/images/logo.png" />
          <div>
            <div className="sep2"></div>
          </div>
          <img className="milestone-image" src="/images/67-milestone.png" />
        </div>

        <div className="right followus">
          <div className="heading">
            <b>Follow Us</b>
          </div>
          <div className="links">
            <div className="social-icon">
              <Instagram />
            </div>
            <div className="social-icon">
              <LinkedIn />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
