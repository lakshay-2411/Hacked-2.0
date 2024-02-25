import { Instagram, LinkedIn } from "@mui/icons-material";
import "./footer.css";

export default function Footer() {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/hacked_bmu/", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/company/hacked-2-0/", "_blank");
  };
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
            <div className="social-icon" onClick={handleInstagramClick}>
              <Instagram className="icon"/>
            </div>
            <div className="social-icon" onClick={handleLinkedInClick}>
              <LinkedIn className="icon"/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
