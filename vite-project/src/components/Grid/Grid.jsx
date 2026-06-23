// src/components/Grid/Grid.jsx
import React from "react";
import { useProducts } from "../../context/ProductContext";
import { Card } from "../Card/Card";
import { SearchBar } from "../SearchBar/SearchBar"; // 👈 Importando o novo componente
import styles from "./Grid.module.css";

function Grid() {
  const { products, loading, error, offset, setOffset, limit } = useProducts();

  const TOTAL_PRODUTOS = 60;
  const paginaAtual = Math.floor(offset / limit) + 1;
  const totalPaginas = Math.ceil(TOTAL_PRODUTOS / limit);

  if (loading)
    return <div className={styles.loadingState}>Carregando produtos...</div>;
  if (error) return <div className={styles.errorState}>{error}</div>;

  return (
    <main className={styles.mainContent}>
      {/* 👈 Inserindo o componente isolado aqui */}
      <SearchBar />

      {/* Contador */}
      <div className={styles.catalogCounter}>
        <span>{products.length} produtos no catálogo</span>
      </div>

      {/* Grid de Cards */}
      <div className={styles.productsGrid}>
        {products.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>

      {/* Paginação */}
      <div className={styles.paginationContainer}>
        <button
          onClick={() => setOffset(offset - limit)}
          disabled={offset === 0}
        >
          Anterior
        </button>
        <span>
          Página <strong>{paginaAtual}</strong> de {totalPaginas}
        </span>
        <button
          onClick={() => setOffset(offset + limit)}
          disabled={paginaAtual === totalPaginas}
        >
          Próximo
        </button>
      </div>
    </main>
  );
}

export { Grid };
