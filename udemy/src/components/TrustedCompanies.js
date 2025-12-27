import React from 'react';
import { trustedCompaniesData } from '../data/dummyData';
import { images } from '../data/images';

const TrustedCompanies = () => {
  const companyLogos = [
    images.cisco,
    images.vimeo,
    images.box,
    images.netflix,
    images.eventbrite,
    images.berkshire
  ];

  return (
    <section className="trusted-companies">
      <div className="container">
        <h2 className="section-title">{trustedCompaniesData.title}</h2>
        <p className="section-subtitle">{trustedCompaniesData.subtitle}</p>
        
        <div className="companies-grid">
          {trustedCompaniesData.companies.map((company, index) => (
            <div key={index} className="company-logo">
              <img src={companyLogos[index]} alt={company} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;