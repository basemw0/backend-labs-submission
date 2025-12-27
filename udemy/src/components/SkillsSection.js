import React from 'react';
import { skillsData } from '../data/dummyData';
import { images } from '../data/images';

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="section-title">{skillsData.title}</h2>
        <p className="section-subtitle">{skillsData.subtitle}</p>
        
        <div className="skills-grid">
          {skillsData.categories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="skill-icon">
                <img 
                  src={index === 0 ? images.generativeAI : 
                       index === 1 ? images.itCertifications : 
                       images.dataScience} 
                  alt={category.title}
                  className="skill-image"
                />
              </div>
              <h3 className="skill-title">{category.title}</h3>
              <div className="skill-items">
                {category.items.map((item, idx) => (
                  <div key={idx} className="skill-item">
                    <span className="item-bullet">•</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;