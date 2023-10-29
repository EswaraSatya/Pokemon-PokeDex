import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PokeCard } from "./Component/PokeDetails/PokeCard";
import { DetailPage } from "./Component/PokeDetails/DetailPage";
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const PokeCard = React.lazy(() => import('./Component/PokeDetails/PokeCard'));
const DetailPage = React.lazy(() => import('./Component/PokeDetails/DetailPage'));

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/" element={<PokeCard />} />
            <Route path="/pokedetails/:id" element={<DetailPage />} />
          </Suspense>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
