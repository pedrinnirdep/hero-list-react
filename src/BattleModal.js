import React from "react";
import "./BattleModal.css";

const BattleModal = ({ heroes, onClose }) => {
  const getWinner = () => {
    if (heroes.length !== 2) return null;

    let [hero1, hero2] = heroes;
    let hero1Power = Object.values(hero1.powerstats).reduce((a, b) => a + b, 0);
    let hero2Power = Object.values(hero2.powerstats).reduce((a, b) => a + b, 0);

    return hero1Power > hero2Power
      ? { winner: hero1, loser: hero2 }
      : { winner: hero2, loser: hero1 };
  };

  const { winner, loser } = getWinner() || {};

  if (!winner) return null;

  const getTotalPowerstats = (powerstats) =>
    Object.values(powerstats).reduce((a, b) => a + b, 0);

  const winnerPowerstats = getTotalPowerstats(winner.powerstats);
  const loserPowerstats = getTotalPowerstats(loser.powerstats);

  const totalPowerstats = {
    [winner.name]: winnerPowerstats,
    [loser.name]: loserPowerstats,
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2 className="modal-title">{winner.name} Winner</h2>
        <div className="battle-container">
          <div className="hero-image-container">
            <img
              src={winner.images.lg}
              alt={winner.name}
              className="hero-image"
            />
            <div className="hero-info">
              <h3>{winner.name}</h3>
            </div>
          </div>
          <div className="comparison">
            <h3>Comparison</h3>
            <table>
              <thead>
                <tr>
                  <th>{winner.name}</th>
                  <th className="attribute-column">Attribute</th>
                  <th>{loser.name}</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(winner.powerstats).map((stat) => {
                  const winnerValue = winner.powerstats[stat];
                  const loserValue = loser.powerstats[stat];
                  const maxStat = Math.max(winnerValue, loserValue);
                  const minStat = Math.min(winnerValue, loserValue);

                  return (
                    <tr key={stat}>
                      <td
                        className={
                          winnerValue > loserValue
                            ? "highlight"
                            : winnerValue < loserValue
                            ? "lowlight"
                            : "default"
                        }
                      >
                        {winnerValue}
                      </td>
                      <td className="attribute-column">
                        {stat.charAt(0).toUpperCase() + stat.slice(1)}
                      </td>
                      <td
                        className={
                          loserValue > winnerValue
                            ? "highlight"
                            : loserValue < winnerValue
                            ? "lowlight"
                            : "default"
                        }
                      >
                        {loserValue}
                      </td>
                    </tr>
                  );
                })}
                <tr className="total-row">
                  <td>{totalPowerstats[winner.name]}</td>
                  <td>Total Powerstats</td>
                  <td>{totalPowerstats[loser.name]}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="hero-image-container">
            <img
              src={loser.images.lg}
              alt={loser.name}
              className="hero-image"
            />
            <div className="hero-info">
              <h3>{loser.name}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BattleModal;
