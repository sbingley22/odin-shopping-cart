import { useState } from "react";
import styles from "./Shop.module.css"
import { useEffect } from "react";
import Item from "./Item";
import PropTypes from 'prop-types'
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const [items, setItems] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const [addItem] = useOutletContext()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=9')
            .then(res=>res.json())
            .then(json=>setItems(json))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
  })

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className={styles.h1}>Shop</h1>
      <div className={styles.shopContainer}>
        {items.map( item => (
          <Item key={item.id} item={item} addItem={addItem} />
        ))}
      </div>
    </div>
  );
};

Shop.propTypes = {
  addItem: PropTypes.func,
}
  
  export default Shop;