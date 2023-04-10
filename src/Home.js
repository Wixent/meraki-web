import './App.css';
import Navbar from './components/Navbar';
import Meraki from './components/Meraki';
import Nosotros from './components/Nosotros'
import Propuestas from './components/Propuestas';
import Contactanos from './components/Contactanos'
import Participa from './components/Participa';
import Footer from './components/Footer';
import 'aos/dist/aos.css';

function Home() {
    return (
      <div>
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
  
  export default Home;