import React, { useState, useEffect } from "react";
import { productos } from "../data/products";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState({});
  const { itemId } = useParams();

  console.log("parametros:",itemId)

  useEffect(() => {
    const traerProducto = new Promise((resolve, reject) => {
      setTimeout(() => {        
        const itemFound = productos.find( plant =>{
              return plant.id === parseInt(itemId);
          })      
          resolve(itemFound); 
      }, 600);
    });

    traerProducto
      .then((res) => {        
        setProduct(res);
      })
  }, [itemId]);

  return (
    <div className="text-center container mx-auto mt-5">
      <div className="font-bold text-pink-600 text-4xl mb-2">{greeting}</div>
      <ItemDetail item={product} />
    </div>
  );
};

export default ItemDetailContainer;
