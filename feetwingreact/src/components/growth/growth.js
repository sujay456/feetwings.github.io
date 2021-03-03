import React from 'react';
import { FaUserAstronaut ,FaLightbulb,FaSpa,FaRocket,FaBriefcaseMedical} from "react-icons/fa";

const Growth=(props)=>{

    return (
        <section class="growth" id="feature">
    <div class="growth__wrapper">
      <div class="container">
        <h2 class="section-heading color-black">App that assists exponential growth.</h2>
        <div class="row">
          <div class="col-lg-6">
            <div class="growth__box">
              <div class="icon">
                <FaUserAstronaut />
              </div>
              <div class="content">
                <h3>Start Easily</h3>
                <p class="paragraph dark">Auisque metus tortor ultricies ac ligula neced eleifend sodales felise.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="growth__box">
              <div class="icon">
                <FaLightbulb />
              </div>
              <div class="content">
                <h3>Improve Growth</h3>
                <p class="paragraph dark">Kuisque metus tortor ultricies ac ligula neced eleifend sodales felise.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="growth__box">
              <div class="icon">
                <FaSpa />
              </div>
              <div class="content">
                <h3>Create Algorithms</h3>
                <p class="paragraph dark">Nuisque metus tortor ultricies ac ligula neced eleifend sodales felise.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="growth__box">
              <div class="icon">
                <FaBriefcaseMedical />
              </div>
              <div class="content">
                <h3>Expand Portfolio</h3>
                <p class="paragraph dark">Euisque metus tortor ultricies ac ligula neced eleifend sodales felise.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="growth__box">
              <div class="icon">
                <FaRocket />
              </div>
              <div class="content">
                <h3>Share Statistics</h3>
                <p class="paragraph dark">Buisque metus tortor ultricies ac ligula neced eleifend sodales felise.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="growth__box">
              <div class="icon">
                <FaUserAstronaut/>
              </div>
              <div class="content">
                <h3>Measure Results</h3>
                <p class="paragraph dark">Suisque metus tortor ultricies ac ligula neced eleifend sodales felise.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="button__wrapper">
            <a href="/" class="button">
              <span>GET STARTED <i class="fad fa-long-arrow-right"></i></span>
            </a>
            <a href="/" class="button">
              <span>LEARN MORE <i class="fad fa-long-arrow-right"></i></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
}

export default Growth;