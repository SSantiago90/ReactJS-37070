import { useContext } from "react";
import cartContext from "../../context/CartContext";

function CartView() {
  const { cart } = useContext(cartContext);

  return (
    <>
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      {cart.map((item) => (
        <div key={item.id} className="bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div className="mb-5 py-3 text-center" key={item.id}>
            <h3 className="text-3xl text-gray-900 mt-2 mb-4 font-medium title-font">
              {item.name}
            </h3>          
            <p className="mt-4 text-green-700 text-md font-bold">
              $ {item.price}
            </p>
            <p>Cantidad de unidades: {item.qnty} </p>
            <button className="bg-red-500 py-2 px-8 rounded-md font-bold text-white mt-5">X</button>
          </div>
        </div>
      ))}    
    </div>
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <button className="bg-blue-500 py-2 px-8 rounded-md font-bold text-white mx-auto">Finalizar Compra</button>
      </div>
    </>
  );
}

export default CartView;
