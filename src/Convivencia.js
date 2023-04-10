import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import 'aos/dist/aos.css';
import ConvivenciaText from './components/ConvivenciaText';


function Convivencia() {
  return (
    <div>
      <Navbar />
      <ConvivenciaText/>
      <Footer />
      
    </div>
  );
}

export default Convivencia;
