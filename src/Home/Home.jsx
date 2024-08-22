import React from "react";
import styles from './Home.module.css'

const Home = () => {
  return (
    <section className="container bgBlack">
      <div className={styles.homeContainer}>
        <h1>I'm Francinaldo Batista</h1>
        <span>Frontend Developer</span>
        <p>Como desenvolvedor frontend com mais de um ano de experiência, minha paixão por criar interfaces web incríveis é o que me move todos os dias. Minha jornada começou com HTML, CSS e JavaScript, e ao longo do tempo, mergulhei no universo de React e Node.js, onde descobri a magia de construir aplicações dinâmicas e responsivas.</p>
        <p>Minha abordagem é focada na criação de experiências de usuário envolventes e funcionais. Cada projeto que desenvolvo é uma oportunidade para resolver problemas criativos e encontrar soluções inovadoras. Estou sempre atualizado com as melhores práticas e novas tecnologias para garantir que meu trabalho não só atenda, mas supere as expectativas.</p>
      </div>
    </section>
  );
};

export default Home;
