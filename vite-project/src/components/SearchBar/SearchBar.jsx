import React from "react";
import { useProducts } from "../../context/ProductContext";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const { search, setSearch } = useProducts();

  return (
    <div className={styles.searchBarContainer}>
      {/* Input de Busca estilo Pílula Moderna */}
      <div className={styles.searchInputWrapper}>
        <span className={styles.searchIcon}>🔍</span>
        <input
          type="text"
          placeholder="Pesquisar no catálogo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export { SearchBar };
