import React from "react";
import "./HeroCard.css";

const HeroCard = ({ hero, onSelect, isSelected }) => {
  const handleClick = () => {
    onSelect(hero);
  };

  return (
    <div
      className={`hero-card ${isSelected ? "selected" : ""}`}
      onClick={handleClick}
    >
      <img src={hero.images.sm} alt={hero.name} />
      <h3>{hero.name}</h3>
    </div>
  );
};

export default HeroCard;
