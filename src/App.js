import React, { useEffect, useState } from "react";
import "./App.css";
import HeroCard from "./HeroCard";
import BattleModal from "./BattleModal";

const App = () => {
  const [heroes, setHeroes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("https://homologacao3.azapfy.com.br/api/ps/metahumans")
      .then((response) => response.json())
      .then((data) => setHeroes(data));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectHero = (hero) => {
    setSelectedHeroes((prevSelected) => {
      if (prevSelected.includes(hero)) {
        return prevSelected.filter((h) => h.id !== hero.id);
      } else {
        return [...prevSelected, hero];
      }
    });
  };

  const handleBattle = () => {
    setShowModal(true);
  };

  const filteredHeroes = heroes.filter((hero) =>
    hero.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Listagem de Heróis</h1>
        <input
          type="text"
          placeholder="Pesquisar heróis..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button onClick={handleBattle} disabled={selectedHeroes.length < 2}>
          Batalhar
        </button>
      </header>
      <div className="hero-grid">
        {filteredHeroes.map((hero) => (
          <HeroCard
            key={hero.id}
            hero={hero}
            isSelected={selectedHeroes.includes(hero)}
            onSelect={handleSelectHero}
          />
        ))}
      </div>
      {showModal && (
        <BattleModal
          heroes={selectedHeroes}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default App;
