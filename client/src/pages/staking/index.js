import React from "react";
import { useTranslation } from 'react-i18next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './style.css';

export default function Staking() {
  const { t } = useTranslation();
  return (
    <div id="staking">
      <Header />


      <div id="land-nfts-container">
        <div id="land-nfts-content">
          <img src="images/Asset 8 2.png" alt="" />
          <div id="land-nfts-left">
            <div id="land-nfts">
              OWN YOUR <br></br> OLYMPUS LAND NFTs
            </div>
            <div id="land-nfts-text">
              Own your Olympus Land, Hero and Statue NFTs <br></br> which can be played in the game once ROI is <br></br> launched.
            </div>
            <button id="land-nfts-button" type="button " >Owning Tutorial</button>
          </div>
        </div>
      </div>

      <div class="content">
        <div id="content1">
          <div id="content1-text">
            <div id="text1">Land Staking Rewards Now Available</div>
            <div id="text2">Stake your Land NFT to earn passive rewards.</div>
          </div>
          <div id="content1-btn" >
            <button id="content1-button" type="button " >Stake Land</button>
          </div>
        </div>
      </div>

      <div class="last-content my-5">
        <div class="d-flex w-100 align-items-center flex-row-reverse">
          <div class="position-relative img-explain px-4 pt-4 pb-5">
            <div class="content2-text-detail px-4 pt-4">
              Land is the primary NFT asset in Mavia, and is required in order to build a base and to train an army.
            </div>
            <button class="content2-button position-absolute" type="button " >Coming soon</button>
          </div>
          <div class="position-relative container-img d-flex flex-column align-items-center" id="last-content-1">
            <img src="images/281886969_5124306397645497_3470591421062792137_n 2.png" alt="" />
            <div class="position-absolute text-center last-content-image-text">Land NFTs</div>
          </div>
        </div>
      </div>
      <div class="last-content my-5">
        <div class="d-flex w-100 align-items-center flex-row-reverse">
          <div class="position-relative img-explain px-4 pt-4 pb-5">
            <div class="content2-text-detail px-4 pt-4">
              Heroes are super-troops that help defend your base against attackers, and assist your army in offensive battles.
            </div>
            <button class="content2-button position-absolute" type="button " >Coming soon</button>
          </div>
          <div class="position-relative container-img d-flex flex-column align-items-center" id="last-content-2">
            <img src="images/Char_Poseidon_02 2.png" alt="" />
            <div class="position-absolute text-center last-content-image-text">Hero NFTs</div>
          </div>
        </div>
      </div>
      <div class="last-content my-5">
        <div class="d-flex w-100 align-items-center flex-row-reverse">
          <div class="position-relative img-explain px-4 pt-4 pb-5">
            <div class="content2-text-detail px-4 pt-4">
              Statues enhance your base performance by providing helpful boosts to your army and resources.
            </div>
            <button class="content2-button position-absolute" type="button " >Coming soon</button>
          </div>
          <div class="position-relative container-img d-flex flex-column align-items-center" id="last-content-3">
            <img src="images/Decor_ZeusStatue 3.png" alt="" />
            <div class="position-absolute text-center last-content-image-text">Statue NFTs</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
