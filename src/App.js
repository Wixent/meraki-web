import './App.css';
import {useEffect} from 'react'

import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Convivencia from './Convivencia';

import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
    useEffect(() => {
      document.title = 'Lista Meraki';
      AOS.init();
    }, []);
  return (
    <div className="px-6 lg:px-20 xl:px-36 bg-dark-400"> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="convivencia" element={<Convivencia />} />
      </Routes>
    </div>
  );
}

export default App;
