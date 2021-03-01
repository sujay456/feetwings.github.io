import React from 'react';
import bg from '../../assets/images/phone-01.png';
const Step=(props)=>{

    return (
        <section class="step">
    <div class="step__wrapper">
      <div class="container">
        <h2 class="section-heading color-black">Jumpstart your growth in just few clicks.</h2>
        <div class="row">
          <div class="col-lg-4">
            <div class="step__box">
              <div class="image">
                <img src={bg} alt="img"></img>
              </div>
              <div class="content">
                <h3>EASY TO<span>Register.</span></h3>
                <p class="paragraph dark">Join the app in 3 easy steps and get
                  started with your progresso daily.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="step__box">
              <div class="image">
                <img src={bg} alt="img"></img>
              </div>
              <div class="content">
                <h3>SIMPLE TO<span>Create.</span></h3>
                <p class="paragraph dark">Once you’re signed up you can create
                  as many polls you want to watch.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="step__box">
              <div class="image">
                <img src={bg} alt="img"></img>
              </div>
              <div class="content">
                <h3>FUN TO<span>Measure.</span></h3>
                <p class="paragraph dark">Share your growth results with your
                  friends and inspre others.</p>
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

export default Step;