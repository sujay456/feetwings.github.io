import React,{useEffect,useRef} from 'react';
import gsap from 'gsap';
import '../../assets/css/style.css';
import appimg from '../../assets/images/phone-01.png';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Home =(props)=>{
    const img=useRef(null);
    useEffect(()=>{
        
        gsap.from(img.current,{y:50,opacity:0,duration:1})
        
    },[])   
    return (
        <section class="hero">
    <div className="hero__wrapper">
      <div className="container">
        <div className="row align-items-lg-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <h1 className="main-heading color-black">Redefining Limits!</h1>
            <p className="paragraph"><span>Feetwings<sup>TM</sup></span> is an app that helps you organize
              yourself on the daily basis using systematic
              algorithms to achieve success.</p>
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
            <div className="questions-img hero-img">
              <img ref={img} src={appimg} alt="image"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        
    );
}

export default Home;