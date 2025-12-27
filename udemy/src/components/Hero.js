import React from 'react';
import { heroData } from '../data/dummyData';
import { images } from '../data/images';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${images.heroBackground})` }}>
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{heroData.title}</h1>
            <p className="hero-description">{heroData.description}</p>
            <button className="btn btn-primary hero-cta">{heroData.ctaText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;