import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const links = [
    { name: "Home", link: 1 },
    { name: "Service", link: 2 },
    { name: "About", link: 3 },
    { name: "Contact", link: 4 }
  ];

  return (
    <div>
      <nav className='bg-gray-800 py-4 px-6 text-white flex items-center justify-between'>
        <h1>Y MUSIC</h1>
        <div className='md:hidden'>
          {showNav ? (
            <FaTimes size={24} className="text-white cursor-pointer z-10" onClick={() => setShowNav(false)} />
          ) : (
            <FaBars size={24} className="text-white cursor-pointer" onClick={() => setShowNav(true)} />
          )}
        </div>
        <ul className={`md:flex  md:w-auto w-full md:justify-end md:mr-0 md:ml-auto md:gap-8 ${showNav ? 'block' : 'hidden md:block'}`}>
          {links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl'>
              <a href={link.link} className='text-white hover:text-gray-400 duration-500'>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {showNav && (
          <div className='md:hidden w-full'>
            <ul className='flex flex-col text-white items-center gap-[30px] absolute w-full py-6 h-screen top-0 left-0 justify-center bg-gray-800 text-[28px]'>
              {links.map(({ link, name }) => (
                <li key={link} className=''>
                  {name}
                </li>
              ))}
              <div className=''>
          {showNav ? (
            <FaTimes size={24} className="text-white cursor-pointer z-10 absolute top-7 right-7" onClick={() => setShowNav(false)} />
          ) : (
            <FaBars size={24} className="text-white cursor-pointer" onClick={() => setShowNav(true)} />
          )}
        </div>
            </ul>
          </div>
          
        )}
    </div>
  );
};

export default Navbar;
