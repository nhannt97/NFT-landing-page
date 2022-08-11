import React from "react";
import { Link } from 'react-router-dom';
import Stores from "../stores";
import Socials from '../socials';
import './style.css';

export default function Footer() {
  return (
    <div id="footer">
      <div  class="container d-block">
      <div id="first-row">
        <Socials />
        <Stores />
      </div>
      <div id="divider"></div>
      <div id="second-row" class="d-flex justify-content-between">
        <div class="d-flex">
          <div class="content-item">
            <h5>Main</h5>
            <Link to="/"><div>Home</div></Link>
            <Link to="/market-place"><div>Marketplace</div></Link>
            <div>Sitemap</div>
            <div>Creator Program</div>
          </div>
          <div class="content-item">
            <h5>Explore</h5>
            <div>Players</div>
            <div>Alloances</div>
            <div>Analytics</div>
            <div>Leaderboards</div>
          </div>
          <div class="content-item">
            <h5>Token</h5>
            <div>Mint NFTs</div>
            <Link to="/staking"><div>Staking</div></Link>
            <div>Learn more</div>
            <div>Sapphire Bridge</div>
          </div>
          <div class="content-item">
            <Link to="/about"><h5>About</h5></Link>
            <div>Privacy Policy</div>
            <div>Term and Conditions</div>
            <div>Help & Support</div>
          </div >
        </div >
        <div id="third-row" class="d-flex flex-column justify-content-end">
          <img src="images/Logo 1.png" width="120px" alt="" />
          <div class="text text-right">@ Copyright CG3D Studio</div>
        </div>
      </div >
      </div>
    </div >
  );
}
