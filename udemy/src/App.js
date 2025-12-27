import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import AISection from './components/AISection';
import CoursesSection from './components/CoursesSection';
import TrustedCompanies from './components/TrustedCompanies';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SkillsSection />
      <AISection />
      <CoursesSection />
      <TrustedCompanies />
    </div>
  );
}

export default App;
