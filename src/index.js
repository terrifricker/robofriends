import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tachyons'
import './index.css';
import { robots } from './robots'
import Card from './Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
  </React.StrictMode>
);
