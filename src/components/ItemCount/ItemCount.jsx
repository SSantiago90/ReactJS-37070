import { useEffect } from "react";
import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  useEffect( () => {
    console.log("render itemcount");
    return(
      () => { console.log("unmount itemcount") }
    )
  },[])

  function suma() {
    if (count < stock) setCount(count + 1);
  }

  function resta() {
    if (count > 1) setCount(count - 1);
  }

  function addToCart(){
    onAdd(count);
  }

  return (
    <div className="container mt-5">
      <div className="flex justify-around py-2 border-2">
        <button onClick={resta} className="text-2xl font-bold text-red-700">
          -
        </button>
        <span className="text-2xl font-bold text-gray-700">{count}</span>
        <button onClick={suma} className="text-2xl font-bold text-green-700">
          +
        </button>
      </div>
      <button
        className="mt-3 bg-blue-500 py-2 px-8 rounded-md font-bold text-white"
        onClick={ addToCart }
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
