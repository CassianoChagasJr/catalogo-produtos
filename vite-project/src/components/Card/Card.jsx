import { buscarProdutos } from "../../services";

function Card() {
  let registro = buscarProdutos(0, 10);
  return (
    <>
      <h2></h2>
    </>
  );
}

export { Card };
