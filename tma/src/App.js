// src/App.js
import React from 'react';
import Home from './components/Home';
import './App.css';

function App({ tg }) {
  return (
    <div className="App">
      <Home tg={tg} />
    </div>
  );
}

export default App;
