'use client';

import React from 'react';
import { Button } from '../ui/button';




import Link from 'next/link';



//version web

function header() {
    return (
        
      <header className=' sticky top-0 bg-vert text-ocre rounded-xl z-10 py-6 sm:m-5 mb-4  '>
        <nav className='  container flex items-center justify-between'>
          {/* Logo */}
          <div>
            <Link
              href='/'
              className=' grow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center text-[6px] sm:text-xs md:text-sm lg:text-lg font-bold uppercase tracking-widest '
            >
              Logo
            </Link>
          </div>

          {/* Nav links */}
          <ul className='flex items-center gap-2 sm:gap-6 lg:gap-10 text-[6px] sm:text-xs md:text-sm '>
            
            <li className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  font-medium uppercase tracking-wider  '>
              <Link href='/Brunch'>Brunch</Link>
            </li>
            <li className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  font-medium uppercase tracking-wider   '>
              <Link href='/Location'>Location</Link>
            </li>
            <li className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  font-medium uppercase tracking-wider  '>
              <Link href='/Salon_de_the'>Salon De Thé</Link>
            </li>
            <li className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  font-medium uppercase tracking-wider  '>
              <Link href='/Tapas'>Tapas</Link>
            </li>
            <li className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  font-medium uppercase tracking-wider  '>
                <Link href='/A_Propos'>A Propos</Link>
            </li>
          </ul>

          {/* Shopping cart */}
          <Button variant='outline' className=' bg-vert flex items-center  justify-between gap-1 lg:gap-6 hover:bg-ocre text-[6px] sm:text-xs md:text-sm '>
            Réserver
          </Button>
        </nav>
      </header>
      
    );
}

export default header;
