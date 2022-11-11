import React from "react";
import { Link } from 'react-router-dom';

import './Main.css';

import mainAdvertsPic1 from '../../images/putevka.png';

import OpenToPlay from '../OpenToPlay/OpenToPlay';
import AllNewsMain from '../AllNewsMain/AllNewsMain';
import SeasonWinners from '../SeasonWinners/SeasonWinners';

function Main() {
return (
  <section className="main">
    <div className="main__adverts">
      <div className="main__adverts-image-block">
        <img src={mainAdvertsPic1} alt="Картинка" className="main__adverts-image"/>
      </div>
      <div className="main__adverts-buttons-block">
        <Link to="/" className="main__adverts-buttons button-participate">Участвовать</Link>
        <Link to="/" className="main__adverts-buttons button-details">Подробнее</Link>
      </div>
    </div>
    <OpenToPlay />
    <AllNewsMain />
    <SeasonWinners />
  </section>
);
}

export default Main;