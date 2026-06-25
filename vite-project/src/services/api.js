
export async function buscarProdutos(offset = 0, limit = 20, title = "") {
  try {
    // URL Base com a paginação padrão
    let url = `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`;

    // Se o usuário digitou algo, concatenamos o filtro de busca textual da API
    if (title.trim() !== "") {
      url += `&title=${encodeURIComponent(title)}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro na requisição: Status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar produtos: ", error);
    throw error;
  }
}

export async function categoriasGlobais() {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/categories");

    if (!response.ok) {
      throw new Error(`Erro ao buscar categorias - ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Erro ao carregar categorias", err);
    throw err;
  }
}
