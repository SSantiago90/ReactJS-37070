const Item = ({ item }) => {
  return (
    <div className="mb-5 py-3 itemlist-card text-center" key={item.id}>
      <h3 className="text-3xl text-gray-900 mt-2 mb-4 font-medium title-font">
        {item.name}
      </h3>
      <img className="itemlist-card-img" src={item.img} alt={item.name} />
      <p className="mt-5 mb-3 text-xs text-gray-500">{item.description}</p>
      <p className="mt-4 text-green-700 text-md font-bold">$ {item.price}</p>
    </div>
  );
};

export default Item;
