import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tachyons'
import './index.css';
import CardList from './CardList'
import {robots} from './robots'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardList robots={robots}/>
  </React.StrictMode>
);
