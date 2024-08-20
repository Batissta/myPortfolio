import React from "react";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>My Portfollio</h1>
      <nav>
        <ul className={styles.nav}>
          <li>
            <NavLink to="/">Sobre</NavLink>
          </li>
          <li>
            <NavLink to="/">Projetos</NavLink>
          </li>
          <li>
            <NavLink to="/">Contato</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
