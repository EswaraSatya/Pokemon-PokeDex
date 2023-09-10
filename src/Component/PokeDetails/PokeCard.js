import React, { useEffect, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import { Card, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./PokeCard.scss";
import Types from "../Types/Types";
import { motion } from "framer-motion";
import PokeBall from "./PokeBall.svg";
import styled from "styled-components";
import TopBar from "../searchbar/SearchBar";


const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  height: 632px;
  /* padding-bottom: 140px; */

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #fff;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  ::-webkit-scrollbar {
    width: 6px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0%);
    background-color: #e5e5e5;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

const Wrapper = styled.div`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-left: 64px;
          box-sizing: border-box;
          padding-top: 75px;
          overflow-y: scroll;

          ::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5; /* Background color of the scrollbar track */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888; /* Color of the scrollbar thumb */
    border-radius: 4px; /* Rounded corners for the thumb */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Color of the thumb on hover */
  }
`;


export const PokeCard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
 
  const fetchData = () => {
    fetch("https://6347aadd0484786c6e85792f.mockapi.io/PokemonData")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  };

  const searchItems = (searchValue) => {
    setSearchText(searchValue);
    if (searchText !== "") {
      const filteredData = users.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchText.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(users);
    }
  };

  const routeChange = (id) => {
    navigate(`/pokedetails/${id}`);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  let newUsers = [];
  searchText.length > 0
    ? (newUsers = filteredResults)
    : (newUsers = users);
  return (
    <>
      {!isLoading && <TopBar searchItems={searchItems} />}
      <Wrapper
        style={{
          backgroundColor: !isLoading ? "white" : "",
        }}
      >
        <AppWrapper>
          {isLoading ? (
            <div style={{
              marginTop: "96%",
              marginLeft: "-50%"
            }} > <motion.div
              className="box"
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"]
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1
              }}
              style={{
                position: 'relative',
              }}
            >
                <img
                  src={PokeBall}
                  alt="Pokeball"
                  style={{
                    height: '50px', // Set the desired size of the image
                    position: 'absolute', // Set the position of the image to absolute
                    top: '50%', // Position the image at the vertical center of the box
                    left: '50%', // Position the image at the horizontal center of the box
                    transform: 'translate(-50%, -50%)', // Center the image both horizontally and vertically
                  }}
                />
              </motion.div></div>
          ) : (
            newUsers && newUsers.map(({ id, name, url, type }) => (
              <div>
                <Card
                  className="card2"
                  style={{
                    color: "white",
                    borderRadius: "0"
                  }}
                  key={id}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#fff",
                    border: "1px solid rgba(0,0,0,.125)",
                    width: "9rem",
                    height: "12rem",
                    padding: "0.5rem 0.3rem 0.3rem",
                    fontSize: "medium",
                    color: "grey",
                    transition: "background-color 5.3s ease", // Adjust transition duration
                  }}
                >
                  <CardActionArea>
                    <div style={{ display: "flex" }}>
                      <div
                        style={{
                          flex: "0 0 75%",
                          flexGrow: 1,
                          maxWidth: "75%",
                          textAlign: "left",
                          position: "relative",
                          top: "-6px",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "1.7rem",
                            margin: 0,
                            color: "#808080",
                          }}
                        >
                          {id}
                        </p>
                        <p
                          style={{
                            fontSize: "1rem",
                            margin: 0,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            textTransform: "capitalize",
                            whiteSpace: "nowrap",
                            color: "#808080",
                          }}
                        >
                          {name}
                        </p>
                      </div>
                      <Types type={type} />
                    </div>
                    <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} whileTap={{ scale: 0.8 }}
                    >
                      <CardMedia
                        onClick={() => routeChange(id)}
                        component="img"
                        height="180"
                        image={url}
                        alt="green iguana"
                        style={{
                          size: "10px",
                          width: "70%",
                          height: "auto",
                          marginLeft: "20%",
                          marginTop: "17%"
                        }}
                      />
                    </motion.div>
                  </CardActionArea>
                </Card>
              </div>
            ))
          )}
        </AppWrapper>
      </Wrapper >
    </>
  );
};
