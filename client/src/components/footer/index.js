import React from "react";
import './style.css';

export default function Footer() {
  return (
    <div id="footer">
      <div id="first-row">
        <div id="apps">
          <div id="apps-title">Follow Rise of Immortals on</div>
          <div>
            <img src="apps.svg"/>
            {/* <img src="facebook.svg" />
            <img src="instagram.svg" />
            <img src="twitter.svg" />
            <img src="discord.svg" />
            <img src="youtube.svg" />
            <img src="telegram.svg" />
            <img src="unknown1.svg" />
            <img src="unknow2.svg" /> */}
          </div>
        </div>
        <div id="stores">
          <div class="store">
            <img src="appstore.svg" />
            <div>Download on the <br/><span>APP STORE</span></div>
          </div>
          <div class="store">
            <img src="chplay.svg" />
            <div>Get it on <br/><span>GOOGLE PLAY</span></div>
          </div>
        </div>
      </div>
      <div id="second-row">
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
      <div id="third-row">
        @ Copyright CG3D Studio
      </div>
    </div >
  );
}
