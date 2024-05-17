import './App.css';
import LocationForm from "./components/LocationForm";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Weather from './components/Weather';
import { useState } from 'react';

function App() {
  const [positions, setPositions] = useState([]);

  function onSubmit(position) {
    setPositions(prevPositions => [...prevPositions, position]);
  }

  return (
    <div>
      <Router>
      <Navbar positions={positions} />

        <Routes>
            <Route path="/" element={<LocationForm onSubmit={onSubmit} />} />
            <Route path="/weather" element={<Weather lat={positions[positions.length - 1]?.lat} lon={positions[positions.length - 1]?.lon} />} />
            {positions.map((position, index) => (
                <Route key={index} path={`/weather/${index}`} element={<Weather lat={position.lat} lon={position.lon} />} />
            ))}
            {/* Define additional routes as needed */}
        </Routes>

      </Router>
    </div>
  );
}

export default App;
