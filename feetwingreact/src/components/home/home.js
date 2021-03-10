import React,{useEffect,useRef} from 'react';
import gsap from 'gsap';
import '../../assets/css/style.css';
import appimg from '../../assets/images/phone-01.png';
import {ScrollTrigger} from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);

const Home =(props)=>{
    const img=useRef(null);
    const container=useRef(null);

 
    useEffect(()=>{
      gsap.set('.main-heading span',{yPercent:55})
      gsap.set('.paragraph .whole',{yPercent:95});
      gsap.set('.main-heading span',{yPercent:75,opacity:0});
      gsap.to('.main-heading span',{yPercent:0,ease:"SlowMo.easeOut",stagger:0.1,duration:0.6,delay:0.2,opacity:1});      
      gsap.to('.paragraph .whole',{yPercent:0,delay:0.4})
      
      
    
    },[])
  
    return (
        <section class="hero">
    <div className="hero__wrapper">
      <div className="container">
        <div className="row align-items-lg-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <h2 className="main-heading color-black" > 
              <span >REDEFINGING</span>
            </h2>
            <h2 className="main-heading color-black">
              <span >LIMITS</span>
            </h2>
            {/* {mottoComp} */}
            <p className="paragraph">
              <span className="whole">
              <span className="name">Feetwings<sup>TM</sup></span> is an app that helps you organize
              yourself on the daily basis using systematic
              algorithms to achieve success.
              </span>
              </p>
            <div className="download-buttons">
              <a href="/" className="google-play">
                <i className="fab fa-google-play"></i>
                <div className="button-content">
                  <h6>GET IT ON <span>Google Play</span></h6>
                </div>
              </a>
              <a href="/" className="apple-store">
                <i className="fab fa-apple"></i>
                <div className="button-content">
                  <h6>GET IT ON <span>Apple Store</span></h6>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div ref={container}  className="questions-img hero-img">
              <img ref={img} src={appimg} alt="logo"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        
    );
}

export default Home;