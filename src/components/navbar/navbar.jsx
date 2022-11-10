import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
        <ul className={styles.navbar_items}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/recursos">Recursos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
