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

      <div id="content2" >
        <div id="content2-img" class="brg">
          <div id="content2-image">
            <img src="images/281886969_5124306397645497_3470591421062792137_n 2.png" />
            {/* <img src="images/Rectangle 63.png" alt="" /> */}
            <div id="content-image-text">Land NFTs</div>
          </div>
        </div>
        <div>
          <div id="content2-text">
            <div id="content2-text-detail">
              Land is the primary NFT asset in Mavia, and is required in order to build a base and to train an army.
            </div>
            <button id="content2-button" type="button " >Coming soon</button>
          </div>
        </div>

      </div>


      <Footer />
    </div>
  );
}
