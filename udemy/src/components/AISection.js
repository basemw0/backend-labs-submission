import React from 'react';
import { aiSectionData } from '../data/dummyData';
import { images } from '../data/images';

const AISection = () => {
  return (
    <section className="ai-section">
      <div className="container">
        <div className="ai-content">
          <div className="ai-text">
            <h2 className="section-title">{aiSectionData.title}</h2>
            <p className="section-subtitle">{aiSectionData.subtitle}</p>
            
            <div className="features-list">
              {aiSectionData.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className={`feature-icon ${feature.checked ? 'checked' : 'unchecked'}`}>
                    {feature.checked ? '✓' : '○'}
                  </span>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
            
            <div className="pricing">
              <span className="price-label">Starting at </span>
              <span className="price">{aiSectionData.price}</span>
              <span className="price-period">/month</span>
            </div>
            
            <button className="btn btn-secondary">{aiSectionData.ctaText}</button>
          </div>
          
          <div className="ai-visual">
            <img src={images.aiVisual} alt="AI Learning" className="ai-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
