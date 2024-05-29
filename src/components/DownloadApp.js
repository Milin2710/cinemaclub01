import React from 'react';
import './DownloadApp.css';

function DownloadApp() {
  return (
    <section className="download-app">
      <h2>Download the app now.</h2>
      <p>Available on your favourite store. Start your premium experience now</p>
      <div className="cta-buttons">
        <button className='playstore-btn'>Playstore</button>
        <button className='appstore-btn'>App Store</button>
      </div>
    </section>
  );
}

export default DownloadApp;
