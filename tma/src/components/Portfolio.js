// src/components/Portfolio.js
import React from 'react';

const Portfolio = ({ portfolio }) => {
  const totalValue = portfolio.reduce((sum, critter) => sum + critter.value, 0);

  return (
    <div>
      <h2>Your Portfolio</h2>
      <ul>
        {portfolio.map((critter, index) => (
          <li key={index}>
            {critter.name} ({critter.symbol}): ${critter.value}
          </li>
        ))}
      </ul>
      <h3>Total Value: ${totalValue}</h3>
    </div>
  );
};

export default Portfolio;
