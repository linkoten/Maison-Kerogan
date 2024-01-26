/* eslint-disable react/no-unescaped-entities */


import Map from '@/components/dynamic';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";



const a_propos = () => {
    return (
        <div className='grid grid-cols-2 overflow-x-hidden  '>
        <Map className='w-full' />
        <div className='grid grid-cols-1 lg:grid-cols-2  space-y-2  lg:space-y-0 place-items-center w-full mx-auto h-[600px] xl:px-4 '>
            <Card className='  m-auto bg-white text-black border-ocre shadow-xl shadow-ocre  hover:bg-slate-100 w-[150px] lg:w-[220px]'>
                <CardHeader>
                    <CardTitle className='text-vert text-xs lg:text-sm'>Maison Kerogan</CardTitle>
                    <CardDescription className='text-black text-[8px] lg:text-xs'>
                        3 rue Kerogan <br />
                        29200 Quimper- France <br />
                        +33 2 96 85 23 26 <br />
                        mail
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <div className='flex flex-row space-x-2 lg:space-x-8 text-xl lg:text-2xl'>
                        <Link href='/Le_Chef'>
                        <FaFacebook className='bg-slate-200 box-content px-3  rounded-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue-600' />
                        </Link>
                        <Link href='/Le_Chef'> 
                        <FaInstagramSquare className='bg-slate-200 box-content px-3  rounded-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-pink-600' />
                        </Link>  
                    </div>
                </CardFooter>
            </Card>
            <Card className='  m-auto bg-white text-black border-ocre shadow-xl shadow-ocre  hover:bg-slate-100 w-[150px] lg:w-[220px]'>
                <CardHeader>
                    <CardTitle className='text-vert text-xs lg:text-sm'>Café de la Plage</CardTitle>
                    <CardDescription className='text-black text-[8px] lg:text-xs' >
                        6 Pl. des déportés <br />
                        29980 Île-Tudy France <br />
                        02 98 56 42 06 <br />
                        mail
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <div className='flex flex-row space-x-2 lg:space-x-8 text-xl lg:text-2xl'>
                        <Link href='https://www.facebook.com/iletudycafe'>
                        <FaFacebook className='bg-slate-200 box-content px-3  rounded-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue-600' />
                        </Link>
                        <Link href='https://www.instagram.com/cafedelaplage.iletudy/?hl=en'> 
                        <FaInstagramSquare className='bg-slate-200 box-content px-3 rounded-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-pink-600' />
                        </Link>  
                    </div>
                </CardFooter>
            </Card>
            <Card className='  m-auto bg-white text-black border-ocre shadow-xl shadow-ocre  hover:bg-slate-100 w-[150px] lg:w-[220px]'>
                <CardHeader>
                    <CardTitle className='text-vert text-xs lg:text-sm'>Crêperie de l'Abri</CardTitle>
                    <CardDescription className='text-black text-[8px] lg:text-xs' >
                        15 Quai Jacques de Thézac <br />
                        29120 Combrit France <br />
                        02 98 51 98 72 <br />
                        mail
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <div className='flex flex-row space-x-2 lg:space-x-8 text-xl lg:text-2xl'>
                        <Link href='https://www.facebook.com/CreperieDeLAbri'>
                        <FaFacebook className='bg-slate-200 box-content   rounded-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue-600' />
                        </Link>
                        <Link href='https://www.instagram.com/creperiedelabri/?hl=en'> 
                        <FaInstagramSquare className='bg-slate-200 box-content  rounded-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-pink-600' />
                        </Link>  
                    </div>
                </CardFooter>
            </Card>
        </div>
        </div>
    );
};

export default a_propos;
