import React from "react";
import { useTranslation } from 'react-i18next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './style.css';

export default function Staking() {
  const { t } = useTranslation();
  return (
    <div id="staking">
      <Header />


      <div id="land-nfts-container">
        <div id="land-nfts-content">
          <img src="images/Asset 8 2.png" alt="" />
          <div id="land-nfts-left">
            <div id="land-nfts">
              OWN YOUR OLYMPUS LAND NFTs
            </div>
            <div id="god-has-heard-my-call">
              Own your Olympus Land, Hero and Statue NFTs which can be played in the game once ROI is launched.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
