import PropTypes from "prop-types"; // Importa PropTypes

LittleLink.propTypes = {
  img: PropTypes.string.isRequired, // name deve essere una stringa e obbligatorio
  link: PropTypes.string.isRequired, // link deve essere una stringa e obbligatorio
  alt: PropTypes.string.isRequired, // image deve essere una stringa e obbligatorio
};

function LittleLink({ link, img, alt }) {
  return (
    <a href={link} className="LittleLink">
      <div>
        <img src={img} alt={alt} />
      </div>
    </a>
  );
}

export default LittleLink;
