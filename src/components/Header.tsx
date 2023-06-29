import React from 'react';
import Socials from './Socials';

function Header() {
  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg: flex-col lg: justify-between lg:py-24'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
          <a href='/'>Thomas Schmidt</a>
        </h1>
        <h2 className='text-white w-fit bg-black mt-3 text-lg font-medium tracking-tight sm:text-xl'>
          Frontend-Developer at c-Com
        </h2>

        <nav className='nav hidden lg:block' aria-label='In-page jump links'>
          <ul className='mt-16 w-max'>
            <li>
              <a className='group flex items-center py-3' href='#about'>
                <span className='nav-indicator mr-4 h-px w-8 bg-black transition-all group-hover:w-16  group-focus-visible:w-16 motion-reduce:transition-none'></span>
                <span className='nav-text text-xs font-bold uppercase tracking-widest text-black'>
                  About
                </span>
              </a>
            </li>
            <li>
              <a className='group flex items-center py-3' href='#experience'>
                <span className='nav-indicator mr-4 h-px w-8 bg-black transition-all group-hover:w-16  group-focus-visible:w-16 motion-reduce:transition-none'></span>
                <span className='nav-text text-xs font-bold uppercase tracking-widest text-black'>
                  Experience
                </span>
              </a>
            </li>
            <li>
              <a className='group flex items-center py-3' href='#projects'>
                <span className='nav-indicator mr-4 h-px w-8 bg-black transition-all group-hover:w-16  group-focus-visible:w-16 motion-reduce:transition-none'></span>
                <span className='nav-text text-xs font-bold uppercase tracking-widest text-black'>
                  Projects
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <Socials></Socials>
    </header>
  );
}

export default Header;
