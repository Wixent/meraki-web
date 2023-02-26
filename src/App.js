import './App.css';
import {useEffect} from 'react'
import Navbar from './components/Navbar';
import Meraki from './components/Meraki';
import Nosotros from './components/Nosotros'
import Propuestas from './components/Propuestas';
import Contactanos from './components/Contactanos'
import Participa from './components/Participa';
import Footer from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
    useEffect(() => {
      document.title = 'Lista Meraki';
      AOS.init();
    }, []);
  return (
    <div className="px-6 lg:px-20 xl:px-36 bg-dark-500">
      <Navbar />
      <Meraki />
      <Nosotros/>
      <Propuestas />
      <Contactanos />
      <Participa />
      <Footer />
    </div>
  );
}

export default App;
