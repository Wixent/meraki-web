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
            <p className="font-light text-gray-400">Aqui se encuentran nuestras principales propuestas</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Propuesta 1" img={adinusa} issued="Descripción Propuesta 1"  />
                <CertCard name="Propuesta 2" img={adinusa} issued="Descripción Propuesta 2"  />
                <CertCard name="Propuesta 3" img={adinusa} issued="Descripción Propuesta 3"  />
                <CertCard name="Propuesta 4" img={adinusa} issued="Descripción Propuesta 4"  />
                <CertCard name="Propuesta 5" img={adinusa} issued="Descripción Propuesta 5"  />
                <CertCard name="Propuesta 6" img={adinusa} issued="Descripción Propuesta 6"  />
                <CertCard name="Propuesta 7" img={adinusa} issued="Descripción Propuesta 7"  />
                <CertCard name="Propuesta 8" img={adinusa} issued="Descripción Propuesta 8"  />
                <CertCard name="Propuesta 9" img={adinusa} issued="Descripción Propuesta 9"  />
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />    
        </div>
    )
}
