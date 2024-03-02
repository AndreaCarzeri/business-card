import "../Footer.css";
import LittleLink from "./LittleLink";
import github from "../assets/icons8-github-48.png";
import linkedin from "../assets/icons8-linkedin-48.png";
import twitter from "../assets/icons8-twitter-48.png";
import instagram from "../assets/icons8-instagram-48.png";

function Footer() {
  return (
    <footer>
        <LittleLink img={github} link="" alt="github" />
        <LittleLink img={linkedin} link="" alt="linkedin" />
        <LittleLink img={twitter} link="" alt="twitter" />
        <LittleLink img={instagram} link="" alt="instagram" />
    </footer>
  );
}

export default Footer;
