import logo from '../assets/logo.svg';
import logo2 from '../assets/logoen.png'
import resume from "../assets/resume.pdf"

export default function Navbar() {
    return (
    <div className='fixed z-50 bg-neutral-900 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
        <div className="flex justify-between items-center text-white">
            <img src={logo2} className="App-logo w-10 rounded-full" alt="logo" />
            <ul className="hidden md:flex">
            <li className="p-4"><a href="#home" className="hover:underline">Meraki</a></li>
            <li className="p-4"><a href="#about" className="hover:underline">Quienes somos</a></li>
            <li className="p-4"><a href="#propuestas" className="hover:underline">Propuestas</a></li>
            <li className="p-4"><a href="#contact" className="hover:underline">Contactanos</a></li>
            </ul>
            <a href="#participa" rel="noreferrer"  className="bg-yellow-500 rounded-full px-4 py-1 border border-yellow-600 border border-4">Participa</a>
        </div>
    </div>
    )
}
