import React from "react";
import Menu from "../components/Menu";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  let {id, name}=useParams();
  return (
    <div>
      <Menu />
      <p>{id}</p>
      <p>{name}</p>
      <h1>This is Product Page</h1>
    </div>
  );
};

export default ProductPage;
