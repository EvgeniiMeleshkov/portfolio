import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom';
import './fonts/Oxanium/Oxanium-VariableFont_wght.ttf'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

      <HashRouter>
          <App />
      </HashRouter>

);

reportWebVitals();
