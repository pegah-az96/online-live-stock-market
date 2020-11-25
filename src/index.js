import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'
//import App from './App';
import Routes from "./Routes";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

