import "./ItemCard.scss";

const ItemCard = ({ cardImage, cardImageAlt, caption }) => {
  return (
    <div className="item-card">
      <img src={cardImage} alt={cardImageAlt} />
      <p>{caption}</p>
    </div>
  );
};

export default ItemCard;
