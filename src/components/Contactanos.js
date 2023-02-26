import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import hr from "../assets/curve-hr.svg"

export default function Contactanos() {

    return (
        <div id="contact" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Contactanos</h1>
            <p className="font-light text-gray-400">Rellena el formulario para hablarnos de manera privada sobre cualquier duda, sugerencia o propuesta.</p>


        
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}