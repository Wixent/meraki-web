import hr from '../assets/curve-hr.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
  return (
    <div className="mt-4 bg-dark-200 rounded-md text-white px-8 py-4">
      <ul className="text-center">
      
      

      <img src={hr} className="mb-4 mt-4 w-full md:h-1 text-white bottom-0" alt="hr" />
      <li>
          <a href='https://github.com/wixent/meraki-web' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
      </li>
      <img src={hr} className="mb-4 mt-4 w-full md:h-1 text-white bottom-0" alt="hr" /> 
      </ul>
      <p className="text-sm font-light text-center">Copyright © 2023 Vicente Araos. All Right Reserved</p>

    </div>
  )
}
