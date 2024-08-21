import React from "react";
import useMedia from "../hooks/useMedia.jsx";
import styles from "./HeaderNav.module.css";
import { NavLink } from "react-router-dom";
import Celular from "../../public/celular.jsx";
import Projeto from "../../public/Projeto.jsx";

const HeaderNav = () => {
  const mobile = useMedia("(width <= 600px)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  React.useEffect(() => {
    setMobileMenu(false);
  }, [mobile]);
  return (
    <>
      {mobile && (
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${styles.mobileBotao} ${
            mobileMenu && styles.mobileBotaoAtivo
          }`}
        ></button>
      )}
      <nav
        className={`${!mobile && styles.nav} ${mobile && styles.navMobile} ${
          mobileMenu && styles.navMobileAtivo
        }`}
      >
        <li>
          <NavLink to="/">
            Sobre
            {mobile && <Celular />}
          </NavLink>
        </li>
        <li>
          <NavLink to="/arroz">
            Projetos
            {mobile && <Projeto />}
          </NavLink>
        </li>
        <li>
          <NavLink to="/feijoada">
            Contato
            {mobile && <Celular />}
          </NavLink>
        </li>
      </nav>
    </>
  );
};

export default HeaderNav;
