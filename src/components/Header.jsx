import React from "react";
import styles from "./Header.module.css";
import HeaderNav from "./HeaderNav.jsx";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>My Portfollio</h1>
      <HeaderNav />
    </header>
  );
};

export default Header;
