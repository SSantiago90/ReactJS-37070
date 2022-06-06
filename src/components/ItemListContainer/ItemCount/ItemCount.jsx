import { useState } from "react";

function ItemCount({ stock, initial }) {
  const [cant, setCount] = useState(initial);

  function suma() {
    /* Logica suma */
  }

  return (
    <div>
      <button onClick={() => {} /* callaback */}> - </button>
      <span> 0 </span>
      <button onClick={() => {} /* callaback */}> + </button>
      <br />
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
