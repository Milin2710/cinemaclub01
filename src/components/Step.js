import React from 'react';
import './Step.css';
import work1 from '../assets/work2.png'

function Step({ image, title, description }) {
  return (
    <div className="step">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Step;
