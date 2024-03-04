import "../Footer.css";
import LittleLink from "./LittleLink";
import github from "../assets/icons8-github-48.png";
import linkedin from "../assets/icons8-linkedin-48.png";
import twitter from "../assets/icons8-twitter-48.png";
import instagram from "../assets/icons8-instagram-48.png";

function Footer() {

  const handleClick = (linkName) => {
    alert(`Not yet ${linkName}`);
  };

  return (
    <footer>
        <LittleLink img={github} link="https://github.com/AndreaCarzeri" alt="github" />
        <LittleLink img={linkedin} link="" alt="linkedin" onClick={() => handleClick("LinkedIn")}/>
        <LittleLink img={twitter} link="" alt="twitter" onClick={() => handleClick("Twitter")}/>
        <LittleLink img={instagram} link="https://www.instagram.com/carze_?igsh=ZzBycG9sbTk0MG12" alt="instagram" />
    </footer>
  );
}

export default Footer;
