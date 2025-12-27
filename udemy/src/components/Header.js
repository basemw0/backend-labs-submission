import React from 'react';
import { headerData } from '../data/dummyData';
import { images } from '../data/images';

const Header = () => {
  return (
    <header className="header">
      <div className="top-banner">
        <div className="container">
          <div className="top-banner-content">
            <span className="banner-text">{headerData.banner.text}</span>
            <span className="banner-timer">Ends in {headerData.banner.timer}</span>
            <button className="banner-btn">{headerData.banner.buttonText}</button>
          </div>
        </div>
      </div>
      
      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <img src={images.udemyLogo} alt="Udemy" className="logo-image" />
            </div>
            
            <div className="nav-categories">
              <button className="nav-category-btn">
                <span className="category-icon">🎮</span>
                {headerData.categories[0]}
              </button>
              <button className="nav-category-btn">
                <span className="category-icon">🔍</span>
                {headerData.categories[1]}
              </button>
            </div>
            
            <div className="search-bar">
              <div className="search-container">
                <span className="search-icon">🔍</span>
                <input 
                  type="text" 
                  placeholder={headerData.searchPlaceholder}
                  className="search-input"
                />
              </div>
            </div>
            
            <div className="nav-actions">
              <a href="#" className="nav-link">{headerData.actions[0]}</a>
              <a href="#" className="nav-link">{headerData.actions[1]}</a>
              <a href="#" className="nav-link">{headerData.actions[2]}</a>
            </div>
            
            <div className="nav-icons">
              <button className="icon-btn">🛒</button>
              <button className="icon-btn">🔔</button>
            </div>
            
            <div className="auth-buttons">
              <button className="btn btn-secondary">{headerData.auth.login}</button>
              <button className="btn btn-primary">{headerData.auth.signup}</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;