import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";
import RestaurantCard from "./RestaurantCard";
import styles from "./RestaurantCard.module.css";

function Restaurants() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData(page);
  }, [page]);

  async function getData(page = 1) {
    setLoading(true);
    try {
      let res = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10`
      );
      let data = await res.json();
      setLoading(false);
      console.log(data);
      setData([...data.data]);

      console.log(data);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  if (loading) return <LoadingIndicator />;
  return (
    <div>
      <h1 className={styles.header} data-testid="restaurants-header">
        Restaurants List
      </h1>
      <div className={styles.main} data-testid="restaurants-container">
        {data.map((el) => {
          return (
            <RestaurantCard
              name={el.name}
              type={el.type}
              price_starts_from={el.price_starts_from}
              rating={el.rating}
              number_of_votes={el.number_of_votes}
              image={el.image}
            />
          );
        })}
      </div>
      <div>
        <Pagination
          total={10}
          current={page}
          onChange={(value) => setPage(value)}
        />
      </div>
    </div>
  );
}

export default Restaurants;
