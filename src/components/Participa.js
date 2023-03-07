import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PopupButton } from '@typeform/embed-react'

import hr from "../assets/curve-hr.svg"
import { useEffect } from 'react';
import { useState } from 'react';

const MyComponent = () => {
    return (
      <div id="participa-button" className="mt-4">
      <PopupButton id="gBEWkJJl" style={{ fontSize: 20 }} className="text-2xl font-bold bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border border-4">
        Haz Click aquí para participar.
      </PopupButton>
      </div>
      
    )
  }
  

export default function Participa() {

  const [data] = useState(null)

  async function getResponse() {
    // GET request using fetch with async/await
    const response = await fetch(
      'https://api.typeform.com/forms/gBEWkJJl/responses',
    {
      method: "get",
      headers: {
        'Content-type': 'application/json',
        "Authorization" : "Bearer tfp_6brKxaCkpzpwjGvoFUcM3TyjeNcTNTtNSWf3UV4E84NS_3soNJER2VMjnUs"
      }
    }
    );
    data = response.json();
    console.log(data)
    return data
  }

useEffect(() => {
   getResponse()
}, []);


    return (
        <div id="participa" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Participa</h1>
            <p className="font-light text-gray-400">Rellena un formulario para que tus propuestas sean mostradas en la pagina con forma de sticker.</p>
            <MyComponent/>

            {data}

            <img src={hr} className="w-full mt-8 md:h-2" alt="hr"/>
            
        </div>
        
    
    )
}