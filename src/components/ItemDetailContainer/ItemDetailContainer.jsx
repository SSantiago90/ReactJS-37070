import React, { useState, useEffect } from "react";
import { productos } from "../../data/products";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState({});
  const { itemId } = useParams();

  function traerProducto() {
    return new Promise((resolve, reject) => {
      const itemResult = productos.find((item) => item.id === parseInt(itemId));
      setTimeout(() => {
        resolve(itemResult);
      }, 600);
    });
  }

  useEffect(() => {
    traerProducto()
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="text-center container mx-auto mt-5">
      <div className="font-bold text-pink-600 text-4xl mb-2">{greeting}</div>
      <ItemDetail item={product} />
    </div>
  );
};

export default ItemDetailContainer;
