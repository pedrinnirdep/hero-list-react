import React from "react";
import "./HeroCard.css";

const HeroCard = ({ hero, onSelect, isSelected }) => {
  return (
    <div
      className={`hero-card ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(hero)}
    >
      <img src={hero.images.sm} alt={hero.name} />
      <h2>{hero.name}</h2>
    </div>
  );
};

export default HeroCard;
