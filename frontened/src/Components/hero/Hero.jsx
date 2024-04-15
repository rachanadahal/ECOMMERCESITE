import React from 'react'
import './Hero.css';
import handIcon from '../Assets/hand_icon.png'
import arrowIcon from '../Assets/arrow.png'
import heroimage from '../Assets/hero_image.png'
export const Hero = () => {
  return (
   <div className="hero">
    <div className="hero-left">
        <h2>ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon">
                <p>New</p>
                <img src={handIcon} alt="hand Icon" />
            </div>
            <p>Collection</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest collection </div>
            <img src={arrowIcon} alt="Arrow Icon" />
        </div>
    </div>
    <div className="hero-right">
        <img src={heroimage} alt="Hero Image" />
    </div>
   </div>
  );
};
