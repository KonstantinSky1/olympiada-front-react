import React from "react";

import './OpenToPlay.css';

import OlympiadRegisterCard from '../OlympiadRegisterCard/OlympiadRegisterCard';

function OpenToPlay() {
  const handleChangeActive = (e) => {
    let btns = document.querySelectorAll('.olympiad-register__navigation-item');

    for (let i=0; i<btns.length; i++) {
      btns[i].classList.remove('olympiad-register__navigation-item_active');
    }

    e.currentTarget.classList.add("olympiad-register__navigation-item_active");
  }

  return (
    <div className="olympiad-register">
      <h4 className="olympiad-register__navigation-title">Олимпиады</h4>
      <div className="olympiad-register__navigation">
        <div className="olympiad-register__navigation-block">
          <button className="olympiad-register__navigation-item" type="button" onClick={(e) => {handleChangeActive(e)}}>Открытые для участия</button>
          <button className="olympiad-register__navigation-item" type="button" onClick={(e) => {handleChangeActive(e)}}>Для школьников</button>
          <button className="olympiad-register__navigation-item" type="button" onClick={(e) => {handleChangeActive(e)}}>Для учителей</button>
          <button className="olympiad-register__navigation-item" type="button" onClick={(e) => {handleChangeActive(e)}}>Для команд</button>
        </div>
      </div>
      <ul className="olympiad-register__card-list">
        <OlympiadRegisterCard />
        <OlympiadRegisterCard />
        <OlympiadRegisterCard />
        <OlympiadRegisterCard />
        <OlympiadRegisterCard />
        <OlympiadRegisterCard />
      </ul>
    </div>
  );
}

export default OpenToPlay;