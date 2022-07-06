import { useContext } from "react";
import cartContext from "../../context/CartContext";

import { createBuyOrder } from "../../services/firestore";
import CartForm from "./CartForm";

function CartView() {
  const { cart, removeItem, clearCart, totalPriceCart } = useContext(cartContext);  

  return (
    <>
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
          >
            <div className="mb-5 py-3 text-center">
              <h3 className="text-3xl text-gray-900 mt-2 mb-4 font-medium title-font">
                {item.name}
              </h3>
              <p className="mt-4 text-green-700 text-md font-bold">
                $ {item.price}
              </p>
              <p>Cantidad de unidades: {item.qnty} </p>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 py-2 px-8 rounded-md font-bold text-white mt-5"
              >
                X
              </button>
              <p>
                Subtotal:{" "}
                <span className="text-green-600">
                  ${item.price * item.qnty}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div>
          <p className="text-2x1">
            Total a pagar: ${totalPriceCart().toFixed(2)}{" "}
          </p>
        </div>

       <CartForm cart={cart} totalPriceCart={totalPriceCart} clearCart={clearCart} createBuyOrder={createBuyOrder} />
      </div>
    </>
  );
}

export default CartView;
