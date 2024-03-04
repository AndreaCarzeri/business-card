import "./App.css";
import Footer from "./components/Footer";
import LinkButton from "./components/LinkButton";
import Presentation from "./components/Presentation";
import Description from "./components/Description";
import email from "./assets/email.png";
import linkedin from "./assets/linkedin-app-white-icon.png";


function App() {
  const handleClick = (linkName) => {
    alert(`Not yet ${linkName}`);
  };
  return (
    <div className="content">
      <Presentation />
      <div className="link-button-container">
        <LinkButton
          name="Email"
          link="mailto:andreacarzeri@gmail.com?subject=Richiesta%20Informazioni"
          image={email}
          className="link-button link-button-left"
        />
        <LinkButton
          name="LinkedIn"
          link=""
          image={linkedin}
          className="link-button link-button-right"
          onClick={() => handleClick("LinkedIn")}
        />
      </div>
      <Description
        title="About"
        content="I'm a young developer, passionate about technology, always seeking new challenges."
      />
      <Description
        title="Interests"
        content="I enjoy primarily backend development, but also frontend, collaborating in teams, and continuously expanding my knowledge."
      />
      <Footer />
    </div>
  );
}

export default App;
