import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tachyons'
import './index.css';
import Card from './Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>
);
