import React from "react";
import styles from "./HomeIntroducao.module.css";
import { Link } from "react-router-dom";
import useMedia from "../hooks/useMedia.jsx";
import ReactSvg from "../../public/React.jsx";
import Css from "../../public/Css.jsx";
import Html from "../../public/Html.jsx";
import Node from "../../public/Node.jsx";
import TypeScript from "../../public/TypeScript.jsx";
import Arrow from "../../public/Arrow.jsx";

const HomeIntroducao = () => {
  const mobile = useMedia("(width <= 630px)");
  return (
    <section className={`${styles.homeContainerBg}`}>
      <div className={styles.homeContainer}>
        <div className={styles.homeConteudo}>
          <h1>
            Dê vida à sua marca no mundo digital.
            <br />
            <span className="cor0f89ec">Design</span> e{" "}
            <span className="cor0f89ec">performance.</span>
          </h1>
          <p>
            Sou um desenvolvedor Frontend localizado em Campina Grande, Paraíba.
            📍
          </p>
          <p>
            Minha abordagem é focada na criação de experiências de usuário
            envolventes e funcionais. Cada projeto que desenvolvo é uma
            oportunidade para resolver problemas criativos e encontrar soluções
            inovadoras. Estou sempre atualizado com as melhores práticas e novas
            tecnologias para garantir que meu trabalho não só atenda, mas supere
            as expectativas.
          </p>

          <Link to="/projetos" className={`botao ${styles.botao}`}>
            Projetos
            {!mobile && <Arrow />}
          </Link>
        </div>
        <div className={styles.tecnologiasArea}>
          <span>Tecnologias certificadas</span>
          <Link
            to={"/certificados"}
            className={`botao ${styles.tecnologiasLista}`}
          >
            <p to="certificados" className={styles.hoverEffect}>
              Certificados
              <Arrow />
            </p>
            <ReactSvg />
            <Node />
            <TypeScript />
            <Css />
            <Html />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeIntroducao;
