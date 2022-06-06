import React from "react";
import ItemCount from "./ItemCount/ItemCount";

function ItemListContainer(props) {
  return (
    <div>
      <h1>{props.greet}</h1>
      <ItemCount stock={5} initial={1} />
    </div>
  );
}

export default ItemListContainer;
