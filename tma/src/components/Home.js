import React, { useState } from 'react';
import CritterList from './CritterList';
import MarketView from './MarketView';
import Portfolio from './Portfolio';
import { sendMessage, handleOpenCommand } from '../telegram'; // Import the Telegram integration

const Home = ({ tg }) => {
  const [portfolio, setPortfolio] = useState([]);

  const handleCollect = (critter) => {
    const critterWithValue = { ...critter, value: Math.floor(Math.random() * 50000) + 10000 };
    setPortfolio([...portfolio, critterWithValue]);
    sendMessage('your_chat_id', `Collected ${critter.name} (${critter.symbol})`);
  };

  const handleOpenApp = async () => {
    try {
      await handleOpenCommand('your_chat_id'); // Replace 'your_chat_id' with the actual chat ID
    } catch (error) {
      console.error('Error opening app:', error);
    }
  };

  return (
    <div>
      <h1>Crypto Critters Trading</h1>
      <CritterList onCollect={handleCollect} />
      <MarketView />
      <Portfolio portfolio={portfolio} />
      <button onClick={handleOpenApp}>Open Crypto Critters Trading App</button>
    </div>
  );
};

export default Home;
