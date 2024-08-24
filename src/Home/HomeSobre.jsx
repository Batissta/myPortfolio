import React from "react";
import styles from "./HomeSobre.module.css";
import Brasil from "../../public/Brasil";

const HomeSobre = () => {
  return (
    <section className={styles.homeSobre}>
      <div className={styles.conteudo}>
        <h2 className="cor0f89ec">Quem sou?</h2>
        <h3 className={styles.informacoes}>
          <span>Francinaldo Batista</span>
          <span>19 anos</span>
        </h3>
        <p>
          Campina Grande - PB
          <Brasil className={styles.bandeiraSvg} />
        </p>
      </div>
    </section>
  );
};

export default HomeSobre;
