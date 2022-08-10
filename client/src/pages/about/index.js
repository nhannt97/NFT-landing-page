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
        <div class="container d-block">

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
                        <div class="title-detail">
                          Rise of Immortals
                        </div>
                        AAA hero-based strategy game powered by NFTs on the Ethereum blockchain.
                      </p>
                      <p>
                        <div class="title-detail">
                          Introduction
                        </div>
                        Rise of Immortals is an online massive multiplayer blockchain-integrated
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
                {/* <li data-target="#carouselAboutBanner" data-slide-to="2"></li> */}
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
              <a id="read-more" href="/team">Read more <i class="material-icons">chevron_right</i></a>
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
                  RISE OF IMMORTALS marketplace is designed to provide a smooth, beginner-friendly, and seamless experience. The one-stop-shop Marketplace.
                </div>
                <div id="des-2">
                  RISE OF IMMORTALS marketplace can be accessed within the game to allow users to seamlessly transition from the game itself directly to the marketplace to buy and sell NFTs or just to scan the marketplace for any NFTs. Players can purchase Heroes, Villages, Statues, and Temple NFTs with a few clicks, and immediately begin using those NFTs in the game after the transaction has been
                  processed.
                  <br></br>
                  <br></br>
                  The game's marketplace implements a cutting-edge NFT exchange algorithm with an easy-to-use NFT rental technology developed specifically for RISE OF IMMORTALS Villages.
                  <br></br>
                  <br></br>
                  You can Buy and sell Heroes, Lands/Villages, Statues, and Temples with the IMS token as the main medium of exchange.
                  <br></br>
                  <br></br>
                  Rent your Villages for SAP tokens via our "Village Cloning" technology allowing Village NFT owners to mint a duplicate Village to rent without risking ownership of the original Village NFTs.
                  <br></br>
                  Find Village partners on the marketplace or in-game, allowing you to repurpose your own NFT into a passive-income generating
                  technique.
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
              <img src="images/Char_Zeus_front.png" alt="image error"></img>
              <div class="title">Zeus</div>
              <div class="content">
                God of All Gods
              </div>
              <button class="button" type="button">COMING SOON </button>
            </div>
            <div id="element">
              <img src="images/Char_Hades_front.png" alt="image error"></img>
              <div class="title">Hades</div>
              <div class="content">
                God of the Underworld
              </div>
              <button class="button" type="button">COMING SOON </button>
            </div>
            <div id="element">
              <img src="images/Char_Poseidon_front.png" alt="image error"></img>
              <div class="title">Poseidon</div>
              <div class="content">
                The God of the SEA
              </div>
              <button class="button" type="button">COMING SOON </button>
            </div>
          </div>
          <div class="container mb-4 d-block justify-content-center ">
            <div id="faq-title">FAQ</div>
            <div id="faq" class="p-4 pt-4 pb-5 m-auto">
              <div class=" detail d-flex" >
                <div class="text ml-3 ">
                  IMPORTANT!
                </div>
                <a href="#box-content" class="text-decoration-none mr-3 plus" aria-expanded="false" data-toggle="collapse">+</a>
              </div>
              <div class="collapse box-content" id="box-content">
                <div class="card card-body">
                  <p class="card-text ">The launch of the marketplace is scheduled for Q4 2022. Subscribe to our social networks and stay tuned for announcements so you don't miss anything.</p>
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
                  <p class="card-text ">The launch of the marketplace is scheduled for Q4 2022. Subscribe to our social networks and stay tuned for announcements so you don't miss anything.</p>
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
                  <p class="card-text ">The main network of the marketplace is Ethereum Chain. The main cryptocurrency on the marketplace is ETH.</p>
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
                  <p class="card-text ">Yes, there is a big NFTs giveaway for our subscribers right now. Hurry up, take part & get lucky!</p>
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
                  <p class="card-text ">The safest way is to follow the announcements and make your purchase quicker than everyone else after the sale starts. To have guaranteed access to the starting price sale, you need to get on the Whitelist.</p>
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
                  <p class="card-text ">Tokens can be bought on decentralized and centralized exchanges after listing. The only way to buy a token before listing is to participate in an ICO / IDO public sale round.</p>
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
                  <p class="card-text ">Public Sale of tokens and listing on exchanges is scheduled on Q4/2022.</p>
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
                  <p class="card-text ">CFor now, we can't disclose any information regarding the time and location of the public round. Stay tuned for updates.</p>
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
                  <p class="card-text ">No, there are no such mechanics in the project at this moment.</p>
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
                  <p class="card-text ">We plan to list part of the tokens on IDO platforms and the conditions of participation will be set forth by these platforms. The other part of the tokens will be sold via our own platform and participants that are on the Whitelist are prioritized.</p>
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
                  <p class="card-text ">We are unable to disclose this information in advance — follow the announcements.</p>
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
                  <p class="card-text ">
                    Yes, being whitelisted gives you the priority right to buy NFTs or tokens at the start of sales.
                    Ways to get on Rise of Immortals Whitelist:
                    <br />
                    <br />
                    Subscribing to our social media networks — Low chance
                    Taking part in our Art Gallery — Low chance
                    Active participation in our community — Medium chance
                    Attending AMA sessions — Medium chance
                    Promotion of the project through personal social media networks — High chance
                    Taking part and winning contests — High or 100% chance
                    Suggesting ideas for project improvement — Average chance or 100% chance if your idea is used
                  </p>
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
                  <p class="card-text ">We plan to launch on iOS/Android & Web applications.</p>
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
                  <p class="card-text ">We will have 12 to 18 different languages for the convenience of players worldwide.</p>
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
                  <p class="card-text ">NFTs can only be bought on our marketplace after our official announcement. All information will be provided on our social channels.</p>
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
                  <p class="card-text ">Rise of Immortals is built on the Ethereum blockchain, utilizing Immutable X as an L2 scaling solution. Polygon & Binance Smart Chain support will be coming to the Rise of Immortals Bridge in the near future.</p>
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
                  <p class="card-text ">You do not need to own land outright to be able to play in Rise of Immortals, but you do need to have access to a land NFT. There are three ways you can control land in Rise of Immortals, Ownership, Renting, or Partnerships. Renting is a great option for new users looking to try out the game and earn SAPPHIRE while playing. Partnerships require no upfront payment but involve Sapphire (SAP) fee-sharing agreement with the land owner.</p>
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
                <div id="text1">COMING SOON </div>
                <div id="read-more">Read more </div>
              </div>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div >
  );
}
