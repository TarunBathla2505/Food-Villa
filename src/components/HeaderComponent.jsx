import TitleComponent from "./TitleComponent";
import styles from "./HeaderComponent.module.css";
import { useState } from "react";

const HeaderComponent = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div className={styles.header}>
      <TitleComponent />
      <div className={styles.navItems}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
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
