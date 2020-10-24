import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const Product = () => {
  const data = useContext(GlobalContext);
  return <div>{data.nome}</div>;
};

export default Product;
