import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import './styles/App.css';

console.log(HeroSection);


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
