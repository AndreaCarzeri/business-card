import PropTypes from "prop-types"; // Importa PropTypes
import "../styles/Description.css";

Description.propTypes = {
  title: PropTypes.string.isRequired, // name deve essere una stringa e obbligatorio
  content: PropTypes.string.isRequired, // link deve essere una stringa e obbligatorio
};

function Description({ title, content }) {
  return (
    <div className="Description">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Description;