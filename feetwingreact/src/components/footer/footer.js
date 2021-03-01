import React from 'react';

const Footer =(props)=>{
    return (
        <footer class="footer">
    <div class="footer__wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="footer__info">
              <div class="footer__info--logo">
                <img src="#" alt="img"></img>
              </div>
              <div class="footer__info--content">
                <p class="paragraph dark">Zapper is an app that helps you
                  organize yourself on the daily basis
                  using systematic algorithms to
                  achieve success.</p>
                <div class="social">
                  <ul>
                    <li class="facebook"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li class="twitter"><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li class="linkedin"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                    <li class="youtube"><a href="#"><i class="fab fa-youtube"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="footer__content-wrapper">
              <div class="footer__list">
                <ul>
                  <li>Explore</li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Our Team</a></li>
                  <li><a href="#">Features</a></li>
                  
                  <li><a href="#">How It Works</a></li>
                </ul>
              </div>
              <div class="footer__list">
                <ul>
                  <li>Help</li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div class="download-buttons">
                <h5>Download</h5>
                <a href="#" class="google-play">
                  <i class="fab fa-google-play"></i>
                  <div class="button-content">
                    <h6>GET IT ON <span>Google Play</span></h6>
                  </div>
                </a>
                <a href="#" class="apple-store">
                  <i class="fab fa-apple"></i>
                  <div class="button-content">
                    <h6>GET IT ON <span>Apple Store</span></h6>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="footer__copy">
            <h6>&copy; FEETWINGS .PVT.LTD</h6>
          </div>
        </div>
      </div>
    </div>
  </footer>
    );
}

export default Footer;