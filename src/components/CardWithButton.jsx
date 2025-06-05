import "../styles/CardWithButton.css";

const Card = ({ title, description, image, buttonText, onButtonClick }) => {
  return (
    <div className="cardWB">
      {image && <img src={image} alt={title} className="card-imageWB" />}
      <h3>{title}</h3>
      <p>{description}</p>
      {buttonText && (
        <button className="card-buttonWB" onClick={onButtonClick}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Card;
