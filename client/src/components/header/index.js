import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { resources, defaultLng } from '../../i18n';
import './style.css';

export default function Header() {
  const { i18n } = useTranslation();
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  }
  const checkIfActivePage = (path) => {
    return window.location.pathname === path;
  };
  return (
    <div id="header" class="container">
      <div class="logo">
        <img alt="logo" src="images/Logo 1.png" />
      </div>
      <div class="menu">
        <Link class={'menu-item ' + (checkIfActivePage('/') ? 'active' : '')} to="/">
          <div class="text">Home</div>
        </Link>
        <Link class={'menu-item ' + (checkIfActivePage('/about') ? 'active' : '')} to="/about">
          <div class="text">About</div>
          <svg class="arrow-down" width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.285156 0.800049L4.31592 5.00005L8.34668 0.800049" />
          </svg>
        </Link>
        <Link class={'menu-item ' + (checkIfActivePage('/team') ? 'active' : '')} to="/team">
          <div class="text">
            Team
            {/* <div class="soon">
              SOON!
            </div> */}
          </div>
          <svg class="arrow-down" width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.353516 0.800293L4.38428 5.00029L8.41505 0.800293" />
          </svg>
        </Link>
        <Link class={'menu-item ' + (checkIfActivePage('/staking') ? 'active' : '')} to="/staking">
          <div class="text">
            Staking
            <div class="soon">
              SOON!
            </div>
          </div>
          <svg class="arrow-down" width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.353516 0.800293L4.38428 5.00029L8.41505 0.800293" />
          </svg>
        </Link>
        <Link class={'menu-item ' + (checkIfActivePage('/market-place') ? 'active' : '')} to="/market-place">
          <div class="text">Marketplace
            <div class="soon">
              SOON!
            </div>
          </div>
        </Link>
        <Link class={'menu-item ' + (checkIfActivePage('/token') ? 'active' : '')} to="/token">
          <div class="text">Token</div>
          <svg class="arrow-down" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.292969 0.800293L3.81989 5.00029L7.34682 0.800293" />
          </svg>
        </Link>
        <Link class={'menu-item ' + (checkIfActivePage('/whitePaper') ? 'active' : '')} to="/whitePaper">
          <div class="text">
          WhitePaper
            <div class="soon">
              SOON!
            </div>
          </div>
          <svg class="arrow-down" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.53125 0.800049L4.05817 5.00005L7.58508 0.800049" />
          </svg>
        </Link>
      </div>
      <button id="btn-join-discord">
        Connect to Wallet
      </button>
      <select id="languages" value={i18n.language} onChange={changeLanguage}>
        {Object.keys(resources).map((lang) => (
          <option value={lang}>{resources[lang].label}</option>
        ))}
      </select>
      
    </div >
  );
}
