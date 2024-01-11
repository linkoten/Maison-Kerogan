import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link';

const test = () => {
    return (
        <Sheet >
  <SheetTrigger>
  <div className="fixed top-10 left-10 space-y-2 cursor-pointer pl-4 z-30 sm:hidden ">
  <span className="block w-8 h-1 bg-gray-600"></span>
          <span className="block w-8 h-1 bg-gray-600"></span>
          <span className="block w-8 h-1 bg-gray-600"></span>
          </div>
          </SheetTrigger>
          
  <SheetContent>
    <SheetHeader >
      <SheetTitle>Are you absolutely sure? 
      

      

      </SheetTitle>
      <SheetDescription>
      <div className='flex flex-col text-3xl space-y-12 text-black'>
      <Link className='pt-8' href="/">Accueil</Link>
      <Link className='pt-10' href="/Tapas">Tapas</Link>
      <Link className='pt-12' href="/Brunch">Brunch</Link>
      </div>
      </SheetDescription>

    </SheetHeader>
  </SheetContent>
</Sheet>
    );
};

export default test;