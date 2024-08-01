import React, { useState, useEffect } from "react";
import HeroList from "./HeroList";
import "./App.css";

const App = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await fetch(
          "https://homologacao3.azapfy.com.br/api/ps/metahumans"
        );
        const data = await response.json();
        setHeroes(data);
      } catch (error) {
        console.error("Error fetching heroes:", error);
      }
    };

    fetchHeroes();
  }, []);

  return (
    <div className="App">
      <h1>Listagem de Heróis</h1>
      <HeroList heroes={heroes} />
    </div>
  );
};

export default App;
