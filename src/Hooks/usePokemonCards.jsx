import axios from "axios";
import { useEffect, useState } from "react";
import DEFAULT_URL from "../Utils/Url";

const usePokemonCards = (id) => {
  const [cardData, setCardData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(DEFAULT_URL + id);
    const data = response.data;
    const type = data.types.map((p) => p.type);
    setCardData({
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      types: type,
      image1: data.sprites.back_default,
      image3: data.sprites.back_shiny,
      image2: data.sprites.front_default,
      image4: data.sprites.front_shiny,
    });
  };
  useEffect(() => {
    fetchData();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id]);
  return [cardData];
};

export default usePokemonCards;
