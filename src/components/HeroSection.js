import React from 'react';
import './HeroSection.css';
import preview from '../assets/previewapp1.png'

function HeroSection() {
  return (
    <>
    <section className="hero">
      <p className='hero-p1'>Food app</p>
      <h1>Why stay hungry when you can order from Bella Onojie</h1>
      <p>Download the bella onoje's food app now on</p>
      <div className="cta-buttonsh">
        <button className='playstoreh-btn'>Playstore</button>
        <button className='appstoreh-btn'>App Store</button>
      </div>
    </section>
    <div className="previewdiv">
      <img className='previewimg' src={preview} alt="" />
    </div>
    <hr className='bottomhr' />
    </>
  );
}

export default HeroSection;
