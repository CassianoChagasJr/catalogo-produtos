// src/components/Header/Header.jsx
import React from "react";
import styles from "./Header.module.css"; // Importando o módulo CSS

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className={styles.brandBadge}>
          <span className={styles.bagIcon}>🛍️</span>
        </div>
        <div className={styles.text}>
          <h1>Catálogo Premium</h1>
          <p>Produtos selecionados com qualidade</p>
        </div>
      </div>
    </header>
  );
}

export { Header };
