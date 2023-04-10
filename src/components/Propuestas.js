import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import mtcna from "../assets/certs/mtcna.jpg"
import adinusa from "../assets/certs/adinusa.png"
import dicodingAws from "../assets/certs/dicoding-aws.png"
import dicodingJs from "../assets/certs/dicoding-js.png"
import dicodingNetwork from "../assets/certs/dicoding-network.png"
import progateHtml from "../assets/certs/progate-htmlcss.png"
import progateJs from "../assets/certs/progate-js.png"
import fccResponsive from "../assets/certs/fcc-responsive.png"

// import 

export default function Propuestas(){
    return (
        <div id="propuestas" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Propuestas</h1>
            <p className="font-light text-gray-400">Aqui se encuentran nuestras principales propuestas divididas en nuestros 7 temas principales</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Convivencia" img={adinusa} issued="Descripción Propuesta 1"  link="/convivencia"/>
                <CertCard name="Tesorería" img={adinusa} issued="Descripción Propuesta 2"  />
                <CertCard name="Medio Ambiente" img={adinusa} issued="Descripción Propuesta 3"  />
                <CertCard name="Ciclo Menor" img={adinusa} issued="Descripción Propuesta 4"  />
                <CertCard name="Pastoral" img={adinusa} issued="Descripción Propuesta 5"  />
                <CertCard name="Deportes" img={adinusa} issued="Descripción Propuesta 6"  />
                <CertCard name="Eventos" img={adinusa} issued="Descripción Propuesta 7"  />
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />    
        </div>
    )
}
