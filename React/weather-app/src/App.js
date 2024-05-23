import './App.css';
import LocationForm from "./components/LocationForm";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Weather from './components/Weather';
import { useState } from 'react';

export default function App() {
  const [positions, setPositions] = useState([]);

  function onSubmit(position) {
    //Check if city exists
    const cityExists = positions.some(pos => pos.city === position.city);
    
    if (!cityExists) {
      setPositions(prevPositions => [...prevPositions, position]);
    }    
  }

  function deleteItem(index) {
    setPositions(prevPositions => prevPositions.filter((_, i) => i !== index));
  }

  return (
    <div>
      <Router>
        <Navbar positions={positions} onDelete={deleteItem} />

        <Routes>
          <Route path="/" element={<LocationForm onSubmit={onSubmit} />} />
          {positions.map((position, index) => (
            <Route key={index} path={`/weather/${position.city}`} element={<Weather lat={position.lat} lon={position.lon} />} />
          ))}
          {/* Define additional routes as needed */}
        </Routes>

      </Router>
    </div>
  );
}
