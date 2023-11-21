import styles from "./Home.module.css"
import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div>
        <h1 className={styles.h1}>Home</h1>
        <div className="mainContainer">
          <h2>Welcome to MetaboFix!</h2>
          <p>Our goal is to fix your broken metabolism via diet and supplementation. Guided by the latest research we have developed a simple to follow guide to help change your slow torpid metabolism into a youthful healthy one!</p>
          <p>Simplified, our dietry advice is:</p>
          <ul>
            <li>Eat either high fat low carb, or low fat high carb</li>
            <li>Avoid unsaturated fats and fructose as much as possible</li>
            <li>Eat low amounts of BCAAs. Less than 8 grams per day</li>
          </ul>
          <p>We also offer supplements to help shift your metabolism away from torpidity and towards heat. Visit our <Link to="../shop">shop</Link> to see the selection.</p>
        </div>
      </div>
    );
  };
  
  export default Home;