import './App.css';
import LocationForm from "./components/LocationForm";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Weather from './components/Weather';

function App() {
  return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
              <Route path='/' element={<LocationForm/>} />
              <Route path='/weather' element={<Weather/>} />
            </Routes>
        </Router>
      </div>
  );
}

export default App;
