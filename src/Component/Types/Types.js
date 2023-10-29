import React from "react";
import "../PokeDetails/PokeCard.scss";

const Types = ({ type }) => {
  const getTypeClassName = (type) => {
    switch (type) {
      case "Grass":
        return "grass-type";
      case "Poison":
        return "poison-type";
      case "Fire":
        return "fire-type";
      case "Water":
        return "water-type";
      case "Bug":
        return "bug-type";
      case "Flying":
        return "flying-type";
      case "Electric":
        return "electric-type";
      case "Ground":
        return "ground-type"; // Add Ground type
      case "Fairy":
        return "fairy-type"; // Add Fairy type
      case "Fighting":
        return "fighting-type"; // Add Fighting type
      case "Psychic":
        return "psychic-type"; // Add Psychic type
      case "Rock":
        return "rock-type"; // Add Rock type
      case "Steel":
        return "steel-type"; // Add Steel type
      case "Ice":
        return "ice-type"; // Add Ice type
      case "Ghost":
        return "ghost-type"; // Add Ghost type
      case "Normal":
        return "normal-type"; // Add Ghost type
      case "Dark":
        return "normal-type"; // Add Ghost type
      case "Dragon":
        return "normal-type"; // Add Ghost type
      default:
        return "";
    }
  };

  return (
    <div
      style={{
        flex: "0 0 25%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        flexGrow: 1,
        maxWidth: "100%",
        alignItems: "flex-end",
        gap: "4px",
      }}
    >
      {type[0]?.n === "grass" || type[1]?.n === "grass" ? (
        <div className={`type-icon ${getTypeClassName("Grass")}`}>
          <img
            className="grass"
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/grass.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0]?.n === "poison" || type[1]?.n === "poison" ? (
        <div className={`type-icon ${getTypeClassName("Poison")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/poison.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0]?.n === "fire" || type[1]?.n === "fire" ? (
        <div className={`type-icon ${getTypeClassName("Fire")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/fire.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0]?.n === "water" || type[1]?.n === "water" ? (
        <div className={`type-icon ${getTypeClassName("Water")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/water.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0]?.n === "bug" || type[1]?.n === "bug" ? (
        <div className={`type-icon ${getTypeClassName("Bug")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/bug.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0]?.n === "flying" || type[1]?.n === "flying" ? (
        <div className={`type-icon ${getTypeClassName("Flying")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/flying.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0]?.n === "electric" || type[1]?.n === "electric" ? (
        <div className={`type-icon ${getTypeClassName("Electric")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/electric.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0]?.n === "ground" || type[1]?.n === "ground" ? (
        <div className={`type-icon ${getTypeClassName("Ground")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/ground.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0]?.n === "fairy" || type[1]?.n === "fairy" ? (
        <div className={`type-icon ${getTypeClassName("Fairy")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/fairy.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0]?.n === "fighting" || type[1]?.n === "fighting" ? (
        <div className={`type-icon ${getTypeClassName("Fighting")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/fighting.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0]?.n === "psychic" || type[1]?.n === "psychic" ? (
        <div className={`type-icon ${getTypeClassName("Psychic")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/psychic.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0]?.n === "rock" || type[1]?.n === "rock" ? (
        <div className={`type-icon ${getTypeClassName("Rock")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/rock.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0]?.n === "steel" || type[1]?.n === "steel" ? (
        <div className={`type-icon ${getTypeClassName("Steel")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/steel.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0]?.n === "ice" || type[1]?.n === "ice" ? (
        <div className={`type-icon ${getTypeClassName("Ice")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/ice.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0]?.n === "ghost" || type[1]?.n === "ghost" ? (
        <div className={`type-icon ${getTypeClassName("Ghost")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/ghost.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0]?.n === "normal" || type[1]?.n === "normal" ? (
        <div className={`type-icon ${getTypeClassName("Normal")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/normal.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0]?.n === "dark" || type[1]?.n === "dark" ? (
        <div className={`type-icon ${getTypeClassName("Dark")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/dark.png"
            alt="icon hover"
          />
        </div>
      ) : null}
      {type[0]?.n === "dragon" || type[1]?.n === "dragon" ? (
        <div className={`type-icon ${getTypeClassName("Dragon")}`}>
          <img
            src="https://pokedex.hybridshivam.com/assets/type-icons/png/dragon.png"
            alt="icon hover"
          />
        </div>
      ) : null}
    </div>
  );
};

export default Types;
