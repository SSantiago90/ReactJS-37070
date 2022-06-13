import React from "react";

function ItemDetail({ item }) {
  return (
    <div>
      <h3 className="text-3xl text-gray-900 mt-2 font-medium title-font">
        {item.name}
      </h3>
      <img width="200" src={item.img} alt={item.name} />
      <p>{item.description}</p>
      <hr />
      <br />
    </div>
  );
}

export default ItemDetail;
