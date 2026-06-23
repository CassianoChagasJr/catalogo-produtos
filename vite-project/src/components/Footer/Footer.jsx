// src/components/Footer/Footer.jsx
import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p>© 2026 Catálogo Premium. Todos os direitos reservados.</p>
      <p>Desenvolvido para fins acadêmicos — IFPE</p>
    </footer>
  );
}

export { Footer };
