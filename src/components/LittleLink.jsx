import PropTypes from "prop-types"; // Importa PropTypes

LittleLink.propTypes = {
  img: PropTypes.string.isRequired, // name deve essere una stringa e obbligatorio
  link: PropTypes.string.isRequired, // link deve essere una stringa e obbligatorio
  alt: PropTypes.string.isRequired, // image deve essere una stringa e obbligatorio
  onClick: PropTypes.func, // onClick deve essere una funzione e opzionale
};

function LittleLink({ link, img, alt, onClick }) {
  return (
    <a href={link} onClick={onClick} className="LittleLink">
      <div>
        <img src={img} alt={alt} />
      </div>
    </a>
  );
}

export default LittleLink;
