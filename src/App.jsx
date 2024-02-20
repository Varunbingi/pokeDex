import "./App.css";
import Body from "./Component/Body";
import { Routes, Route } from "react-router-dom";
import PokemonCards from "./Component/PokemonCards";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/:id" element={<PokemonCards />} />
      <Route path="*" element={<h1>Page NotFound</h1>} />
    </Routes>
  );
}

export default App;
