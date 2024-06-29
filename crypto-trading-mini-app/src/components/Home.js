// src/components/Home.js
import React, { useState } from 'react';
import CritterList from './CritterList';
import MarketView from './MarketView';
import Portfolio from './Portfolio';

const Home = () => {
  const [collectedCritters, setCollectedCritters] = useState([]);

  const handleCollect = (critter) => {
    setCollectedCritters(prevCritters => [...prevCritters, critter]);
  };

  return (
    <div>
      <h1>Simulated Crypto Trading Mini-App</h1>
      <CritterList onCollect={handleCollect} />
      <MarketView />
      <Portfolio collectedCritters={collectedCritters} />
    </div>
  );
};

export default Home;
