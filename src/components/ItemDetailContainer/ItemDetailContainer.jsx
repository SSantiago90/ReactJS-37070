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
       resolve(itemResult);
       /* reject("error mensaje") */
      },2000);
    });
  }

  useEffect(() => {
    traerProducto()
      .then((res) => {
        setProduct(res);        
      })
      .catch((error) => {
        setIsError(error);        
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if(isLoading){
    return <div className="container mx-auto">
      <RotateLoader color={"red"} size={20} />
    </div>
  }

  if(isError){
      return <ErrorMsg isWarning={false} text={isError}/>
  }
  
  return (
    <div className="text-center container mx-auto mt-5">
      <div className="font-bold text-pink-600 text-4xl mb-2">{greeting}</div>  
      <ItemDetail item={product} />
    </div>
  );
  
};

export default ItemDetailContainer;
