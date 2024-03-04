import "../styles/LinkButton.css";
import PropTypes from 'prop-types'; // Importa PropTypes


LinkButton.propTypes = {
  name: PropTypes.string.isRequired, // name deve essere una stringa e obbligatorio
  link: PropTypes.string.isRequired, // link deve essere una stringa e obbligatorio
  image: PropTypes.string.isRequired, // image deve essere una stringa e obbligatorio
  className: PropTypes.string, // className deve essere una stringa
  onClick: PropTypes.func, // onClick deve essere una funzione e opzionale
};

function LinkButton({name,link,image,className,onClick}) {
  return (
    <div className={className}>
      <img src={image} alt="placeholder"/>
      <a href={link} onClick={onClick}>
        <p>{name}</p>
      </a>
    </div>
  );
}

export default LinkButton;
