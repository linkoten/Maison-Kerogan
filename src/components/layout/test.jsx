import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/format texte/blanc.jpg';



const test = () => {
    return (
        <nav className=' fixed z-30 bg-white h-20 w-full sm:hidden'>
            
            <Sheet>
            
                <SheetTrigger className='flex' >
                    <div className=' p-8 px-8 space-y-2 cursor-pointer pl-4 '>
                        <span className='block w-8 h-1 bg-ocre'></span>
                        <span className='block w-8 h-1 bg-ocre'></span>
                        <span className='block w-8 h-1 bg-ocre'></span>
                    </div>
                    <Image
                                        className=' my-auto object-cover mx-auto  h-1/2 w-1/2   '
                                        alt='maison_kerogan'
                                        src={logo}
                                    />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>
                            Are you absolutely sure?
                        </SheetTitle>
                        <SheetDescription>
                            <div className='flex flex-col h-full  text-3xl space-y-20 pt-12 text-black'>
                                <Link className='' href='/'>
                                    ACCUEIL
                                </Link>
                                <Link className='' href='/Brunch'>
                                    BRUNCH
                                </Link>
                                <Link className='' href='/Tapas'>
                                    TAPAS
                                </Link>
                                <Link
                                    className=''
                                    href='/Salon_de_the'
                                >
                                    TEA TIME
                                </Link>
                                <Link className='' href='/Location'>
                                    EVENEMENTIELLE
                                </Link>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </nav>
    );
};

export default test;