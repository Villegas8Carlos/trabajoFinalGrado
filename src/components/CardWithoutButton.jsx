import "../styles/CardWithoutButton.css";

const Card = ({ title, description, image }) => {
  return (
    <div className="cardNB">
      {image && <img src={image} alt={title} className="card-imageNB" />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;

