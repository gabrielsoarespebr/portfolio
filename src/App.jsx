import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { OccupationSection } from './components/OccupationSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <OccupationSection />
    </div>
  )
}

export default App
