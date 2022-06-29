import React, { useState, createContext } from "react";

const cartContext = createContext();

export function CartContextProvider( props ){

  const [cart, setCart] = useState([]);
  
  function addToCart(item, cant){     
        setCart([...cart,
           {...item, qnty:cant}
          ]);
  }

  function isInCartContext(id){
    return cart.some( item => item.id === id );
  }
  
  return <cartContext.Provider value={ { cart, isInCartContext, otrovalor: "Hola", addToCart } }>
      {props.children}
  </cartContext.Provider>
}

export default cartContext