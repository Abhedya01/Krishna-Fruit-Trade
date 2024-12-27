import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './Routes'; // Import the routing file
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);

