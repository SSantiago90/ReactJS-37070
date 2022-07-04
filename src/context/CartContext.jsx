import React, { useState, createContext } from "react";

const cartContext = createContext();

export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(item, cant) {
    if (isInCartContext(item.id)) {
      const idToAdd = item.id;
      let itemToAdd = cart.find((cadaItem) => cadaItem.id === idToAdd);
      itemToAdd.qnty += cant;

      let newCart = cart.filter((cadaItem) => cadaItem.id !== item.id);
      setCart([...newCart, { ...itemToAdd }]);
    } else {
      setCart([...cart, { ...item, qnty: cant }]);
    }
  }

  function removeItem(id) {
    let newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }

  function isInCartContext(id) {
    return cart.some((item) => item.id === id);
  }

  function qntyInCart() {
    let total = 0;
    cart.forEach((item) => (total = total + item.qnty));
    return total;
  }

  function totalPriceCart() {
    let total = 0;
    cart.forEach((item) => (total = total + item.qnty * item.price));
    return total;
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        clearCart,
        qntyInCart,
        removeItem,
        totalPriceCart,
        isInCartContext,
        addToCart,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

//5. exportar el Provider y el Context
export default cartContext;
