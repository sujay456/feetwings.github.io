import React,{useEffect} from 'react';
import bg from '../../assets/images/phone-01.png';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Question =(props)=>{
  useEffect(()=>{
    gsap.set('.questions',{opacity:0,y:100});

    gsap.to('.questions',
    {
      scrollTrigger:{
        trigger:'.questions',
        // markers:true,
        start:'0% 70%',
        toggleActions:'play none none none',
      },
      y:0,
      opacity:1
    })
  },[])
    return (
        <section class="questions" id="faq">
    <div class="questions__wrapper">
      <div class="container">
        <h2 class="section-heading color-black">Some frequently asked questions.</h2>
        <div class="row align-items-lg-center">
          <div class="col-lg-6 order-2 order-lg-1">
            <div id="accordion">
              <div class="card" id="card-1">
                <div class="card-header" id="heading-1">
                  <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapse-1" aria-expanded="true"
                      aria-controls="collapse-1">
                      How does algorithms work?
                    </button>
                  </h5>
                </div>

                <div id="collapse-1" class="collapse show" aria-labelledby="heading-1" data-parent="#accordion">
                  <div class="card-body">
                    <p class="paragraph">With increasing calls for government accountability and cost savings, agencies
                      are contending with a mountain
                      of rule and policy changes affecting everything from pensions and benefits, to client eligibility
                      and oversight.</p>
                  </div>
                </div>
              </div>
              <div class="card" id="card-2">
                <div class="card-header" id="heading-2">
                  <h5 class="mb-0 hidden">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-2"
                      aria-expanded="false" aria-controls="collapse-2">
                      What is a business rules engine?
                    </button>
                  </h5>
                </div>
                <div id="collapse-2" class="collapse" aria-labelledby="heading-2" data-parent="#accordion">
                  <div class="card-body">
                    <p class="paragraph">With increasing calls for government accountability and cost savings, agencies
                      are contending with a mountain
                      of rule and policy changes affecting everything from pensions and benefits, to client eligibility
                      and oversight.</p>
                  </div>
                </div>
              </div>
              <div class="card" id="card-3">
                <div class="card-header" id="heading-3">
                  <h5 class="mb-0 hidden">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-3"
                      aria-expanded="false" aria-controls="collapse-3">
                      How are datadirect drivers different?
                    </button>
                  </h5>
                </div>
                <div id="collapse-3" class="collapse" aria-labelledby="heading-3" data-parent="#accordion">
                  <div class="card-body">
                    <p class="paragraph">With increasing calls for government accountability and cost savings, agencies
                      are contending with a mountain
                      of rule and policy changes affecting everything from pensions and benefits, to client eligibility
                      and oversight.</p>
                  </div>
                </div>
              </div>
              <div class="card" id="card-4">
                <div class="card-header" id="heading-4">
                  <h5 class="mb-0 hidden">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-4"
                      aria-expanded="false" aria-controls="collapse-4">
                      How do determine agencies compliance?
                    </button>
                  </h5>
                </div>
                <div id="collapse-4" class="collapse" aria-labelledby="heading-4" data-parent="#accordion">
                  <div class="card-body">
                    <p class="paragraph">With increasing calls for government accountability and cost savings, agencies
                      are contending with a mountain
                      of rule and policy changes affecting everything from pensions and benefits, to client eligibility
                      and oversight.</p>
                  </div>
                </div>
              </div>
              <div class="card" id="card-5">
                <div class="card-header" id="heading-5">
                  <h5 class="mb-0 hidden">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-5"
                      aria-expanded="false" aria-controls="collapse-5">
                      How are datadirect drivers different?
                    </button>
                  </h5>
                </div>
                <div id="collapse-5" class="collapse" aria-labelledby="heading-5" data-parent="#accordion">
                  <div class="card-body">
                    <p class="paragraph">With increasing calls for government accountability and cost savings, agencies
                      are contending with a mountain
                      of rule and policy changes affecting everything from pensions and benefits, to client eligibility
                      and oversight.</p>
                  </div>
                </div>
              </div>
              <div class="card" id="card-6">
                <div class="card-header" id="heading-6">
                  <h5 class="mb-0 hidden">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-6"
                      aria-expanded="false" aria-controls="collapse-6">
                      What is a business rules engine?
                    </button>
                  </h5>
                </div>
                <div id="collapse-6" class="collapse" aria-labelledby="heading-6" data-parent="#accordion">
                  <div class="card-body">
                    <p class="paragraph">With increasing calls for government accountability and cost savings, agencies
                      are contending with a mountain
                      of rule and policy changes affecting everything from pensions and benefits, to client eligibility
                      and oversight.</p>
                  </div>
                </div>
              </div>
              <div class="card" id="card-7">
                <div class="card-header" id="heading-7">
                  <h5 class="mb-0 hidden">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-7"
                      aria-expanded="false" aria-controls="collapse-7">
                      What are the types of datadirect drivers?
                    </button>
                  </h5>
                </div>
                <div id="collapse-7" class="collapse" aria-labelledby="heading-7" data-parent="#accordion">
                  <div class="card-body">
                    <p class="paragraph">With increasing calls for government accountability and cost savings, agencies
                      are contending with a mountain
                      of rule and policy changes affecting everything from pensions and benefits, to client eligibility
                      and oversight.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 order-1 order-lg-2">
            <div class="questions-img">
              <img src={bg} alt="img"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
}

export default Question;