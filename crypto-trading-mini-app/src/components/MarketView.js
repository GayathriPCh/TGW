// src/components/MarketView.js
import React from 'react';

const MarketView = () => {
  // Simulated market data
  const critters = [
    { id: 1, name: "Bitcoin Bunny", symbol: "BTC", price: 50000 },
    { id: 2, name: "Dogecoin Dasher", symbol: "DOGE", price: 0.3 },
    // Add more critters as needed
  ];

  return (
    <div>
      <h2>Market View</h2>
      <ul>
        {critters.map(critter => (
          <li key={critter.id}>
            {critter.name} ({critter.symbol}): ${critter.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketView;
