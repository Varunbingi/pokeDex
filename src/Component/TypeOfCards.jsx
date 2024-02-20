import usePokemonType from "../Hooks/usePokemonType";
import ItemCard from "./ItemCard";

const TypeOfCards = ({ type }) => {
  const [data] = usePokemonType(type);
  if (data.length == 0) {
    return;
  }
  return (
    <div className="flex flex-wrap gap-6 m-10 ">
      {data.pokemon.map((p) => (
        <ItemCard url={p.url} key={p.name} />
      ))}
    </div>
  );
};
export default TypeOfCards;
