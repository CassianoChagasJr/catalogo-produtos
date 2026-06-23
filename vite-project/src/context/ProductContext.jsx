// src/context/ProductContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";
import { buscarProdutos } from "../services"; // Ajuste o caminho se necessário

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estados globais para a paginação que o Grid vai consumir e alterar
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20); // Traz 12 itens por página (atende o "pelo menos 10")

  useEffect(() => {
    const carregarDados = async () => {
      try {
        setLoading(true);
        setError(null);

        // Executa o fetch passando o estado atual de paginação
        const dados = await buscarProdutos(offset, limit);
        setProducts(dados);
      } catch (err) {
        // Atende o requisito de tratamento de erro do PDF
        setError(
          "Não foi possível carregar os produtos. Tente novamente mais tarde.",
        );
      } finally {
        setLoading(false);
      }
    };

    carregarDados();
  }, [offset, limit]); // Monitora offset e limit: se mudarem, faz um novo fetch automático!

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        offset,
        setOffset,
        limit,
        setLimit,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Hook personalizado para os componentes usarem as informações de forma limpa
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts deve ser usado dentro de um ProductProvider");
  }
  return context;
};
