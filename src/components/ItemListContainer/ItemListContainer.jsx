import React from "react";

function ItemListContainer(props) {
  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl text-gray-900 mt-2 font-medium title-font">
        {props.greeting}
      </h1>
    </div>
  );
}

export default ItemListContainer;
