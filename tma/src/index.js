// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initTelegram } from './telegram';
import './index.css';

const tg = initTelegram();

ReactDOM.render(
  <React.StrictMode>
    <App tg={tg} />
  </React.StrictMode>,
  document.getElementById('root')
);
