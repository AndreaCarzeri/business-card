import "./App.css";
import Footer from "./components/Footer";
import LinkButton from "./components/LinkButton";
import Presentation from "./components/Presentation";
import Description from "./components/Description";
import email from "./assets/email.png";
import linkedin from "./assets/linkedin-app-white-icon.png";

function App() {
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
        />
      </div>
      <Description
        title="About"
        content="I am a young developer, I am passionate about technology and I am always looking for new challenges." />
      <Description
        title="Interests"
        content="I am a young developer, I am passionate about technology and I am always looking for new challenges. Helo"/>
      <Footer />
    </div>
  );
}

export default App;
