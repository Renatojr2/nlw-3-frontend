import React from 'react';
import logo from './images/Logo.svg';
import './style/pages/landing.css';
import {FiArrowRight} from 'react-icons/fi'

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logo} alt="logo do site" />

        <main>
          <h1>Leve felicidade para o mondo</h1>
          <p>Visite orfanatos e mude o dia de uma criança</p>
        </main>
        <div className="location">
          <strong>Leopoldina</strong>
          <span>Minas Gerais</span>
        </div>

        <a href="" className="entre-app">
          <FiArrowRight size={26} color='rgba(0,0,0,0.6)' />
        </a>
      </div>
    </div>
  );
}

export default App;
