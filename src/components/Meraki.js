import {useState} from 'react'

import logogrande from '../assets/logogrande.svg';
import logo3 from '../assets/Group69.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowRight, } from "@fortawesome/free-solid-svg-icons";
import hr from '../assets/curve-hr.svg'

export default function Meraki () {

    const [loaded, setLoaded] = useState(true);

    return (
        <>
        {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        }
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div classNames='md:w-3/6 md:p-4'>
                <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200"  src={logo3} alt="logogrande" onLoad={() => setLoaded(false)} />
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-2xl font-bold">Lista para el Centro de Almunos IHLC 2023</h1>
                    <p className="text-md font-light text-gray-400 ">La palabra Meraki proviene del Griego y a su vez, del Turco merak, que significa "hacer algo con amor y con pasion".</p>
                </div>
                <a href='https://www.instagram.com/listameraki2023/' className='mt-2 block'>Siguenos en nuestro instagram<FontAwesomeIcon className='ml-2' icon={faCircleArrowRight}/> </a>
            

            </div>
            
        </div>
        </>
    )
}
