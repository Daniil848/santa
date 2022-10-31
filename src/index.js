import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { GroupProvider } from './contexts/reduser';
import Group from './Group';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GroupProvider>
    <Group/>
  </GroupProvider>
);

