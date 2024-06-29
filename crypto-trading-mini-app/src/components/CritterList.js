// src/components/CritterList.js
import React from 'react';

const CritterList = () => {
  const critters = [
    { id: 1, name: "Bitcoin Bunny", symbol: "BTC", image: "images/bunny.png" },
    { id: 2, name: "Dogecoin Dasher", symbol: "DOGE", image: "images/doge.png" },
    // Add more critters as needed
  ];

  const handleCollect = (critter) => {
    console.log(`Collected ${critter.name}`);
    // Implement logic to interact with Telegram Bot API (e.g., send a message)
  };

  return (
    <div>
      <h2>Crypto Critters</h2>
      <ul>
        {critters.map(critter => (
          <li key={critter.id}>
            <img src={critter.image} alt={critter.name} />
            <div>{critter.name} ({critter.symbol})</div>
            <button onClick={() => handleCollect(critter)}>Collect</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CritterList;
