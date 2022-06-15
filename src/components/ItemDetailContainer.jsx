import React, { useState, useEffect } from "react";
import { productos } from "../data/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const traerProducto = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos[2]);
      }, 600);
    });

    traerProducto
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
