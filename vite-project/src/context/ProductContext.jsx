import React, { createContext, useState, useEffect, useContext } from "react";
import { buscarProdutos } from "../services/api";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce de 400ms para aguardar a digitação finalizar
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 400);

    return () => clearTimeout(handler);
  }, [search]);

  // Reseta para a página 0 quando uma nova busca é consolidada
  useEffect(() => {
    setOffset(0);
  }, [debouncedSearch]);

  // Requisição conectada diretamente à API
  useEffect(() => {
    const carregarDados = async () => {
      try {
        setLoading(true);
        setError(null);
        const dados = await buscarProdutos(offset, 20, debouncedSearch);
        setProducts(dados);
      } catch (err) {
        setError("Não foi possível carregar os produtos.");
      } finally {
        setLoading(false);
      }
    };

    carregarDados();
  }, [offset, debouncedSearch]);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        offset,
        setOffset,
        limit: 20,
        search,
        setSearch,
        totalProdutos: products.length,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
