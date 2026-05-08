import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { BsToggleOff } from "react-icons/bs";

const Footer = () => {
  return (
    <div id="footer">

      
      <div className="footer-container">

        <div className="col">
          <p>What's new</p>
          <a href="#">Surface Pro</a>
          <a href="#">Surface Laptop</a>
          <a href="#">Copilot for organizations</a>
          <a href="#">Copilot for personal use</a>
          <a href="#">Microsoft 365</a>
          <a href="#">Explore Microsoft products</a>
          <a href="#">Windows 11 apps</a>
        </div>

        <div className="col">
          <p>Microsoft Store</p>
          <a href="#">Account profile</a>
          <a href="#">Download Center</a>
          <a href="#">Microsoft Store Support</a>
          <a href="#">Returns</a>
          <a href="#">Order tracking</a>
        </div>

        <div className="col">
          <p>Education</p>
          <a href="#">Microsoft in education</a>
          <a href="#">Devices for education</a>
          <a href="#">Microsoft Teams for Education</a>
          <a href="#">Microsoft 365 Education</a>
          <a href="#">Office Education</a>
          <a href="#">Educator training and development</a>
          <a href="#">Deals for students and parents</a>
          <a href="#">Azure for students</a>
        </div>

        <div className="col">
          <p>Business</p>
          <a href="#">Microsoft AI</a>
          <a href="#">Microsoft Security</a>
          <a href="#">Azure</a>
          <a href="#">Dynamics 365</a>
          <a href="#">Microsoft 365</a>
          <a href="#">Microsoft Advertising</a>
          <a href="#">Microsoft 365 Copilot</a>
          <a href="#">Microsoft Teams</a>
        </div>

        <div className="col">
          <p>Developer & IT</p>
          <a href="#">Microsoft Developer</a>
          <a href="#">Microsoft Learn</a>
          <a href="#">Support for AI marketplace apps</a>
          <a href="#">Microsoft Tech Community</a>
          <a href="#">Microsoft Marketplace</a>
          <a href="#">Microsoft Power Platform</a>
          <a href="#">Marketplace Rewards</a>
          <a href="#">Visual Studio</a>
        </div>

        <div className="col">
          <p>Company</p>
          <a href="#">Careers</a>
          <a href="#">About Microsoft</a>
          <a href="#">Company news</a>
          <a href="#">Privacy at Microsoft</a>
          <a href="#">Investors</a>
          <a href="#">Security</a>
          <a href="#">Sustainability</a>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">

        <div className="left">
          <a id="english" href=""><p className="globe"><LiaGlobeAmericasSolid /></p> English (India)</a>
          
          <a id="english"  href="#"> <p className="globe"><BsToggleOff /></p> Your Privacy Choices</a>
          <a href="#">Consumer Health Privacy</a>
        </div>

        <div className="right">
          <a href="#">Contact Microsoft</a>
          <a href="#">Privacy</a>
          <a href="#">Terms of use</a>
          <a href="#">Trademarks</a>
          <a href="#">About our ads</a>
          <span>© Microsoft 2026</span>
        </div>

      </div>

    </div>
  );
};

export default Footer;