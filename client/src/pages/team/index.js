import React from "react";
import { useTranslation } from 'react-i18next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './style.css';

export default function Team() {
  const { t } = useTranslation();
  return (
    <div id="team">
      <div id="background-layer">
        <Header />
        <div id="banner" class="w-100  ">
          <div id="banner-content" class="w-100 h-100 d-flex flex-column justify-content-center">
            <div class="container d-block">
              <div id="banner-header" class="text-center mb-4">WHY YOU MIGHT LOVE IT HERE</div>
              <div id="banner-text" class="text-center">Best teams. Biggest impact. Nothing in your way.</div>
            </div>
          </div>
        </div>
        <div class="container d-block">
          <div class="title">OUR TEAM</div>
          <div id="content-ourteam">
            <div class="content-ourteam-detail">
              <img src="images/team/Rectangle 143.png" alt="img error" />
              <div id="name">Johan P.</div>
              <div id="job-title">CG Supervisor</div>
            </div>
            <div class="content-ourteam-detail">
              <img src="images/team/Rectangle 143-1.png" alt="img error" />
              <div id="name">CuongCG</div>
              <div id="job-title">Art Director</div>
            </div>
            <div class="content-ourteam-detail">
              <img src="images/team/Rectangle 143-2.png" alt="img error" />
              <div id="name">Zaire Donin</div>
              <div id="job-title">Lead 3D Character</div>
            </div>
            <div class="content-ourteam-detail">
              <img src="images/team/Rectangle 143-3.png" alt="img error" />
              <div id="name">Edward S.</div>
              <div id="job-title">Storyboard Artist</div>
            </div>
            <div class="content-ourteam-detail">
              <img src="images/team/Rectangle 143-4.png" alt="img error" />
              <div id="name">Kadin S.</div>
              <div id="job-title">Lead 2D Environment</div>
            </div>
            <div class="content-ourteam-detail">
              <img src="images/team/Rectangle 143-5.png" alt="img error" />
              <div id="name">Henry F.</div>
              <div id="job-title">Lead Color</div>
            </div>
            <div class="content-ourteam-detail">
              <img src="images/team/Rectangle 143-6.png" alt="img error" />
              <div id="name">Toan Tr.</div>
              <div id="job-title">Rigger</div>
            </div>
            <div class="content-ourteam-detail">
              <img src="images/team/Rectangle 143-7.png" alt="img error" />
              <div id="name">Long Ng.</div>
              <div id="job-title">Lead UI/UX</div>
            </div>
            <div class="content-ourteam-detail">
              <img src="images/team/Rectangle 143-8.png" alt="img error" />
              <div id="name">Dung H.</div>
              <div id="job-title">FX</div>
            </div>
            <div class="content-ourteam-detail">
              <img src="images/team/Group 128.png" alt="img error" />
              <div id="name">Uyen V.</div>
              <div id="job-title">Concept Artist</div>
            </div>
            <div class="content-ourteam-detail">
              <img src="images/team/Group 127.png" alt="img error" />
              <div id="name">Nhung T.</div>
              <div id="job-title">Producer</div>
            </div>
            <div class="content-ourteam-detail">
              <img src="images/team/Group 129.png" alt="img error" />
              <div id="name">Dung Ng.</div>
              <div id="job-title">Layout</div>
            </div>
            <div class="content-ourteam-detail">
              <img src="images/team/Rectangle 143-9.png" alt="img error" />
              <div id="name">Thuan Ng.</div>
              <div id="job-title">Animator</div>
            </div>
            <div class="content-ourteam-detail">
              <img src="images/team/Rectangle 143-10.png" alt="img error" />
              <div id="name">Nhut Ng.</div>
              <div id="job-title">Enviroment Artist</div>
            </div>
            <div class="content-ourteam-detail">
              <img src="images/team/Rectangle 143-11.png" alt="img error" />
              <div id="name">Thang Duong</div>
              <div id="job-title">Character Artist</div>
            </div>
            <div id="andMore">AND MORE...</div>
          </div>
          <div class="title">OUR ADVISORS</div>
          <div class="content-ourAdvisors">
            <div id="carousel-advisor" class="carousel slide mb-5" data-ride="carousel" data-interval="false">
              <div class="carousel-inner text-center">
                <div class="carousel-item  text-center active">
                  COMING SOON
                </div>
                <div class="carousel-item text-center ">
                  COMING SOON
                </div>
                <div class="carousel-item text-center ">
                  COMING SOON
                </div>
                <ol class="carousel-indicators">
                  <li data-target="#carousel-advisor" data-slide-to="0" class="active"></li>
                  <li data-target="#carousel-advisor" data-slide-to="1"></li>
                  <li data-target="#carousel-advisor" data-slide-to="2"></li>
                </ol>
              </div>
            </div>
            {/* <div class="content-ourAdvisors-element">
            <img id="image-ourAdvisors" src="images/z3616430533416_431d5bb522ae7923d41a62023f21d7de.jpg" alt="img error" />
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
            <img id="image-ourAdvisors" src="images/z3616430533416_431d5bb522ae7923d41a62023f21d7de.jpg" alt="img error" />
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
            <img id="image-ourAdvisors" src="images/z3616430533416_431d5bb522ae7923d41a62023f21d7de.jpg" alt="img error" />
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
          </div> */}
          </div>
          <div id="concept-art-by">CONCEPT ARTISTS</div>
          <div id="content-concept-art-by">
            <div id="concept-art-by-image">
              <img src="images/Ellipse 24.png" alt="img error" />
              <div id="culu-art-station">CULU ARTWORK</div>
            </div>
            <div id="concept-art-by-text">
              <div class="px-5 text-left">We encourage artists to use their talents where they have the most impact. In addition to helping us stay small, they may have the opportunity to work on a project they weren't originally supposed to work with. Of course, our artists always are consulted first and will take an active role in the decision-making processes. As part of our main Concept artists, congratulations. We thank you for your invaluable contribution. May these contributions pave the way for our game’s success.
                <br></br>
                <br></br>
                Your colleagues trust you to do what is best and appropriate for our promising game, Rise of Immortals.
              </div>
              <div class="pl-5 mt-4">
                <a id="some-of-the-products" target="_blank" href="https://www.artstation.com/tichvi">Some of the products we have made.</a>
              </div>
            </div>
          </div>
          <div id="graphic-engineer-container" class="d-flex">
            <div id="graphic-engineer-title" class="text-left d-flex align-items-center">
              CD3G STORY
            </div>
            <div id="graphic-engineer-img"></div>
          </div>
          <div id="cg3d-container" class="mb-5 pb-5">
            <div id="carousel-cg3d" class="carousel slide mb-5" data-ride="carousel" data-interval="false">
              <div class="carousel-inner text-center pb-5">
                <div class="carousel-item active">
                  <div class="d-flex">
                    <div id="content-left" class="pr-4">
                      <p class="cg3d-text">
                        We believe that fun and beautiful games will become a source of income
                        for anyone, anywhere.
                        <br />
                        Our mission at CG3D Studios is to bring Rise of Immortals, other Blockchain
                        games, and 3D system art at the top for emerging technologies and global
                        adoption.
                        <br />
                        CG3D Studios was founded by people with vast experience in the industry
                        and are comprised of people from different fields of expertise.
                      </p>
                      <p class="cg3d-text">
                        Our team focuses on work efficiency, and optimum performance while also
                        promoting creativity and growth through a professional working
                        environment.
                      </p>
                      <p class="cg3d-text">
                        CG3D Studios was established in Vietnam and quickly had members in
                        France and Finland
                      </p>
                      <p class="cg3d-text">
                        First-class Game Design and Development
                      </p>
                      <p class="cg3d-text">
                        All of our game content is designed and developed from scratch, i.e., from
                        conceptual designs to 3D character modeling and animations.
                      </p>
                      <p class="cg3d-text">
                        We believe that focusing on the smallest details will help players to have a great experience.
                      </p>
                    </div>
                    <div id="content-right" class="pl-4">
                      <p class="cg3d-text">
                        Our 3 design criteria: Good image quality, financial balance and
                        crosschain-platform.
                      </p>
                      <p class="cg3d-text">
                        We built the game around these fundamental values which we believe is
                        the next generation, the next era.
                      </p>
                      <p class="cg3d-text">
                        The future is already here and it's not just even distributed yet. We need
                        more adventurers, builders, thinkers and missionaries to make it well known
                        around the world
                      </p>
                      <p class="cg3d-text">
                        We believe that the best teams are comprised of diverse individuals all working towards a single goal.
                      </p>
                      <p class="cg3d-text">
                        Our journey won’t be easy. It’s going to be dark. It’ll be cold. But eternal glory and recognition await for those that walk the road with us.
                      </p>
                      <p class="cg3d-text">
                        At Rise of Immortals you’ll help build things the world has never seen and conduct experiments that blend gaming, economics, and even political science.
                        We have been tirelessly building Rise of Immortals and our goal is to make it the #1 Blockchain game. Now it's time to make it one of the best games
                        in the virtual world.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item  text-center">
                  COMING SOON
                </div>
                <div class="carousel-item  text-center">
                  COMING SOON
                </div>
                <a class="carousel-control-prev" href="#carousel-cg3d" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel-cg3d" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
                <ol class="carousel-indicators">
                  <li data-target="#carousel-cg3d" data-slide-to="0" class="active"></li>
                  <li data-target="#carousel-cg3d" data-slide-to="1"></li>
                  <li data-target="#carousel-cg3d" data-slide-to="2"></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
