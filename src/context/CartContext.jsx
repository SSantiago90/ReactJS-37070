import React, { useState, createContext } from "react";

//1- Importamos y inicializamos nuestro CreateContext
const cartContext = createContext();

// 2. definimos nuestro Provider
//named export
export function CartContextProvider( props ){

  const [cart, setCart] = useState([ {item: "Item A", cant: 2}, {item: "Item B", cant: 5}]);
  
  function addToCart(item, cant){
      setCart( {
        ...item,
        cantidad : cant
       })
  }
  
  //3. pasamos al Provider el "value" para los componentes que consuman el context
  //4. retornamos el Context Provider con el value
  return <cartContext.Provider value={ { cart, otrovalor: "Hola", addToCart } }>
      {props.children}
  </cartContext.Provider>
}

//5. exportar el Provider y el Context
export default cartContext