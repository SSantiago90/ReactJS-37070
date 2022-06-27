import React from "react";

function ItemDetail({ item }) {
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
      </div>
    </div>
  );
}

export default ItemDetail;
