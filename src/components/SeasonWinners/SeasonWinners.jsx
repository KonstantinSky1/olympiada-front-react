import React from "react";

import './SeasonWinners.css';

import SeasonWinnersCard from '../SeasonWinnersCard/SeasonWinnersCard';

function SeasonWinners() {
  return (
    <section className="seasonWinners">
      <div className="seasonWinners__header">
        <h4 className="seasonWinners__header-title">Победители сезона</h4>
        <button type="button" className="seasonWinners__header-show-all">Показать все</button>
      </div>
      <ul className="seasonWinners__list">
        <SeasonWinnersCard />
        <SeasonWinnersCard />
        <SeasonWinnersCard />
        <SeasonWinnersCard />
        <SeasonWinnersCard />
        <SeasonWinnersCard />
        <SeasonWinnersCard />
        <SeasonWinnersCard />
      </ul>
    </section>
  );
}

export default SeasonWinners;