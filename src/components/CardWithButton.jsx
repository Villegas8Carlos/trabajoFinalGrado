import "../styles/CardWithButton.css";

const Card = ({ title, description, image, buttonText, onButtonClick }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <h3>{title}</h3>
      <p>{description}</p>
      {buttonText && (
        <button className="card-button" onClick={onButtonClick}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Card;
