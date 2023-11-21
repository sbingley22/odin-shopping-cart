import styles from './App.module.css'
import "./index.css"
import { Link, Outlet } from 'react-router-dom';
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([])  

  const addItem = (id) => {
    const newCart = [...cart, id]
    setCart(newCart)
    console.log(newCart.length)
  }

  return (
    <div className={styles.root}>
      <div className={styles.navigationBar}>
        <h1>MetaboFix</h1>
        <nav>
            <Link to="home">Home</Link>
            <Link to="shop">Shop</Link>
            <div className={styles.cart}>
              <img className={styles.icon} src="/cart.svg" alt="" />
              <p>{cart.length}</p>
              </div>
        </nav>
      </div>
      <div className={styles.appContent}>
        <Outlet context={[addItem]} />
      </div>
    </div>
  );
};

export default App;
