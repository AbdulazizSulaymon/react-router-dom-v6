import React from "react";
import { useParams } from "react-router-dom";
import getProducts from "../../data/products";
import ImageProductWrapper from "./ImageProductWrapper";

export default function ImageProduct() {
  const params = useParams();
  console.log(params.id);

  const products = getProducts();
  const product = products.find((item) => item.id == params.id);

  console.log(product);
  if (product) return <ImageProductWrapper src={product.img} />;
  else return <h3>Not Found Product By Id</h3>;
}
