import styles from "./RestaurantCard.module.css";
function RestaurantCard({
  image,
  name,
  type,
  price_starts_from,
  rating,
  number_of_votes,
}) {
  return (
    <div data-testid="restaurant-card">
      {/* display the props */}
      <div className={styles.container}>
        <div>
          <img
            data-testid="restaurant-card-image"
            src={image}
            className={styles.image}
          />
        </div>
        <div>
          <div>
            name:<b data-testid="restaurant-card-name">{name}</b>
          </div>
          <div>
            type:<b data-testid="restaurant-card-type">{type}</b>
          </div>
          <div>
            price:
            <b data-testid="restaurant-card-price">{price_starts_from}</b>
          </div>

          <div>
            rating:<b data-testid="restaurant-card-rating">{rating}</b>
          </div>
          <div>
            votes:
            <b data-testid="restaurant-card-votes">{number_of_votes}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
