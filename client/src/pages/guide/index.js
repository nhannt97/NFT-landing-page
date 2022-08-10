import React from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import './style.css';
import ListBuilding from "./ListBuilding";

import { data } from './data';
console.log(data);

export default function MarketPlace() {
  return (
    <div id="guide">
      <div id="background-layer">
        <Header />
        <div class="container d-block">
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

          {data.map((listItem) => (
            <ListBuilding listItem={listItem} />
          ))}

          {/* <div>
            <div class="village-title">Village Building</div>
            <div id="village-content" class="row m-0 m-auto">
              <div class="building-detail col-2 ">
                <img src="images/guide/Build_Khodauden 2.png" alt="img error" />
                <div id="name">Town Hall</div>
              </div>
              <div class="building-detail col-2 ">
                <img src="images/guide/Lvl1.png" alt="img error" />
                <div id="name">Clan Cascle</div>
              </div>
              <div class="building-detail col-2 ">
                <img src="images/guide/Build_Khodauden 1.png" alt="img error" />
                <div id="name">Dark Elixir Storage</div>
              </div>
              <div class="building-detail col-2 ">
                <img src="images/guide/Build_Khodauden 3.png" alt="img error" />
                <div id="name">Elixir Storage</div>
              </div>
              <div class="building-detail col-2 ">
                <img src="images/guide/Build_Khovang 1.png" alt="img error" />
                <div id="name">Gold Storage</div>
              </div>
              <div class="building-detail col-2 ">
                <img src="images/guide/Build_NhaDaoVang_Lv01 1.png" alt="img error" />
                <div id="name">Gold Mine</div>
              </div>
              <div class="building-detail col-2 ">
                <img src="images/guide/Build_Khodauden 5.png" alt="img error" />
                <div id="name">Elixir Collector</div>
              </div>
              <div class="building-detail col-2 ">
                <img src="images/guide/Build_Khodauden 9.png" alt="img error" />
                <div id="name">Spell Factory</div>
              </div>
              <div class="building-detail col-2 ">
                <img src="images/guide/SoldierHouse 1.png" alt="img error" />
                <div id="name">Barracks</div>
              </div>
              <div class="building-detail col-3 justify-content-center">
                <div id="andMore">AND MORE...</div>
              </div>
            </div>
          </div> */}

          <div class="mb-5">
            <div class="village-title">Village Defenders</div>
            <div id="village-content" class="row m-0 m-auto">
              <div class="building-detail col-2 ">
                <img src="images/guide/Group 229.png" class="w-100" alt="img error" />
                <div id="name">Scattershot</div>
              </div>
              <div class="building-detail col-2 ">
                <img src="images/guide/Build_Khodauden 1-1.png" class="w-100" alt="img error" />
                <div id="name">Army Camp</div>
              </div>
              <div class="building-detail col-2 ">
                <img src="images/guide/Build_Khodauden 6.png" class="w-100" alt="img error" />
                <div id="name">Archer Machine</div>
              </div>
              <div class="building-detail col-2 ">
                <img src="images/guide/Build_Khodauden 7.png" class="w-100" alt="img error" />
                <div id="name">Archer Tower</div>
              </div>
              <div class="building-detail col-2 ">
                <img src="images/guide/Build_Khodauden 10.png" class="w-100" alt="img error" />
                <div id="name">Hidden Electric</div>
              </div>
              <div class="building-detail col-2 ">
                <img src="images/guide/Build_Khodauden 8.png" class="w-100" alt="img error" />
                <div id="name">Wizard Tower</div>
              </div>
              <div class="building-detail col-2 ">
                <img src="images/guide/Build_Khodauden 8-1.png" class="w-100" alt="img error" />
                <div id="name">Wizard Tower</div>
              </div>
              <div class="building-detail col-2 ">
                <img src="images/guide/Build_Khodauden 8-2.png" class="w-100" alt="img error" />
                <div id="name">Wizard Tower</div>
              </div>
              <div class="building-detail col-3 justify-content-center">
                <div id="andMore">AND MORE...</div>
              </div>
            </div>
          </div>
          <div class="mb-5">
            <div class="village-title">Traps</div>
            <div id="village-content" class="row m-0 m-auto">
              <div class="building-detail col-2 ">
                <img src="images/guide/Group 229-1.png" class="w-100" alt="img error" />
                <div id="name">Air Bomb</div>
              </div>
              <div class="building-detail col-2 ">
                <img src="images/guide/Build_Khodauden 1-2.png" class="w-100" alt="img error" />
                <div id="name">Hide Trap</div>
              </div>
              <div class="building-detail col-2 ">
                <img src="images/guide/Build_Khodauden 6-1.png" class="w-100" alt="img error" />
                <div id="name">Bomb</div>
              </div>
              <div class="building-detail col-2 ">
                <img src="images/guide/Build_Khodauden 7-1.png" class="w-100" alt="img error" />
                <div id="name">Destructive Flying Mines</div>
              </div>
              <div class="building-detail col-2 ">
                <img src="images/guide/Build_Khodauden 10-1.png" class="w-100" alt="img error" />
                <div id="name">Giant Bomb</div>
              </div>
              <div class="building-detail col-2 ">
                <img src="images/guide/Build_Khodauden 8-3.png" class="w-100" alt="img error" />
                <div id="name">Skeleton Trap</div>
              </div>
              <div class="building-detail col-2 ">
                <img src="images/guide/Build_Khodauden 8-4.png" class="w-100" alt="img error" />
                <div id="name">Freeze Trap</div>
              </div>
              <div class="building-detail col-2 ">
                <img src="images/guide/Build_Khodauden 8-5.png" class="w-100" alt="img error" />
                <div id="name">Push Trap</div>
              </div>
              <div class="building-detail col-2 ">
                <img src="images/guide/Build_Khodauden 8-6.png" class="w-100" alt="img error" />
                <div id="name">Tornado Trap</div>
              </div>
              <div class="building-detail col-3 justify-content-center">
                <div id="andMore">AND MORE...</div>
              </div>
            </div>

            <div class="mb-5">
              <div class="village-title">Heroes</div>
            </div>
            <div class="mb-5">
              <div class="village-title">Troops</div>
            </div>
            <div class="mb-5">
              <div class="village-title">Spells</div>
            </div>
            <div class="mb-5">
              <div class="village-title">Obstacles</div>
            </div>
            <div class="mb-5">
              <div class="village-title">Scenery</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div >
  );
}
