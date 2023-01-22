import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { OccupationSection } from './components/OccupationSection';
import { CertificatesSection } from './components/CertificatesSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <OccupationSection />
      <CertificatesSection />

    </div>
  )
}

export default App
