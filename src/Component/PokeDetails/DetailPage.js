import * as React from "react";

import { CardMedia } from "@mui/material";
import { useParams } from "react-router-dom";
import "./PokeCard.scss";
import Header from "../Header/Header";
import PokemonData from './NewPokemon.json'


import findColor from './findColor.json'
import { formatPokemonId } from "./PokeCard";

export const DetailPage = () => {

  let { id } = useParams();


  const filteredData = Object.fromEntries(
    Object.entries(PokemonData[0]).filter(([key, value]) => {
      return value.id == id;
    })
  );

  const filterColor = findColor.filter((item) => item.id == id);


  return (
    <div>
      <Header filterColor={filterColor} />
      <>
        <h1 className="pokename">{(filteredData[1].N).toUpperCase()}</h1>
        <span className="poketype">{filterColor[0].G}</span>
        <div className="pokedetailsection">
          <CardMedia
            component="img"
            image={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${formatPokemonId(id)}.png`}
            alt="green iguana"
            style={{
              height: "45%",
              width: "31%",
            }}
          />
          <div className="inner2">
            <div className="innerattack">
              {filteredData[1].St.map((stat) => (
                <h1 key={stat.n}>
                  {(stat.n).toUpperCase} : {stat.bs}
                </h1>
              ))}
            </div>
          </div>

        </div>
      </>
    </div >
  );
};
