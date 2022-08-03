import React from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import BuildingLevel from '../../components/building-leavel';
import './style.css';

export default function About() {
  return (
    <div id="about">
      <Header />
      <div id="banner-slide">
        <div id="carouselAboutBanner" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item position-relative active text-right">
              <img src="images/about-banner.png" alt="" />
              <div class="position-absolute d-flex flex-column justify-content-center text-left h-100">
                <div class="aaa-hero-base-strategy-game mb-2">
                  AAA hero-based strategy
                  <br />game powered by NFTs on
                  <br />the Ethereum blokchain.
                </div>
                <div class="rise-of">
                  Rise of Immortals is an online massive multiplayer blockchain-
                  <br />integrated strategy game where players use their village and army units
                  <br />to grow stronger and conquer other players to earn cryptocurrency.
                </div>
              </div>
            </div>
            <div class="carousel-item position-relative text-right">
              <img src="images/about-banner.png" alt="" />
              <div class="position-absolute d-flex flex-column justify-content-center text-left h-100">
                <div class="aaa-hero-base-strategy-game mb-2">
                  AAA hero-based strategy
                  <br />game powered by NFTs on
                  <br />the Ethereum blokchain.
                </div>
                <div class="rise-of">
                  Rise of Immortals is an online massive multiplayer blockchain-
                  <br />integrated strategy game where players use their village and army units
                  <br />to grow stronger and conquer other players to earn cryptocurrency.
                </div>
              </div>
            </div>
            <div class="carousel-item position-relative text-right">
              <img src="images/about-banner.png" alt="" />
              <div class="position-absolute d-flex flex-column justify-content-center text-left h-100">
                <div class="aaa-hero-base-strategy-game mb-2">
                  AAA hero-based strategy
                  <br />game powered by NFTs on
                  <br />the Ethereum blokchain.
                </div>
                <div class="rise-of">
                  Rise of Immortals is an online massive multiplayer blockchain-
                  <br />integrated strategy game where players use their village and army units
                  <br />to grow stronger and conquer other players to earn cryptocurrency.
                </div>
              </div>
            </div>
          </div>
          <ol class="carousel-indicators">
            <li data-target="#carouselAboutBanner" data-slide-to="0" class="active"></li>
            <li data-target="#carouselAboutBanner" data-slide-to="1"></li>
            <li data-target="#carouselAboutBanner" data-slide-to="2"></li>
          </ol>
        </div>
      </div>
      <div id="believe-container">
        <div id="believe">
          <div id="content">
            <div class="row m-0">
              <div class="col-6"></div>
              <div id="what-we-believe" class="col-6">What We Believe In?</div>
            </div>
            <div class="row m-0" id="believe-items">
              <div class="col-3 text-centerposition-relative">
                <div class=" believe-item ">
                  <img src="images/Build_BayXuong 1.png" alt="" />
                  <div class="img-title">Responsibility</div>
                  <div class="img-des">Own your project, collaborate
                    <br />and share. See an issue? Speak
                    <br />up. We're all in this together.</div>
                </div>
              </div>
              <div class="col-3 text-center position-relative">
                <div class=" believe-item ">
                  <img src="images/Build_BayXuong 2.png" alt="" />
                  <div class="img-title">Independence</div>
                  <div class="img-des">You decide how you can
                    <br />have the biggest impact, and then you
                    <br />do it.</div>
                </div>
              </div>
              <div class="col-3 text-center position-relative">
                <div class=" believe-item ">
                  <img src="images/Build_BayXuong 3.png" alt="" />
                  <div class="img-title">Quality</div>
                  <div class="img-des">We do a few things, extremely
                    <br />well. There is no quality bar,
                    <br />there is only better.</div>
                </div>
              </div>
              <div class="col-3 text-center position-relative">
                <div class=" believe-item ">
                  <img src="images/Build_BayXuong 4.png" alt="" />
                  <div class="img-title">Learning</div>
                  <div class="img-des">For us, quality comes from
                    <br />learning, and learning comes
                    <br />from failing. In order to learn
                    <br />faster, we fail faster.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="why-you-might-love-it-container">
        <img src="images/Fake_MapDemo(1) 1.png" alt="" />
        <div id="why-you-might-love-it-content">
          <div id="why-you-might-love-it">Why You Might Love It Here</div>
          <div id="des-1">
            We believe games have the power to bring people around the world together and closer to each other. We work to create new, innovative, memorable experiences no one has played before. This is why we try to design games that excite wide and diverse player communities as
            well as to expand the audience for otherwise smaller “niche” game
            concepts.</div>
          <div id="des-2">
            If you love to think, talk, play and make games, Supercell is the place
            for you. We've built a company of proactive and independent teams
            with the freedom to do what they think is best for their players,
            our games and the company at large.</div>
          <div id="read-more">Read more <i class="material-icons">chevron_right</i></div>
        </div>
      </div>
      <div id="market-place-container">
        <div id="market-place-content">
          <div id="rise-of">Marketplace</div>
          <div id="des-1">
            RISE OF IMMORTALS marketplace can be accessed within the game to allow users to seamlessly transition from the game itself directly to the marketplace to buy and sell NFTs or just to scan the marketplace for any NFTs. Players can purchase Gods, Villages, Statues, and Temple NFTs with a few clicks, and immediately begin using those NFTs in the game after the transaction has been processed.</div>
          <div id="des-2">
            The game's marketplace implements a cutting-edge NFT exchange algorithm with an easy-to-use NFT rental technology developed specifically for RISE OF IMMORTALS Villages.</div>
          <div id="read-more">Read more <i class="material-icons">chevron_right</i></div>
        </div>
        <img src="images/market.png" alt="" />
      </div>
      <div id="level-building-container">
        <div id="level-building-bg">
          <div id="level-building-content">
            <div id="level-building">Level Building</div>
            <div id="des-1">
              Generate passive income and manage your base partnerships using Mavia's advanced
              <br />partnership management tools.</div>
            <div id="building-level-container">
              <BuildingLevel />
            </div>
            <div id="read-more">Read more <i class="material-icons">chevron_right</i></div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
      <Footer />
    </div>
  );
}
