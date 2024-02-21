import TitleComponent from "./TitleComponent";
import styles from "./HeaderComponent.module.css";

const HeaderComponent = () => {
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
        </div>
      </div>
  );
};

export default HeaderComponent;
