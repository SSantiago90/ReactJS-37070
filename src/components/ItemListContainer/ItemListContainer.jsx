import React from "react";

const arrayData = [
  {
     id: "1",
     name: "Mi producto",
     description: "El mejor producto de la tienda",
     stock: 9,
   },
  {
     id: "2",
     name: "Otro Producto",
     description: "Otro item de mi tienda",
     stock: 5,
   },
   {
    id: "3",
    name: "Otro Producto Mas",
    description: "Otro item de mi super tienda",
    stock: 5,
  },
  {
    id: "4",
    name: "Mi producto",
    description: "El mejor producto de la tienda",
    stock: 9,
  },
 {
    id: "5",
    name: "Otro Producto",
    description: "Otro item de mi tienda",
    stock: 5,
  },
  {
   id: "6",
   name: "Otro Producto Mas",
   description: "Otro item de mi super tienda",
   stock: 5,
 }
]

function ItemListContainer(props) {
  // Una promise que me "resuelva" o devuelva los items
  // una llamada a la promise (o la "API") y guardar la respuesta en el Estado

  // este llamado a la Promise tiene que estar dentro de un useEffect();
  /* apiCall().then( respuesta => setState(respuesta)) */

  return (
    <div className="container mx-auto mt-5">      
        {props.greeting}
        {/* Esto deberia ser tarea del <ItemList/> */}
        { arrayData.map( item =>{
            return (              
              /*  <Item item={item}> */
                <div key={item.id}>
                  <h3 className="text-3xl text-gray-900 mt-2 font-medium title-font">{item.name}</h3>
                  <p>{item.description}</p>
                  <hr/><br/><br/>
                </div>
            )
          })
        }
    </div>
  );
}

export default ItemListContainer;
