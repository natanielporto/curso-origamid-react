import React, { useState, useEffect } from "react";
import Product from "./Components/Product4/Product";

const App = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const localProduct = window.localStorage.getItem("product");
    if (localProduct !== null) setProduct(localProduct);
  }, []);

  useEffect(() => {
    if (product !== null) window.localStorage.setItem("product", product);
  }, [product]);

  function handleClick({ target }) {
    setProduct(target.innerText);
  }

  return (
    <div>
      <h1>Mostrando: {product}</h1>
      <button style={{ marginRight: "24px" }} onClick={handleClick}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      <Product product={product} />
    </div>
  );
};

export default App;
