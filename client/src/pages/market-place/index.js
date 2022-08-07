import React from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import './style.css';

export default function MarketPlace() {
  return (
    <div id="marketplace">
      <div id="background-layer">
      <Header />
      <div id="img-container">
        <img src="images/market.png" alt="" width="100%" />
      </div>
      <Footer />
      </div>
    </div>
  );
}
