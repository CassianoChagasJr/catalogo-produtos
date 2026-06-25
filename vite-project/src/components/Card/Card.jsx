// src/components/Card/Card.jsx
import React from "react";
import styles from "./Card.module.css"; // Importando o módulo CSS

function Card({ product }) {
  if (!product) return null;

  return (
    <div className={styles.productCard}>
      <div className={styles.imageWrapper}>
        {/* Pega a primeira imagem da array retornada pela API */}
        <img src={product.images?.[0]} alt={product.title} />

        {/* Badge estática de desconto para seguir o seu design do Figma */}
        <span className={styles.discountTag}>-20%</span>
      </div>

      <div className={styles.cardInfo}>
        {/* Categoria do produto */}
        <span className={styles.productCategory}>{product.category?.name}</span>

        {/* Título do produto */}
        <h3 className={styles.productTitle}>{product.title}</h3>

        {/* Preço do produto */}
        <p className={styles.productPrice}>R$ {product.price}</p>
      </div>
    </div>
  );
}

export { Card };
