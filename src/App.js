import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import DownloadApp from './components/DownloadApp';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <HowItWorks />
      <br /><br /><br />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;