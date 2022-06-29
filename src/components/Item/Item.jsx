import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const detailUrl = `/plant/${item.id}`;
  return (
    <Link to={detailUrl}>
      <div className="mb-5 py-3 text-center" key={item.id}>
        <h3 className="text-3xl text-gray-900 mt-2 mb-4 font-medium title-font">
          {item.name}
        </h3>
        <img
          className="w-80 h-80 object-cover"
          src={item.img}
          alt={item.name}
        />

        <p className="mt-5 mb-3 text-xs text-gray-500">{item.description}</p>
        <p className="mt-4 text-green-700 text-md font-bold">$ {item.price}</p>
      </div>
    </Link>
  );
};

export default Item;
