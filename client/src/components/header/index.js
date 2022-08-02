import React from "react";
import { useTranslation } from 'react-i18next';
import { resources, defaultLng } from '../../i18n';
import './style.css';

export default function Header() {
  const { i18n } = useTranslation();
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  }
  return (
    <div id="header">
      <div class="logo">
        <img alt="logo" src="images/Logo 1.png" />
      </div>
      <div class="menu">
        <a class="menu-item active" href="/">
          <div class="text">Home</div>
        </a>
        <a class="menu-item" href="/about">
          <div class="text">About</div>
          <svg class="arrow-down" width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.285156 0.800049L4.31592 5.00005L8.34668 0.800049" />
          </svg>
        </a>
        <a class="menu-item" href="/staking">
          <div class="text">
            Staking
            <div class="soon">
              SOON!
            </div>
          </div>
          <svg class="arrow-down" width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.353516 0.800293L4.38428 5.00029L8.41505 0.800293" />
          </svg>
        </a>
        <a class="menu-item" href="/market-place">
          <div class="text">Marketplace
            <div class="soon">
              SOON!
            </div>
          </div>
        </a>
        <a class="menu-item" href="/token">
          <div class="text">Token</div>
          <svg class="arrow-down" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.292969 0.800293L3.81989 5.00029L7.34682 0.800293" />
          </svg>
        </a>
        <a class="menu-item" href="/community">
          <div class="text">
            Community
            <div class="soon">
              SOON!
            </div>
          </div>
          <svg class="arrow-down" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.53125 0.800049L4.05817 5.00005L7.58508 0.800049" />
          </svg>
        </a>
      </div>
      <button id="btn-join-discord">
        JOIN DISCORD
      </button>
      <select id="languages" value={i18n.language} onChange={changeLanguage}>
        {Object.keys(resources).map((lang) => (
          <option value={lang}>{resources[lang].label}</option>
        ))}
      </select>
    </div >
  );
}
