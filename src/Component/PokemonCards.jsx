import { useParams } from "react-router-dom";
import usePokemonCards from "../Hooks/usePokemonCards";
import TypeOfCards from "./TypeOfCards";

const PokemonCards = () => {
  const { id } = useParams();

  const [cardData] = usePokemonCards(id);
  if (!cardData || cardData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-orange-200 p-5 ">
      <h1 className="text-3xl text-center font-bold ">{cardData.name}</h1>
      <div className="flex flex-col border-b-2 border-black p-2">
        <div className="flex  flex-wrap gap-4 justify-around m-5 ">
          <img
            src={cardData.image1}
            alt=""
            className="h-64 w-64 border-2 border-black rounded-md"
          />
          <img
            src={cardData.image2}
            alt=""
            className="h-64 w-64 border-2 border-black rounded-md"
          />
          <img
            src={cardData.image3}
            alt=""
            className="h-64 w-64 border-2 border-black rounded-md"
          />
          <img
            src={cardData.image4}
            alt=""
            className="h-64 w-64 border-2 border-black rounded-md"
          />
        </div>
        <div className="flex flex-col items-center text-xl gap-5">
          <h1>Weight : {cardData.weight}</h1>
          <h1>Height : {cardData.height}</h1>
          <div className="flex  py-2 gap-2">
            <h1>Types: </h1>
            {cardData.types.map((p) => (
              <span key={p.name}> {p.name} </span>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center font-bold text-2xl">
          similar type of cards
        </h1>
        <TypeOfCards type={cardData.types[0].name} />
      </div>
    </div>
  );
};
export default PokemonCards;
