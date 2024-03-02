import TitleComponent from "./title/TitleComponent";
import styles from "./HeaderComponent.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div className={styles.header}>
      <TitleComponent />
      <div className={styles.navItems}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="">Cart</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
        {loggedIn ? (
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setLoggedIn(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default HeaderComponent;
