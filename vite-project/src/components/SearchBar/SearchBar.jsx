// src/components/SearchBar/SearchBar.jsx
import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchInputWrapper}>
        <span className={styles.searchIcon}>🔍</span>
        <input type="text" placeholder="Pesquisar produtos..." />
      </div>
      <button className={styles.filterBtn}>
        <span>🎛️</span> Categoria
      </button>
    </div>
  );
}

export { SearchBar };
