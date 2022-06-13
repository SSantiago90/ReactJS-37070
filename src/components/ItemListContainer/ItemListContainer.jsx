import React, { useState, useEffect } from "react";
import { productos } from "../../data/products";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //apis, llamados al backend
    const traerProductos = new Promise((res, rej) => {
      setTimeout(() => {
        res(productos);
      }, 500);
    });
    //console.log(traerProductos)
    traerProductos
      .then((res) => {
        //console.log(res)
        setProducts(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //console.log(products);

  return (
    <div className="container mx-auto mt-5">
      <div>{saludo}</div>
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;
