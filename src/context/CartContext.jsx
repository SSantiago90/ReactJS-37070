import React, { useState, createContext } from "react";

//1- Importamos y inicializamos nuestro CreateContext
const cartContext = createContext();

// 2. definimos nuestro Provider
//named export
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
  
  //3. pasamos al Provider el "value" para los componentes que consuman el context
  //4. retornamos el Context Provider con el value
  return <cartContext.Provider value={ { cart, isInCartContext, otrovalor: "Hola", addToCart } }>
      {props.children}
  </cartContext.Provider>
}

//5. exportar el Provider y el Context
export default cartContext