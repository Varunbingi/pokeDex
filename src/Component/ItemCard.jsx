import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ url }) => {
  const [pokemonCard, setPokemonCard] = useState([]);
  const fetchData = async (url) => {
    const response = await axios.get(url);
    const data = response.data;

    setPokemonCard({
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
    });
  };
  useEffect(() => {
    fetchData(url);
  }, [url]);

  return (
    <Link to={`/${pokemonCard.id}`}>
      <div className="flex flex-col border-2 border-black rounded-md hover:bg-orange-300 hover:scale-105 h-80 w-64">
        <h1 className="text-2xl text-center py-2 font-semibold">
          {pokemonCard.name}
        </h1>
        <img src={pokemonCard.image} alt="" />
      </div>
    </Link>
  );
};
export default ItemCard;
