import React from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import BuildingLevel from '../../components/building-level';
import './style.css';

export default function About() {
  return (
    <div id="about">
      <div class="background-layer">
        <Header />
        <div id="banner-slide">
          <div id="carouselAboutBanner" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item position-relative active text-right">
                <div class="sub-bg"></div>
                <img src="images/about-banner.png" alt="" />
                <div class="banner-text-container position-absolute d-flex flex-column justify-content-center text-left h-100">
                  <div class="aaa-hero-base-strategy-game mb-2">
                    Welcome to
                    <br />Rise of Immortals
                  </div>
                  <div class="rise-of">
                    <p>
                      Rise of Immortals
                      <br />AAA hero-based strategy game powered by NFTs on the Ethereum blockchain.
                    </p>
                    <p>
                      Introduction
                      <br />Rise of Immortals is an online massive multiplayer blockchain-integrated
                      strategy game where players use their village and army units to grow stronger
                      and conquer other players to earn cryptocurrency.
                    </p>
                    <p>
                      Players earn thru various in-game activities such as completing challenges,
                      winning a village attack, successful village defense, removing obstavles,
                      wagered matches, collaborating bases with clan mates or in-game friends,
                      staking, and most of all, achieving the highest rank on the leaderboards.
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item position-relative text-right">
                <div class="sub-bg"></div>
                <img src="images/about-banner.png" alt="" />
                <div class="banner-text-container position-absolute d-flex flex-column justify-content-center text-left h-100">
                  <div class="aaa-hero-base-strategy-game mb-2">
                    Welcome to
                    <br />Rise of Immortals
                  </div>
                  <div class="rise-of">
                    <p>
                      Rise of Immortals
                      <br />AAA hero-based strategy game powered by NFTs on the Ethereum blockchain.
                    </p>
                    <p>
                      Introduction
                      <br />Rise of Immortals is an online massive multiplayer blockchain-integrated
                      strategy game where players use their village and army units to grow stronger
                      and conquer other players to earn cryptocurrency.
                    </p>
                    <p>
                      Players earn thru various in-game activities such as completing challenges,
                      winning a village attack, successful village defense, removing obstavles,
                      wagered matches, collaborating bases with clan mates or in-game friends,
                      staking, and most of all, achieving the highest rank on the leaderboards.
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item position-relative text-right">
                <div class="sub-bg"></div>
                <img src="images/about-banner.png" alt="" />
                <div class="banner-text-container position-absolute d-flex flex-column justify-content-center text-left h-100">
                  <div class="aaa-hero-base-strategy-game mb-2">
                    Welcome to
                    <br />Rise of Immortals
                  </div>
                  <div class="rise-of">
                    <p>
                      Rise of Immortals
                      <br />AAA hero-based strategy game powered by NFTs on the Ethereum blockchain.
                    </p>
                    <p>
                      Introduction
                      <br />Rise of Immortals is an online massive multiplayer blockchain-integrated
                      strategy game where players use their village and army units to grow stronger
                      and conquer other players to earn cryptocurrency.
                    </p>
                    <p>
                      Players earn thru various in-game activities such as completing challenges,
                      winning a village attack, successful village defense, removing obstavles,
                      wagered matches, collaborating bases with clan mates or in-game friends,
                      staking, and most of all, achieving the highest rank on the leaderboards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselAboutBanner" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselAboutBanner" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
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
                  <div class=" believe-item px-3">
                    <img src="images/Build_BayXuong 1.png" alt="" />
                    <div class="img-title mb-3">Responsibility</div>
                    <div class="img-des">Own your project, collaborate
                      <br />and share. See an issue? Speak
                      <br />up. We're all in this together.</div>
                  </div>
                </div>
                <div class="col-3 text-center position-relative">
                  <div class=" believe-item px-3">
                    <img src="images/Build_BayXuong 2.png" alt="" />
                    <div class="img-title mb-3">Independence</div>
                    <div class="img-des">You decide how you can
                      <br />have the biggest impact, and then you
                      <br />do it.</div>
                  </div>
                </div>
                <div class="col-3 text-center position-relative">
                  <div class=" believe-item px-3">
                    <img src="images/Build_BayXuong 3.png" alt="" />
                    <div class="img-title mb-3">Quality</div>
                    <div class="img-des">We do a few things, extremely
                      <br />well. There is no quality bar,
                      <br />there is only better.</div>
                  </div>
                </div>
                <div class="col-3 text-center position-relative">
                  <div class=" believe-item px-3">
                    <img src="images/Build_BayXuong 4.png" alt="" />
                    <div class="img-title mb-3">Learning</div>
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
            <div id="market-place">
              Marketplace
              <i class="material-icons" data-toggle="collapse" data-target="#collapseMarket" aria-expanded="true" aria-controls="collapseMarket" id="market-expand-icon">expand_more</i>
            </div>
            <div id="collapseMarket" class="collapse">
              <div id="des-1">
                RISE OF IMMORTALS marketplace is designed to provide a smooth, beginner-friendly, and seamless experence.
                The one-stop-shop Marketplace.
              </div>
              <div id="des-2">
                RISE OF IMMORTALS marketplace can be accessed within the game to allow users to seamlessly transition
                from the game itself directly to the marketplace to buy and sell NFTs or just to scan the marketplace.
              </div>
            </div>
          </div>
          <div id="market-img">
            <img src="images/market.png" alt="" class="w-100" />
          </div>
        </div>
        <div id="level-building-container">
          <div id="level-building-bg">
            <div id="level-building-content">
              <div id="level-building">Building Advancement</div>
              <div id="des-1">
                Upgrades on buldings help unlock more content which
                <br />will arm your village with more sophisticated troops and defenses.</div>
              <div id="building-level-container">
                <BuildingLevel />
              </div>
              <a id="read-more" href="/guide">Read more</a>
            </div>
          </div>
        </div>
        <div id="the-gods-of-olympus">
          <div id="the-gods-of-olympus-title">The Pantheon</div>
          <div id="the-gods-of-olympus-content" class="text-center">
            Heroes are one of the main NFTs of the game. They help in attacking other
            villages and also in defending your own village. Upgrade your NFTs using
            SAPPHIRE (SAP) making them stronger as well as increasing their market
            value. Village upgrades like Statues also use SAP as the main resource.
            Statues help enhace your village's performance.
          </div>
          <a id="the-gods-of-olympus-button" href="/guide">EXPLORE</a>
        </div>
        <div id="zeus-hades-poseidon">
          <div id="element">
            <img src="images/Layer 50 Large 1.png" alt="image error"></img>
            <div class="title">Zeus</div>
            <div class="content">
              God of All Gods
            </div>
            <button class="button" type="button">UP COMMING</button>
          </div>
          <div id="element">
            <img src="images/Layer 46 Large 1.png" alt="image error"></img>
            <div class="title">Hades</div>
            <div class="content">
              God of the Underworld
            </div>
            <button class="button" type="button">UP COMMING</button>
          </div>
          <div id="element">
            <img src="images/Layer 38 Large 1.png" alt="image error"></img>
            <div class="title">Poseidon</div>
            <div class="content">
              The God of the SEA
            </div>
            <button class="button" type="button">UP COMMING</button>
          </div>
        </div>
        <div class="container mb-4  ">
          <div id="faq" class="p-4 pt-4 pb-5">
            <div class=" detail d-flex" >
              <div class="text ml-3 ">
                IMPORTANT!
              </div>
              <a href="#box-content" class="text-decoration-none mr-3 plus" aria-expanded="false" data-toggle="collapse">+</a>
            </div>
            <div class="collapse box-content" id="box-content">
              <div class="card card-body">
                <p class="card-text ">Content</p>
              </div>
            </div>
            <div class=" detail d-flex" >
              <div class="text ml-3 ">
                When will the marketplace be available?
              </div>
              <a href="#box-content1" class="text-decoration-none mr-3 plus" aria-expanded="false" data-toggle="collapse">+</a>
            </div>
            <div class="collapse box-content" id="box-content1">
              <div class="card card-body">
                <p class="card-text ">Content</p>
              </div>
            </div>
            <div class=" detail d-flex" >
              <div class="text ml-3 ">
                What cryptocurrency will be used on the Marketplace?
              </div>
              <a href="#box-content2" class="text-decoration-none mr-3 plus" aria-expanded="false" data-toggle="collapse">+</a>
            </div>
            <div class="collapse box-content" id="box-content2">
              <div class="card card-body">
                <p class="card-text ">Content</p>
              </div>
            </div>
            <div class=" detail d-flex" >
              <div class="text ml-3 ">
                Can I get NFTs for free?
              </div>
              <a href="#box-content3" class="text-decoration-none mr-3 plus" aria-expanded="false" data-toggle="collapse">+</a>
            </div>
            <div class="collapse box-content" id="box-content3">
              <div class="card card-body">
                <p class="card-text ">Content</p>
              </div>
            </div>
            <div class=" detail d-flex" >
              <div class="text ml-3 ">
                How do I get the NFTs (Base/Heroes/Statues) first at the initial price?
              </div>
              <a href="#box-content4" class="text-decoration-none mr-3 plus" aria-expanded="false" data-toggle="collapse">+</a>
            </div>
            <div class="collapse box-content" id="box-content4">
              <div class="card card-body">
                <p class="card-text ">Content</p>
              </div>
            </div>
            <div class=" detail d-flex" >
              <div class="text ml-3 ">
                How to buy tokens?
              </div>
              <a href="#box-content5" class="text-decoration-none mr-3 plus" aria-expanded="false" data-toggle="collapse">+</a>
            </div>
            <div class="collapse box-content" id="box-content5">
              <div class="card card-body">
                <p class="card-text ">Content</p>
              </div>
            </div>
            <div class=" detail d-flex" >
              <div class="text ml-3 ">
                When will token purchase be available?
              </div>
              <a href="#box-content6" class="text-decoration-none mr-3 plus" aria-expanded="false" data-toggle="collapse">+</a>
            </div>
            <div class="collapse box-content" id="box-content6">
              <div class="card card-body">
                <p class="card-text ">Content</p>
              </div>
            </div>
            <div class=" detail d-flex" >
              <div class="text ml-3 ">
                Where and when will the ICO / IDO be held?
              </div>
              <a href="#box-content7" class="text-decoration-none mr-3 plus" aria-expanded="false" data-toggle="collapse">+</a>
            </div>
            <div class="collapse box-content" id="box-content7">
              <div class="card card-body">
                <p class="card-text ">Content</p>
              </div>
            </div>
            <div class=" detail d-flex" >
              <div class="text ml-3 ">
                Is it possible to get a token for free?
              </div>
              <a href="#box-content8" class="text-decoration-none mr-3 plus" aria-expanded="false" data-toggle="collapse">+</a>
            </div>
            <div class="collapse box-content" id="box-content8">
              <div class="card card-body">
                <p class="card-text ">Content</p>
              </div>
            </div>
            <div class=" detail d-flex" >
              <div class="text ml-3 ">
                How do I buy tokens first at the starting price?
              </div>
              <a href="#box-content9" class="text-decoration-none mr-3 plus" aria-expanded="false" data-toggle="collapse">+</a>
            </div>
            <div class="collapse box-content" id="box-content9">
              <div class="card card-body">
                <p class="card-text ">Content</p>
              </div>
            </div>
            <div class=" detail d-flex" >
              <div class="text ml-3 ">
                On which exchanges will the token be sold?
              </div>
              <a href="#box-content0" class="text-decoration-none mr-3 plus" aria-expanded="false" data-toggle="collapse">+</a>
            </div>
            <div class="collapse box-content" id="box-content0">
              <div class="card card-body">
                <p class="card-text ">Content</p>
              </div>
            </div>
            <div class=" detail d-flex" >
              <div class="text ml-3 ">
                Do you have a whitelist?
              </div>
              <a href="#box-content11" class="text-decoration-none mr-3 plus" aria-expanded="false" data-toggle="collapse">+</a>
            </div>
            <div class="collapse box-content" id="box-content11">
              <div class="card card-body">
                <p class="card-text ">Content</p>
              </div>
            </div>
            <div class=" detail d-flex" >
              <div class="text ml-3 ">
                What platforms will the app be available on?
              </div>
              <a href="#box-content12" class="text-decoration-none mr-3 plus" aria-expanded="false" data-toggle="collapse">+</a>
            </div>
            <div class="collapse box-content" id="box-content12">
              <div class="card card-body">
                <p class="card-text ">Content</p>
              </div>
            </div>
            <div class=" detail d-flex" >
              <div class="text ml-3 ">
                What languages will the app be translated into?
              </div>
              <a href="#box-content13" class="text-decoration-none mr-3 plus" aria-expanded="false" data-toggle="collapse">+</a>
            </div>
            <div class="collapse box-content" id="box-content13">
              <div class="card card-body">
                <p class="card-text ">Content</p>
              </div>
            </div>
            <div class=" detail d-flex" >
              <div class="text ml-3 ">
                How to buy our NFT
              </div>
              <a href="#box-content14" class="text-decoration-none mr-3 plus" aria-expanded="false" data-toggle="collapse">+</a>
            </div>
            <div class="collapse box-content" id="box-content14">
              <div class="card card-body">
                <p class="card-text ">Content</p>
              </div>
            </div>
            <div class=" detail d-flex" >
              <div class="text ml-3 ">
                Which Blockchain is Rise of Immortals built on?
              </div>
              <a href="#box-content15" class="text-decoration-none mr-3 plus" aria-expanded="false" data-toggle="collapse">+</a>
            </div>
            <div class="collapse box-content" id="box-content15">
              <div class="card card-body">
                <p class="card-text ">Content</p>
              </div>
            </div>
            <div class=" detail d-flex" >
              <div class="text ml-3 ">
                Do I have to own a base/land in Rise of Immortals to play?
              </div>
              <a href="#box-content16" class="text-decoration-none mr-3 plus" aria-expanded="false" data-toggle="collapse">+</a>
            </div>
            <div class="collapse box-content" id="box-content16">
              <div class="card card-body">
                <p class="card-text ">Content</p>
              </div>
            </div>
          </div>
        </div>
        <div id="news">
          <div id="news-title">News</div>
          <div class="news-content ">
            <div class="news-content-slide">
              <div id="carouselBotAboutBanner" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="images/Frame 112.png" alt="" />
                  </div>
                  <div class="carousel-item">
                    <img src="images/Frame 112.png" alt="" />
                  </div>
                  <div class="carousel-item">
                    <img src="images/Frame 112.png" alt="" />
                  </div>
                </div>
                <div class="position-relative m-auto" style={{ width: 565 }}>
                  <a class="carousel-control-prev" href="#carouselBotAboutBanner" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselBotAboutBanner" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="news-content-text d-flex flex-column py-5">
              <div>
                <button id="btn-rois">
                  New in Rise of Immportals
                </button>
              </div>
              <div id="text1">UP COMMING</div>
              <div id="read-more">Read more </div>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    </div >
  );
}
