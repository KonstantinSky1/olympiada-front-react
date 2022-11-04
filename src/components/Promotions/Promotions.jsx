import React from "react";

import './Promotions.css';

import Promotion from '../Promotion/Promotion';

function Promotions() {
  return (
    <ul className="promotions">
      <Promotion />
      <Promotion />
      <Promotion />
      <Promotion />
      <Promotion />
    </ul>
  );
}

export default Promotions;