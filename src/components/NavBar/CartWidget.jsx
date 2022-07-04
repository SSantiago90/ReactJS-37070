import React, { useContext } from "react";
import cartimg from "../../img/cartwidget.png";
import cartContext from "../../context/CartContext";

function CartWidget() {
  const { qntyInCart } = useContext(cartContext);

  return (
    <div>
      <img width="40" src={cartimg} alt="cart widget icon" />
      <span className="ml-2">{qntyInCart()}</span>
    </div>
  );
}

export default CartWidget;
