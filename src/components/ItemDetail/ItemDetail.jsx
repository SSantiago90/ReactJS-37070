import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
//7. Importamos el Hook useContext y el UserContext
import cartContext from '../../context/CartContext';
import ErrorMsg from "../ErrorMsg";


function ItemDetail({ item }) {
  const [isInCart, setIsInCart] = useState(false);

  //8 importamos el VALUE del Context   
  const { addToCart, cart, isInCartContext } = useContext(cartContext);

  console.log(cart);

  function handleAddtoCart(cant) {
    
    addToCart( item, cant )

    setIsInCart(true);
  }

  return (
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <img width="600" src={item.img} alt={item.name} />
        </div>
      </div>
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h3 className="text-3xl text-gray-900 mt-2 mb-4 font-medium title-font">
          {item.name}
        </h3>

        <p className="mt-5 mb-3 text-xs text-gray-500">{item.description}</p>
        <p className="mt-4 text-green-700 text-md font-bold">$ {item.price}</p>

        {/* -------------------- Rendering condicional -------------------- */}
        {/* si no tenemos stock */}
        {item.stock <= 0 && <ErrorMsg isWarning={true} text="No hay stock" />}

        {/* si el item ya fue agregado al carrito  */}
        {isInCart 
        ?  <Link className="bg-green-500 py-2 px-8 rounded-md font-bold text-white" to="/cart">Ir al carrito</Link>
        :  <ItemCount stock={item.stock} initial={1} onAdd={handleAddtoCart} />
        }

        {/* si el item fue agregado al Context (similar a anterior) */}
        { isInCartContext(item.id) && <button  className="mt-3 bg-red-500 py-2 px-8 rounded-md font-bold text-white">
          Remover del carrito
          </button> }       
      </div>
    </div>
  );
}

export default ItemDetail;
