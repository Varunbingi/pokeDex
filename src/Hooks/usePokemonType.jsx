import axios from "axios";
import { useEffect, useState } from "react";

const usePokemonType = (type) => {
  useEffect(() => {
    fetchData();
  }, [type]);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/type/" + type);
    const result = response.data;
    const pokemon = result.pokemon
      .map((P, idx) => {
        if (idx < 20) {
          return P.pokemon;
        }
        return;
      })
      .filter((pokemonName) => pokemonName !== undefined);
    console.log(pokemon);

    setData({
      pokemon: pokemon,
    });
  };
  return [data];
};
export default usePokemonType;
