import React from 'react';
import Logo from '../assets/imagens/logo.png'
// import { Container } from './styles';

const Navbar: React.FC = () => {
  return <nav className="bg-blue-500 py-4 w-full z-10 flexed z-10 drop-shadow-md">
  <div className="container mx-auto flex items-center">
    <div>
      <a href="">
        <img className='w-28' src={Logo} alt="Logo" />
      </a>
    </div>
    <div className='ml-96'>
      <ul className="flex space-x-4 gap-2">
        <li>
          <a href="#home" className="text-white hover:text-yellow-400 hover:font-bold hover:underline active:font-bold active:text-yellow-400 active:underline">Home</a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-yellow-400 hover:font-bold hover:underline">Sobre nós</a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-yellow-400 hover:font-bold hover:underline">Portfólio</a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-yellow-400 hover:font-bold hover:underline">Team</a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-yellow-400 hover:font-bold hover:underline">Contatos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>;
}

export default Navbar;