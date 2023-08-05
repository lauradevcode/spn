import React from 'react';
import Logotipo from '../assets/imagens/logo.png'
// import { Container } from './styles';

const Navbar: React.FC = () => {
  return <nav className="bg-blue-500 py-4 w-full z-10 flexed z-10">
    <div className="container mx-auto flex">
      <div>
        <a href="">
          <img className='w-28' src={Logotipo} alt="logo" />
        </a>
      </div>
      <div className='ml-40'>
        <ul className="flex space-x-4">
          <li>
          <a href="#" className="text-yellow-400 font-bold hover:text-yellow-400">Home</a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-yellow-400 hover:font-bold" >About</a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-yellow-400 hover:font-bold">Contact</a>
        </li>
        </ul>
      </div>
    </div>
  </nav>;
}

export default Navbar;