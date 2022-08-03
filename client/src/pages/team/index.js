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
          <img id="image-ourAdvisors" src="images/z3616430533416_431d5bb522ae7923d41a62023f21d7de.jpg" alt="image error" />
          <div class="content-ourAdvisors-detail">
            <div class="text" >
              <div class="name">Name</div>
              <div class="job-title">Job titles</div>
              <div class="description">Description</div>
            </div>
            <div class="icon-content">
              <img src="images/Social/Twitter.png" alt="twitter" />
              <img src="images/Social/Facebook.png" alt="facebook" />
            </div>
          </div>
        </div>

        <div class="content-ourAdvisors-element">
          <img id="image-ourAdvisors" src="images/z3616430533416_431d5bb522ae7923d41a62023f21d7de.jpg" alt="image error" />
          <div class="content-ourAdvisors-detail">
            <div class="text" >
              <div class="name">Name</div>
              <div class="job-title">Job titles</div>
              <div class="description">Description</div>
            </div>
            <div class="icon-content">
              <img src="images/Social/Twitter.png" alt="twitter" />
              <img src="images/Social/Facebook.png" alt="facebook" />
            </div>
          </div>
        </div>

        <div class="content-ourAdvisors-element">
          <img id="image-ourAdvisors" src="images/z3616430533416_431d5bb522ae7923d41a62023f21d7de.jpg" alt="image error" />
          <div class="content-ourAdvisors-detail">
            <div class="text" >
              <div class="name">Name</div>
              <div class="job-title">Job titles</div>
              <div class="description">Description</div>
            </div>
            <div class="icon-content">
              <img src="images/Social/Twitter.png" alt="twitter" />
              <img src="images/Social/Facebook.png" alt="facebook" />
            </div>
          </div>
        </div>
      </div>
      <div id="blank-place"></div>
      <div id="concept-art-by">CONCEPT ART BY</div>
      <div id="content-concept-art-by">
        <div id="concept-art-by-image">
          <img src="images/Ellipse 24.png" alt="image error" />
          <div id="culu-art-station">CULU ART STATION</div>
        </div>
        <div id="concept-art-by-text">
          <div>We encourage artists to use their talents where they have the most impact. In addition to helping us stay small, it means you may have the opportunity to work on a project you weren't originally supposed to work with. Of course, you will always be consulted first and take an active role in the decision. And congratulations for being one of the main Concept artists for us.
            <br></br>
            <br></br>
            Your colleagues will trust you to do what makes sense and is appropriate for Rise of Immortals.</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
