import React from "react";
import { Link } from 'react-router-dom';

import './StudyAbroadCard.css';

import pic1 from '../../images/studyAbroad-university-name.png';

function StudyAbroadCard() {
  return (
    <li className="studyAbroad__our-partners-list-item">
      <div className="studyAbroad__our-partners-list-item-image">
        <img src={pic1} alt="Картинка" />
      </div>
      {/* studyabroadopencard - временное решение! */}
      <Link to="/studyabroadopencard" className="studyAbroad__our-partners-list-item-link"><p className="studyAbroad__our-partners-list-item-text">Карлов университет</p></Link>
    </li>
  );
}

export default StudyAbroadCard;