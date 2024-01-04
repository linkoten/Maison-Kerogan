'use client';

import React from 'react';
import { Button } from '../ui/button';




import Link from 'next/link';



//version web

function header() {
    return (
        <>
      <header className=' sticky top-0 bg-vert text-ocre rounded-xl z-10 py-6 m-5  '>
        <nav className='  container flex items-center justify-between'>
          {/* Logo */}
          <div>
            <Link
              href='/'
              className=' grow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center text-[8px] font-bold uppercase tracking-widest sm:text-sm lg:text-2xl'
            >
              Logo
            </Link>
          </div>

          {/* Nav links */}
          <ul className='flex items-center gap-2 sm:gap-6 lg:gap-10'>
            
            <li className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-[8px] font-medium uppercase tracking-wider  lg:text-sm'>
              <Link href='/Brunch'>Brunch</Link>
            </li>
            <li className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-[8px] font-medium uppercase tracking-wider  lg:text-sm '>
              <Link href='/Location'>Location</Link>
            </li>
            <li className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-[8px] font-medium uppercase tracking-wider  lg:text-sm '>
              <Link href='/Salon_de_the'>Salon De Thé</Link>
            </li>
            <li className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-[8px] font-medium uppercase tracking-wider  lg:text-sm '>
              <Link href='/Tapas'>Tapas</Link>
            </li>
            <li className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-[8px] font-medium uppercase tracking-wider  lg:text-sm '>
                <Link href='/A_Propos'>A Propos</Link>
            </li>
          </ul>

          {/* Shopping cart */}
          <Button variant='outline' className=' bg-vert flex items-center  justify-between gap-1 lg:gap-6 hover:bg-ocre text-[8px] sm:text-sm '>
            Réserver
          </Button>
        </nav>
      </header>
      
    </>
    );
}

export default header;
