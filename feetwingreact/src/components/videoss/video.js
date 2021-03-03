import React from 'react';
import {FaPlay,FaTimes } from "react-icons/fa";
import bg1 from '../../assets/images/video-bg-1.png';
import bg2 from '../../assets/images/video-img.png';
import bg3 from '../../assets/images/video-bg-2.png';
const Video=(props)=>{

    return(
      <div class="video" id="video">
    <div class="video__wrapper">
      <div class="container">
        <div class="video__play">
          <button type="button" data-toggle="modal" data-target="#videoModal">
            <FaPlay />
          </button>
          <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-close">
                  <button type="button" data-dismiss="modal" aria-label="Close">
                   
                    <FaTimes />
                  </button>
                </div>
                <div class="modal-body">
                  <iframe title="Vid" src="https://www.youtube.com/embed/2BrCE_zxM0U"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="video__background">
          <img src={bg1} alt="im" class="texture-1"></img>
          <img src={bg2} alt="im" class="phone"></img>
          <img src={bg3} alt="im" class="texture-2"></img>
        </div>
      </div>
    </div>
  </div>
    );
}

export default Video;