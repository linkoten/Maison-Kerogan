'use client'

import React, { useState } from 'react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo-navigation.jpg'
import { Separator } from '../ui/separator';



const drawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Fonction pour ouvrir le Drawer
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  // Fonction pour fermer le Drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
    return (
        <div className='flex justify-center'>
      <Drawer isOpen={isDrawerOpen}>
      <DrawerTrigger onClick={openDrawer}>
                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
</DrawerTrigger>

        <DrawerContent className={`w-full h-full bg-slate-500 ${isDrawerOpen ? '' : 'hidden'}`}>
                    <DrawerHeader className='w-full h-full'>
                        <DrawerDescription className='w-full h-full'>
                            <div className='w-full h-full flex'>
                                <div className='w-full h-full  lg:w-1/3 '>
                                    <div className='w-full h-1/3  bg-ocre hidden'>
                                        {' '}
                                        Réserver
                                    </div>
                                    <ul className='flex justify-around border bg-slate-200 text-vert font-bold  h-full w-full flex-col place-items-center lg:place-items-start lg:pl-20 '>
                                        <Link href='/Le_Chef'>
                                            <li className='w-full flex justify-start items-center hover:text-ocre hover:fill-ocre active:brightness-150 text-3xl space-x-16 ' onClick={closeDrawer}>
                                                <Separator orientation="vertical" className=' h-8 w-[1px]'/>                    
                                                <p>LE CHEF</p>
                                            </li>
                                        </Link>
                                        <Link href='/Brunch'>
                                            <li className='flex justify-start items-center hover:text-ocre hover:fill-ocre text-3xl space-x-16' onClick={closeDrawer}>
                                                <Separator orientation="vertical" className=' h-8 w-[1px]'/>
                                                <p>BRUNCH</p>
                                            </li>
                                        </Link>
                                        <Link href='/Tapas'>
                                            <li className='flex justify-start items-center hover:text-ocre hover:fill-ocre text-3xl space-x-16' onClick={closeDrawer}>
                                            <Separator orientation="vertical" className=' h-8 w-[1px]'/>

                                                <p>TAPAS</p>
                                            </li>
                                        </Link>
                                        <Link href='/Salon_de_the'>
                                            <li className='flex justify-start items-center hover:text-ocre hover:fill-ocre text-3xl space-x-16' onClick={closeDrawer}>
                                            <Separator orientation="vertical" className=' h-8 w-[1px]'/>

                                                <p>THE</p>
                                            </li>
                                        </Link>
                                        <Link href='/Location'>
                                            <li className='flex justify-start items-center hover:text-ocre hover:fill-ocre text-3xl space-x-16' onClick={closeDrawer}>
                                            <Separator orientation="vertical" className=' h-8 w-[1px]'/>

                                                <p>LOCATION</p>
                                            </li>
                                        </Link>
                                        <Link href='/Contact'>
                                            <li className='flex justify-start items-center hover:text-ocre hover:fill-ocre text-3xl space-x-16' onClick={closeDrawer}>
                                            <Separator orientation="vertical" className=' h-8 w-[1px]'/>

                                                <p>CONTACT</p>
                                            </li>
                                        </Link>
                                        <Link href='/A_Propos'>
                                            <li className='flex justify-start items-center hover:text-ocre hover:fill-ocre text-3xl space-x-16' onClick={closeDrawer}>
                                            <Separator orientation="vertical" className=' h-8 w-[1px]'/>

                                                <p>A PROPOS</p>
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                                <Image className='hidden  z-20 h-full w-2/3 lg:block' alt='maison_kerogan' src={logo} />

                                </div>
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <DrawerClose>
                            <Button variant='outline'>Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default drawer;
