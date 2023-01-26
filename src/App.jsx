import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { OccupationSection } from './components/OccupationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <OccupationSection />
      <ProjectsSection />
      <SkillsSection />

    </div>
  )
}

export default App
