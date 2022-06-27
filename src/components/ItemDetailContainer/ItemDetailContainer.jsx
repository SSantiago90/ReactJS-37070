import React, { useState, useEffect } from "react";
import { productos } from "../../data/products";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import RotateLoader from 'react-spinners/RotateLoader'
import ErrorMsg from "../ErrorMsg";

const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { itemId } = useParams();

  function traerProducto() {
    return new Promise((resolve, reject) => {
      const itemResult = productos.find((item) => item.id === parseInt(itemId));
      setTimeout(() => {
        if (itemResult === undefined) {         
          reject(new Error("No se encontró el producto"));
        }

       resolve(itemResult);
      },1500);
    });
  }

  useEffect(() => {
    traerProducto()
      .then((res) => {
        setProduct(res);        
      })
      .catch((error) => {
        console.error(error);
        setIsError(error.message);        
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if(isLoading){
    return (
    <div className="mx-auto container h-96 flex justify-around">
      <div className="flex-1 flex justify-center items-center">
      <RotateLoader className="mx-auto align-middle" color={"rgb(217, 4, 121)"} size={20} />
      </div>
    </div>
    )
  }

 
  
  return (
    <div className="text-center container mx-auto mt-5 h-screen">
      <div className="font-bold text-pink-600 text-4xl mb-2">{greeting}</div>  
      {isError && <ErrorMsg text={isError} />}     
      {product.id && <ItemDetail item={product} />}
    </div>
  );
  
};

export default ItemDetailContainer;
