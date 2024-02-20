import { useEffect, useState } from "react";
import axios from "axios";
import DEFAULT_URL from "../Utils/Url";
import ItemCard from "./ItemCard";
import Search from "./Search";

const Body = () => {
  const [cards, setCards] = useState({
    next: null,
    prev: null,
    results: [],
  });
  const [changedUrl, setChangedUrl] = useState(DEFAULT_URL);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    const response = await axios.get(changedUrl);
    const data = response?.data;
    setCards({
      next: data?.next,
      prev: data?.previous,
      results: data?.results,
    });
  };
  useEffect(() => {
    fetchData();
  }, [changedUrl]);

  return (
    <div className="flex flex-col max-h-full min-h-[100vh] bg-orange-200 ">
      <h1 className="text-4xl text-center font-bold m-5">POKEDEX</h1>
      <Search updateSearch={setSearchTerm} />

      <h1 className="text-3xl text-center font-semibold">Pokemon List</h1>
      <div className="flex flex-wrap gap-6 m-10 ">
        {cards.results.map((p) => (
          <ItemCard url={p.url} key={p.name} />
        ))}
      </div>
      <div className="flex justify-center gap-5 m-5">
        <button
          className="px-6 py-2 rounded-md font-semibold bg-red-600 text-white"
          onClick={() => {
            setChangedUrl(cards.prev);
          }}
        >
          prev
        </button>
        <button
          className="px-6 py-2 rounded-md font-semibold bg-red-600 text-white"
          onClick={() => {
            setChangedUrl(cards.next);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Body;
