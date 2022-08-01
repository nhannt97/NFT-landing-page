import React from "react";
import { useTranslation } from 'react-i18next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './style.css';

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div class="homepage">
      <div class="background-layer">
        <Header />
        <div class="title">
          <div class="aaa-hero-base-strategy-game">
            AAA HERO-BASE
            <br />STRATEGY
            <br />GAME
          </div>
          <div class="build">
            Build your base, expand your army, and earn Sapphire by
            <br />conquering enemy bases throughout Rise of Immortals.
          </div>
          <button id="btn-play-to-earn">
            Play to Earn
          </button>
        </div>

        <div class="download">
          {/* <div class="bg-container">
          <img id="first-bg" src="bg-1.svg" />
          <div class="bg">
          </div>
        </div> */}
          <div class="download-content">
            <img id="second-bg" src="dynamon.png" />
            <div class="content">
              <div id="content-left">
                <div class="earn-sapphire-and-other-in-game-resources">
                  {t('home.earn-sapphire-and-other-in-game-resources-1')}
                  <br />{t('home.earn-sapphire-and-other-in-game-resources-2')}
                </div>
                <div id="stores">
                  <div class="store">
                    <img src="appstore.svg" />
                    <div>Download on the <br /><span>APP STORE</span></div>
                  </div>
                  <div class="store">
                    <img src="chplay.svg" />
                    <div>Get it on <br /><span>GOOGLE PLAY</span></div>
                  </div>
                </div>
              </div>
              <div id="content-right">
                <div class="">
                  Earn SAPPHIRE by winning battles, successfully defending your base, completing different challenges, climbing your way up on the leaderboards, and many more.
                  <br />
                  <br />Gold, Elixir, and Dark Elixir are additional in-game resources that your heroes and troops can steal from opponent&#039;s villages.
                </div>
              </div>
            </div>

          </div>
        </div>

        <div id="sponsor">Sponsor</div>
        <div id="up-comming">UP COMMING</div>
        <div id="see-the-latest-container">
          <div></div>
          <div id="see-the-latest-right">
            <div id="see-the-latest">SEE THE LASTEST</div>
            <div id="to-stay-on-top">To stay on top of your game, keep an eye on the in-game News section. Follow us on social media for the latest chatter and sneak peeks on what the team is working on. Don’t be a stranger and join the conversation</div>
            <div id="apps">
              <div id="apps-title">Follow Rise of Immortals on</div>
              <div>
                <img src="apps.svg" />
              </div>
            </div>
          </div>
        </div>
        <div id="god-game-container">
          <div id="god-game-content">
            <div id="god-game-left">
              <div id="god-game">
                God game with NFTs
              </div>
              <div id="god-has-heard-my-call">
                God has heard my call! Join the war of the gods conquer this battle called RISE OF IMMORTALS. Customize your army, build temples and pedestals and crush your opponents. Using the power of the gods, strike your enemy’s weaknesses and forge a legacy by conquering lands and dominating enemies.
                God game with NFTs
              </div>
            </div>
          </div>
        </div>
        <div id="lead-you-container">
          <div id="lead-you-left">
            <div id="lead-you">Lead you Clan to the Victory</div>
            <div id="hero-has-heard">Hero has heard our call! Join the war of the Heroes and conquer this battle through Rise of Immortals. Customize your army, build your defense, and crush your opponents. Using the power of the Heroes, strike your enemies and forge a legacy by conquering their lands and destroying their villages.</div>
          </div>
          <div id="lead-you-right"></div>
        </div>
        <div id="launch-container">
          <div id="first-row">
            <div id="first-row-left"></div>
            <div id="first-row-right">
              <div id="launch">Launch is just the beginning</div>
              <div id="rise-of">
                Rise of Immortals has been constantly evolving to offer more user-friendly, more consistent and more fun online experiences for.
              </div>
            </div>
          </div>
        </div>
        <div id="calendar-container">
          <div id="first-row">
            <div id="calendar-bar">
              <div id="line-1" class="line"></div>
              <div id="line-2" class="line"></div>
              <div id="line-3" class="line"></div>
              <div id="line-4" class="line"></div>
              <div id="line-5" class="line"></div>
              <div id="line-6" class="line"></div>
            </div>
          </div>
          <div id="second-row">
            <div id="calendar">
              <div id="line-1" class="line">
                <div class="stage">Q1 2022</div>
                <div class="stage-title">Game Concept Release</div>
              </div>
              <div id="line-2" class="line">
                <div class="stage">Q2 2022</div>
                <div class="stage-title">Community Launch</div>
              </div>
              <div id="line-3" class="line">
                <div class="stage">Q3 2022</div>
                <div class="stage-title">NFT Sale</div>
              </div>
              <div id="line-4" class="line">
                <div class="stage">Q4 2022</div>
                <div class="stage-title">Public Beta Launch</div>
              </div>
              <div id="line-5" class="line">
                <div class="stage">Q1 2023</div>
                <div class="stage-title">Game Launch</div>
              </div>
              <div id="line-6" class="line">
                <div class="stage">Q2 2023</div>
                <div class="stage-title">Tournament Esports</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
