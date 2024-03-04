import photo from "../assets/photo.png";

function Presentation() {
  return (
    <div className="presentation">
      <img src={photo} alt="placeholder" />
      <h1 className="title">Carzeri Andrea</h1>
      <h2 className="sub-title">Software Developer</h2>
      <a href="" onClick={() => alert('Not yet andreacarzeri.it')}>
        <h3 className="website">andreacarzeri.it</h3>
      </a>
    </div>
  );
}

export default Presentation;
