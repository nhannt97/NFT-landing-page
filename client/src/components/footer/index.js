import React from "react";
import Stores from "../stores";
import Socials from '../socials';
import './style.css';

export default function Footer() {
  return (
    <div id="footer">
      <div id="first-row">
        <Socials />
        <Stores />
      </div>
      <div id="second-row" class="d-flex justify-content-between">
        <div class="d-flex">
          <div class="content-item">
            <h5>Main</h5>
            <div>Home</div>
            <div>Marketplace</div>
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
            <div>Staking</div>
            <div>Learn more</div>
            <div>Sapphire Bridge</div>
          </div>
          <div class="content-item">
            <h5>About</h5>
            <div>Privacy Policy</div>
            <div>Term and Conditions</div>
            <div>Help & Support</div>
          </div>
        </div>
        <div id="third-row" class="d-flex flex-column justify-content-end">
          <img src="images/Logo 1.png" width="120px" alt="" />
          <div class="text text-right">@ Copyright CG3D Studio</div>
        </div>
      </div>
    </div >
  );
}
