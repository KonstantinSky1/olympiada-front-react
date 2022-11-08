import React from "react";

import './OpenVacanciesCard.css';

function OpenVacanciesCard() {
  return (
    <li className="openVacancies__list-item">
      <h5 className="openVacancies__card-title">Office-manager</h5>
      <p className="openVacancies__card-text openVacancies-card-date">30.09.2021</p>
      <p className="openVacancies__card-text openVacancies-card-people openVacancies__card-text_type_margin">Дубай</p>
      <button type="button" className="openVacancies__card-button">Откликнуться</button>
    </li>
  );
}

export default OpenVacanciesCard;