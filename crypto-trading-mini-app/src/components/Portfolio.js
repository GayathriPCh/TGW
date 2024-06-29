// src/components/Portfolio.js
import React from 'react';

const Portfolio = ({ collectedCritters }) => {
  return (
    <div>
      <h2>Portfolio</h2>
      <ul>
        {collectedCritters.map(critter => (
          <li key={critter.id}>
            {critter.name} ({critter.symbol})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
