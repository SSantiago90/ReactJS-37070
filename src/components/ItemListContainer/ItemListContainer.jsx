import React, { useState, useEffect } from "react";
import { productos } from "../../data/products";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //apis, llamados al backend
    const traerProductos = new Promise((res, rej) => {
      setTimeout(() => {
        res(productos);
      }, 600);
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
    <div className="text-center container mx-auto mt-5">
      <div className="font-bold text-pink-600 text-4xl mb-2">{greeting}</div>
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;
