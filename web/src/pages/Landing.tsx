import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import '../styles/pages/landing.css';

import logoSvg from '../images/logo.svg';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoSvg} alt="Logo da Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Taiaçu</strong>
          <span>São Paulo</span>
        </div>

        <Link to="/map" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, .72)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
