import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PokeCard } from "./Component/PokeDetails/PokeCard";
import { DetailPage } from "./Component/PokeDetails/DetailPage";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PokeCard />} />
          <Route path="/pokedetails/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
