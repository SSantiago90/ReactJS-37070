/* Importamos el Hook de estado */

function ItemCount({ stock, initial }) {
  /* Definimos el estado con useState */

  function suma() {
    /* Logica suma */
  }

  /* Función de resta  */

  return (
    <div>
      <button /* callaback funcion resta */> - </button>
      <span>{/* mostramos el estado */} </span>
      <button /* callaback funcion suma*/> + </button>
      <br />
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
