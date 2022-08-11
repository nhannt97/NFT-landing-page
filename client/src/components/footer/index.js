import React from "react";
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
            <a href="/"><div>Home</div></a>
            <a href="/about"><div>About Us</div></a>
            <a href="/team"><div>Our Team</div></a>
            <a href="/guide"><div>Guide</div></a>
            <a href="/market-place"><div>Marketplace</div></a>
          </div>
          <div class="content-item">
            <h5>Explore</h5>
            <div class="empty">Players</div>
            <div class="empty">Clan Castle</div>
            <div class="empty">Analytics</div>
            <div class="empty">Leaderboards</div>
            <div class="empty">IMS Pass</div>
          </div>
          <div class="content-item">
            <h5>Token</h5>
            <div class="empty">Mint NFTs</div>
            <a href="/staking"><div>Staking</div></a>
            <div class="empty">Learn more</div>
            <div class="empty">Sapphire Bridge</div>
            <div class="empty">Governance</div>
          </div>
          <div class="content-item">
            <a href="/about"><h5>About</h5></a>
            <a href="/privacy"><div>Privacy Policy</div></a>
            <a href="/term"><div>Term and Conditions</div></a>
            <a href="/dis-claim"><div>Disclaimer</div></a>
            <div class="empty">Help & Support</div>
            <div class="empty">Art Gallery</div>
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
