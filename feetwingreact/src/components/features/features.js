import React,{useEffect} from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { FaUserAstronaut ,FaLightbulb,FaSpa,FaRocket} from "react-icons/fa";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Features=(props)=>{

    useEffect(()=>{
      gsap.set('.feature',{opacity:0,y:100});

      gsap.to('.feature',
      {
        scrollTrigger:{
          trigger:'.feature',
          // markers:true,
          start:'0% 70%',
          toggleActions:'play none none none',
        },
        y:0,
        opacity:1
      })
    },[])
    return (
        <section class="feature" id="intro">
    <div class="container">
      <h2 class="section-heading color-black">Get surprised by amazing features.</h2>
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <div class="feature__box feature__box--1">
            <div class="icon icon-1">
              {/* <i class="fad fa-user-astronaut"></i> */}
              <FaUserAstronaut />
            </div>
            <div class="feature__box__wrapper">
              <div class="feature__box--content feature__box--content-1">
                <h3>Join in Easy Steps</h3>
                <p class="paragraph dark">Suisque metus tortor ultricies ac ligula neced eleifend sodales felise morbi
                  nec tempor isvelultricies ligula.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="feature__box feature__box--2">
            <div class="icon icon-2">
              {/* <i class="fad fa-lightbulb-on"></i> */}
              <FaLightbulb/>
            </div>
            <div class="feature__box__wrapper">
              <div class="feature__box--content feature__box--content-2">
                <h3>Track Your Progress</h3>
                <p class="paragraph dark">Euisque metus tortor ultricies ac ligula neced eleifend sodales felise morbi
                  nec tempor isvel ultricies ligula.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="feature__box feature__box--3">
            <div class="icon icon-3">
              {/* <i class="fad fa-solar-system"></i> */}
              <FaSpa />
            </div>
            <div class="feature__box__wrapper">
              <div class="feature__box--content feature__box--content-3">
                <h3>Improve Your Growth</h3>
                <p class="paragraph dark">Auisque metus tortor ultricies ac ligula neced eleifend sodales felise morbi
                  nec tempor isvel ultricies ligula.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="feature__box feature__box--4">
            <div class="icon icon-4">
              {/* <i class="fad fa-rocket-launch"></i> */}
              <FaRocket />
            </div>
            <div class="feature__box__wrapper">
              <div class="feature__box--content feature__box--content-4">
                <h3>Become an Inspiration</h3>
                <p class="paragraph dark">Tuisque metus tortor ultricies ac ligula neced eleifend sodales felise morbi
                  nec tempor isvel ultricies ligula.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
}

export default Features;