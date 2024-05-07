import './App.css';
import LocationForm from "./components/LocationForm";
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
      <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<LocationForm/>} />
            <Route path='/weather' element={<LocationForm/>} />

          </Routes>
      </div>
  );
}

export default App;
