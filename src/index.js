import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Productcontext from './context/product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Productcontext.Provider>
      <App />
    </Productcontext.Provider>
  </BrowserRouter>
);

