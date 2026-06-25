import React from "react";
import styles from "./Header.module.css"; // Importando o módulo CSS
import { useProducts } from "../../context";

function Header() {
  const { setSearch, setOffset } = useProducts();
  const goHome = () => {
    setSearch(""), setOffset(0);
  };

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className={styles.brandBadge}>
          <button onClick={goHome} className={styles.homeButton}>
            <span className={styles.bagIcon}>🛍️</span>
          </button>
        </div>
        <div className={styles.text}>
          <h1>Log.API</h1>
          <p>Produtos selecionados aleatoriamente</p>
        </div>
      </div>
    </header>
  );
}

export { Header };
