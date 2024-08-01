import React from "react";
import "./BattleModal.css";

const BattleModal = ({ heroes, onClose }) => {
  const getWinner = () => {
    let winner = heroes[0];
    let maxPowerStats = Object.values(heroes[0].powerstats).reduce(
      (a, b) => a + b,
      0
    );

    for (let i = 1; i < heroes.length; i++) {
      const currentPowerStats = Object.values(heroes[i].powerstats).reduce(
        (a, b) => a + b,
        0
      );
      if (currentPowerStats > maxPowerStats) {
        winner = heroes[i];
        maxPowerStats = currentPowerStats;
      }
    }

    return winner;
  };

  const winner = getWinner();
  const totalPowerstats = Object.values(winner.powerstats).reduce(
    (a, b) => a + b,
    0
  );

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Battle Result</h2>
        <div className="modal-body">
          <div className="left-column">
            <div className="hero-image">
              <img src={winner.images.lg} alt={winner.name} />
            </div>
            <div className="hero-details">
              <h3>{winner.name}</h3>
              <p>
                <strong>Total Powerstats:</strong> {totalPowerstats}
              </p>
              <p>
                <strong>Intelligence:</strong> {winner.powerstats.intelligence}
              </p>
              <p>
                <strong>Strength:</strong> {winner.powerstats.strength}
              </p>
              <p>
                <strong>Speed:</strong> {winner.powerstats.speed}
              </p>
              <p>
                <strong>Durability:</strong> {winner.powerstats.durability}
              </p>
              <p>
                <strong>Power:</strong> {winner.powerstats.power}
              </p>
              <p>
                <strong>Combat:</strong> {winner.powerstats.combat}
              </p>
            </div>
          </div>
          <div className="right-column">
            <h4>Biography</h4>
            <p>
              <strong>Full Name:</strong> {winner.biography.fullName}
            </p>
            <p>
              <strong>Aliases:</strong> {winner.biography.aliases.join(", ")}
            </p>
            <p>
              <strong>Place of Birth:</strong> {winner.biography.placeOfBirth}
            </p>
            <p>
              <strong>First Appearance:</strong>{" "}
              {winner.biography.firstAppearance}
            </p>
            <p>
              <strong>Publisher:</strong> {winner.biography.publisher}
            </p>
            <p>
              <strong>Alignment:</strong> {winner.biography.alignment}
            </p>
            <h4>Appearance</h4>
            <p>
              <strong>Gender:</strong> {winner.appearance.gender}
            </p>
            <p>
              <strong>Race:</strong> {winner.appearance.race}
            </p>
            <p>
              <strong>Height:</strong> {winner.appearance.height.join(" / ")}
            </p>
            <p>
              <strong>Weight:</strong> {winner.appearance.weight.join(" / ")}
            </p>
            <p>
              <strong>Eye Color:</strong> {winner.appearance.eyeColor}
            </p>
            <p>
              <strong>Hair Color:</strong> {winner.appearance.hairColor}
            </p>
            <h4>Work</h4>
            <p>
              <strong>Occupation:</strong> {winner.work.occupation}
            </p>
            <p>
              <strong>Base:</strong> {winner.work.base}
            </p>
            <h4>Connections</h4>
            <p>
              <strong>Group Affiliation:</strong>{" "}
              {winner.connections.groupAffiliation}
            </p>
            <p>
              <strong>Relatives:</strong> {winner.connections.relatives}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BattleModal;
