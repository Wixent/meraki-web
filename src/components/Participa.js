import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PopupButton } from '@typeform/embed-react'

import hr from "../assets/curve-hr.svg"

const MyComponent = () => {
    return (
      <div id="participa-button" className="mt-4">
      <PopupButton id="gBEWkJJl" style={{ fontSize: 20 }} className="my-button">
        Haz Click aquí para participar.
      </PopupButton>
      </div>
      
    )
  }

export default function Participa() {

    return (
        <div id="participa" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Participa</h1>
            <p className="font-light text-gray-400">Rellena un formulario para que tus propuestas sean mostradas en la pagina con forma de sticker.</p>

            <MyComponent/>

            <img src={hr} className="w-full mt-8 md:h-2" alt="hr"/>
            
        </div>
    )
}