import React, { useState, useEffect } from "react";

const Product = ({ product }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (product !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
        .then((response) => response.json())
        .then((json) => setData(json));
  }, [product]);

  if (data === null) return null;

  return (
    <div>
      <h1>{data.nome}</h1>
      <p>R$: {data.preco}</p>
      <p>Produto: {data.descricao}</p>
      <img
        src={data.fotos[0].src}
        alt={data.fotos[0].titulo}
        style={{ width: "350px" }}
      />
      <p>{data.vendido ? "Fora de estoque" : "Disponível para compra."}</p>
    </div>
  );
};

export default Product;
