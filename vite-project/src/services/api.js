export async function buscarProdutos(offset, limit) {
  try {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`,
    );

    if (!response.ok) {
      throw new Error(`Erro na requisição: Status ${response.status}`);
    }
    const data = await response.json();
    console.log("Dados da api ", data);
    return data;
  } catch (error) {
    console.error("Erro ao buscar produtos: ", error);
    throw error;
  }
}
