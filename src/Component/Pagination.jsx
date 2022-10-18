import styles from "./RestaurantCard.module.css";

function Pagination({ onChange, current, total }) {
  const pages = new Array(total).fill(0).map((a, i) => (
    <button onClick={() => onChange(i + 1)} disabled={current === i + 1}>
      {i + 1}
    </button>
  ));
  return (
    <div className={styles.button} data-testid="page-container">
      <div>{pages}</div>
    </div>
  );
}

export default Pagination;
