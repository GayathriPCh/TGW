// src/components/CritterList.js
import React from 'react';
import critters from '../critters';

const CritterList = ({ onCollect }) => {
  return (
    <div>
      <h2>Available Crypto Critters</h2>
      <div>
        {critters.map(critter => (
          <div key={critter.id}>
            <img src={critter.image} alt={critter.name} />
            <h3>{critter.name} ({critter.symbol})</h3>
            <button onClick={() => onCollect(critter)}>Collect</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CritterList;
