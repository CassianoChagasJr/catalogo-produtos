// src/context/ProductContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";
import { buscarProdutos } from "../services";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mantemos apenas o offset no estado, que muda ao clicar em "Anterior/Próximo"
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        setLoading(true);
        setError(null);

        // Passando o valor estático (20) direto na função de consumo
        const dados = await buscarProdutos(offset, 20);
        setProducts(dados);
      } catch (err) {
        setError(
          "Não foi possível carregar os produtos. Tente novamente mais tarde.",
        );
      } finally {
        setLoading(false);
      }
    };

    carregarDados();

    // 🌟 CORREÇÃO AQUI: Removemos o 'limit' daqui de dentro, monitorando apenas o 'offset'
  }, [offset]);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        offset,
        setOffset,
        limit: 20, // Mantido de forma estática aqui para o Grid.jsx consumir sem quebrar os cálculos
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts deve ser usado dentro de um ProductProvider");
  }
  return context;
};
