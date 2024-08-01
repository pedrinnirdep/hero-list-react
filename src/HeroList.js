import React, { useState } from "react";
import HeroCard from "./HeroCard";
import BattleModal from "./BattleModal";
import "./HeroList.css";

const HeroList = ({ heroes }) => {
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectHero = (hero) => {
    const newSelectedHeroes = selectedHeroes.includes(hero)
      ? selectedHeroes.filter((h) => h !== hero)
      : [...selectedHeroes, hero];

    setSelectedHeroes(newSelectedHeroes);

    if (newSelectedHeroes.length === 2) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedHeroes([]);
  };

  const filteredHeroes = heroes.filter((hero) =>
    hero.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="hero-list">
      <input
        type="text"
        placeholder="Pesquisa por nome"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="hero-cards-container">
        {filteredHeroes.map((hero) => (
          <HeroCard
            key={hero.id}
            hero={hero}
            onSelect={handleSelectHero}
            isSelected={selectedHeroes.includes(hero)}
          />
        ))}
      </div>
      {showModal && (
        <BattleModal heroes={selectedHeroes} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default HeroList;
