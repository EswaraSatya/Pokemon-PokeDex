import * as React from "react";
import { CardMedia } from "@mui/material";
import { useParams } from "react-router-dom";
import "./PokeCard.scss";
import Header from "../Header/Header";
import PokemonData from './NewPokemon.json'
import Color from "color";


import findColor from './findColor.json'
import { formatPokemonId } from "./PokeCard";
import { ProgressBar } from "react-bootstrap";

export const DetailPage = () => {

  let { id } = useParams();


  const filteredData = Object.fromEntries(
    Object.entries(PokemonData[0]).filter(([key, value]) => {
      return value.id == id;
    })
  );
  const filterColor = findColor.filter((item) => item.id == id);
  function generateLighterColor(color, percentage) {
    const baseColor = Color(color);
    return baseColor.lighten(percentage).hex();
  }

  // Use the function to generate a lighter shade (e.g., 20% lighter)
  const lighterColor = generateLighterColor(filterColor[0].Co, 0.3837);


  return (
    <div>
      <Header filterColor={filterColor} lighterColor={lighterColor} />
      <>
        <h1 className="pokename">{(filteredData[id].N).toUpperCase()}</h1>
        <span className="poketype" style={{ backgroundColor: lighterColor }}>{filterColor[0].G}</span>
        <div className="pokedetailsection">

          <div style={{ width: "33%" }} >
            <h1>{"Id"} : {filteredData[id].id}</h1>
            <h1>{"Height"} : {filteredData[id].H / 10 + "m"}</h1>
            <h1>{"Weight"} : {filteredData[id].W / 10 + "kg"}</h1>
            <h1>{"Abilities"} : {filteredData[id].Ab.map((data) => {
              return (
                <div>
                  {data.n}
                </div>
              )
            })}</h1>
            <h1></h1>

          </div>

          <div style={{ width: "33%" }} >
            <CardMedia
              component="img"
              image={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${formatPokemonId(id)}.png`}
              alt="green iguana"
            // style={{
            //   height: "45%",
            //   width: "31%",
            // }}
            />
          </div>

          <div className="inner2" style={{ width: "33%" }} >
            {filteredData[id].St.map((stat, index) => (
              <span key={index}>
                <h1 key={stat.n}>
                  {(stat.n).toUpperCase()} : {stat.bs}
                </h1>
              </span>
            ))}

          </div>
        </div>
      </>
    </div >
  );
};
