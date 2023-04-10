import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PopupButton } from '@typeform/embed-react'

import hr from "../assets/curve-hr.svg"
import { useEffect } from 'react';
import { useState } from 'react';
import ParticipaCard from './ParticipaCard';
  
  

export default function Participa() {

  const [data, setData] = useState([])

  async function getResponse() {
    // GET request using fetch with async/await
    const response = await fetch(
      'https://apimerkai.herokuapp.com/respuestas',
    {
      method: "get",
      headers: {
      }
    }
    ).then(res => {
      return res.json()
    });

    setData(response.items)

  }

  const MyComponent = () => {
    return (
      <div id="participa-button" className="mt-4">
      <PopupButton id="gBEWkJJl" 
      style={{ fontSize: 20 }} 
      className="text-2xl font-bold bg-yellow-500 rounded-full px-4 py-1 border border-yellow-600 border border-4"
      onClose={() => {getResponse()}}
      >
        Haz Click aquí para participar.
      </PopupButton>
      </div>
      
    )
  }
 

useEffect(() => {
   getResponse()
}, []);

console.log(data)

    return (
        <div id="participa" className="mt-4 text-white items-center">
            <h1 className="text-2xl font-bold">Participa</h1>
            <p className="font-light text-gray-400">Rellena un formulario para que tus propuestas sean mostradas en la pagina con forma de sticker.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
              {data && data.length > 0 && data.map(respuesta => {

                  const nombre = respuesta.answers.find((res) => res.field.id != "PJOplBqbXFJY" )
                  const prop = respuesta.answers.find((res) => res.field.id == "PJOplBqbXFJY")

                  return <ParticipaCard name={nombre && nombre.text} propuesta={prop && prop.text} /> 

                  })
                }



            </div>

            <div className="flex justify-center" style={{marginTop:"15px"}}><MyComponent></MyComponent></div>

            <img src={hr} className="w-full mt-8 md:h-2" alt="hr"/>
            
        </div>
        
    
    )
}