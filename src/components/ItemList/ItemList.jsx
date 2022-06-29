import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div className="flex justify-around flex-wrap">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
