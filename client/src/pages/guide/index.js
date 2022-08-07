import React from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import './style.css';

export default function MarketPlace() {
  return (
    <div id="guide">
      <div id="background-layer">
        <Header />
        <div id="title">
          Rise of Immortals Guide
        </div>
        <div id="title-detail">
          Welcome to an ad-free, mobile-friendly, and multi-lingual database for Rise of Immortals.
          <br></br>
          Our database is composed of a vast and unique collection of army troops and defense systems.
          <br></br>
          All of the data is pulled directly from the game files. So, stay tuned and always be up to date with our new game updates!
          <br></br>
          Upgrades on buildings help unlock more content which will arm your village with more sophisticated troops and defenses.
        </div>
        <div class="d-flex justify-content-center">
          <div class="text-center quote position-relative mt-4">
            <span id="vision-quote-start">"</span>
            <span>
              This is not the complete version, it is for beta only.
              <br />We will update with better and complete versions soon.</span>
            <span id="vision-quote-end">"</span>
          </div>
        </div>
        <div id="search" class="bg-light text-dark mx-auto d-flex align-items-center position-relative">
          <i class="material-icons position-absolute">search</i>
          <input type="text" placeholder="Search" class="border-0 text-dark w-100 h-100"></input>
        </div> 

        <div>
          <div class="village-title">Village Building</div>
          <div id="village-content" class="row m-0 m-auto">
            <div class="building-detail col-2 ">
              <img src="images/Build_BayXuong 4.png" class="w-100" alt="img error" />
              <div id="name">Town Hall</div>
            </div>
            <div class="building-detail col-2 ">
              <img src="images/Build_BayXuong 4.png" class="w-100" alt="img error" />
              <div id="name">Clan Cascle</div>
            </div>
            <div class="building-detail col-2 ">
              <img src="images/Build_BayXuong 4.png" class="w-100" alt="img error" />
              <div id="name">Dark Elixir Storage</div>
            </div>
            <div class="building-detail col-2 ">
              <img src="images/Build_BayXuong 4.png" class="w-100" alt="img error" />
              <div id="name">Elixir Storage</div>
            </div>
            <div class="building-detail col-2 ">
              <img src="images/Build_BayXuong 4.png" class="w-100" alt="img error" />
              <div id="name">Gold Storage</div>
            </div>
            <div class="building-detail col-2 ">
              <img src="images/Build_BayXuong 4.png" class="w-100" alt="img error" />
              <div id="name">Gold Mine</div>
            </div>
            <div class="building-detail col-2 ">
              <img src="images/Build_BayXuong 4.png" class="w-100" alt="img error" />
              <div id="name">Elixir Collector</div>
            </div>
            <div class="building-detail col-2 ">
              <img src="images/Build_BayXuong 4.png" class="w-100" alt="img error" />
              <div id="name">Spell Factory</div>
            </div>
            <div class="building-detail col-2 ">
              <img src="images/Build_BayXuong 4.png" class="w-100" alt="img error" />
              <div id="name">Barracks</div>
            </div>
          </div>
        </div>

        <div class="mb-5">
          <div class="village-title">Village Defenders</div>
          <div id="village-content" class="row m-0 m-auto">
            <div class="building-detail col-2 ">
              <img src="images/Build_BayXuong 4.png" class="w-100" alt="img error" />
              <div id="name">Scattershot</div>
            </div>
            <div class="building-detail col-2 ">
              <img src="images/Build_BayXuong 4.png" class="w-100" alt="img error" />
              <div id="name">Army Camp</div>
            </div>
            <div class="building-detail col-2 ">
              <img src="images/Build_BayXuong 4.png" class="w-100" alt="img error" />
              <div id="name">Archer Machine</div>
            </div>
            <div class="building-detail col-2 ">
              <img src="images/Build_BayXuong 4.png" class="w-100" alt="img error" />
              <div id="name">Archer Tower</div>
            </div>
            <div class="building-detail col-2 ">
              <img src="images/Build_BayXuong 4.png" class="w-100" alt="img error" />
              <div id="name">Hidden Electric</div>
            </div>
            <div class="building-detail col-2 ">
              <img src="images/Build_BayXuong 4.png" class="w-100" alt="img error" />
              <div id="name">Wizard Tower</div>
            </div>
            <div class="building-detail col-2 ">
              <img src="images/Build_BayXuong 4.png" class="w-100" alt="img error" />
              <div id="name">Fragments</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
