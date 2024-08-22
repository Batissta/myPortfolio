import React from "react";
import styles from './Home.module.css'
import { Link } from "react-router-dom";
import ReactSvg from '../../public/React.jsx'
import Css from '../../public/Css.jsx'
import Html from '../../public/Html.jsx'
import Node from '../../public/Node.jsx'
import TypeScript from '../../public/TypeScript.jsx'
import Arrow from "../../public/Arrow.jsx";

const Home = () => {
  return (
    <section className={`container bgBlack ${styles.homeContainerBg}`}>
      <div className={styles.homeContainer}>
        <div className={styles.homeConteudo}>
          <h1>Francinaldo Batista</h1>
          <span>
            Frontend Developer
            {/* <ReactSvg/> */}
          </span>
          <p>Sou um desenvolvedor Frontend localizado em Campina Grande, Paraíba. 📍</p>
          <p>Minha abordagem é focada na criação de experiências de usuário envolventes e funcionais. Cada projeto que desenvolvo é uma oportunidade para resolver problemas criativos e encontrar soluções inovadoras. Estou sempre atualizado com as melhores práticas e novas tecnologias para garantir que meu trabalho não só atenda, mas supere as expectativas.</p>

        <Link to='/projetos' className={`botao ${styles.botao}`}>Projetos
          <Arrow/>
        </Link>
        </div>
        <Link to='/certificados' className={styles.tecnologiasArea}>
         <span>Tecnologias certificadas</span>
          <div>
            <ReactSvg/>
            <Node/>
            <TypeScript/>
            <Css/>
            <Html/>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Home;
