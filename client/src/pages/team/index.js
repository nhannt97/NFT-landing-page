import React from "react";
import { useTranslation } from 'react-i18next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './style.css';

export default function Team() {
  const { t } = useTranslation();
  return (
    <div id="team">
      <Header />
      <div class="title">OUR TEAM</div>
      <div id="content-ourteam">
        <div class="content-ourteam-detail">
          <img src="images/Rectangle 143.png" alt="Image error" />
          <div id="name">Anika Curtis</div>
          <div id="job-title">Job Title</div>
        </div>
        <div class="content-ourteam-detail">
          <img src="images/Rectangle 143-1.png" alt="Image error" />
          <div id="name">Jaylon Dokidis</div>
          <div id="job-title">Job Title</div>
        </div>
        <div class="content-ourteam-detail">
          <img src="images/Rectangle 143-2.png" alt="Image error" />
          <div id="name">Kaiya Siphron</div>
          <div id="job-title">Job Title</div>
        </div>
        <div class="content-ourteam-detail">
          <img src="images/Rectangle 143-3.png" alt="Image error" />
          <div id="name">Kadin Schleifer</div>
          <div id="job-title">Job Title</div>
        </div>
        <div class="content-ourteam-detail">
          <img src="images/Rectangle 143-4.png" alt="Image error" />
          <div id="name">Phillip Torff</div>
          <div id="job-title">Job Title</div>
        </div>
        <div class="content-ourteam-detail">
          <img src="images/Rectangle 143-5.png" alt="Image error" />
          <div id="name">Zaire Donin</div>
          <div id="job-title">Job Title</div>
        </div>
        <div class="content-ourteam-detail">
          <img src="images/Rectangle 143-6.png" alt="Image error" />
          <div id="name">Corey Westervelt</div>
          <div id="job-title">Job Title</div>
        </div>
        <div class="content-ourteam-detail">
          <img src="images/Rectangle 143-7.png" alt="Image error" />
          <div id="name">Desirae Bator</div>
          <div id="job-title">Job Title</div>
        </div>
      </div>
      <div class="title">OUR ADVISORS</div>
      <div class="content-ourAdvisors">
        <div class="content-ourAdvisors-element">
          <img src="images/281886969_5124306397645497_3470591421062792137_n 2.png" alt="image error" />
          <div class="content-ourAdvisors-detail">
            <div class="name">Name</div>
            <div class="job-title">Job titles</div>
            <div class="description">Description</div>
          </div>
          <div id="icon-content">
          
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
