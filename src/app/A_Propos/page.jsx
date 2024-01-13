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
        <>
        <Map />
        <div className='grid grid-cols-1 lg:grid-cols-3 space-y-4 lg:space-y-0 place-items-center '>
            <Card className=' m-auto bg-white text-black border-ocre shadow-xl shadow-ocre  hover:bg-slate-100'>
                <CardHeader>
                    <CardTitle className='text-vert'>Maison Kerogan</CardTitle>
                    <CardDescription className='text-black'>
                        3 rue Kerogan <br />
                        29200 Quimper- France <br />
                        +33 2 96 85 23 26 <br />
                        mail
                    </CardDescription>
                </CardHeader>
                <CardContent className='text-vert'>Logo</CardContent>
                <CardFooter>
                    <div className='flex flex-row space-x-8 text-4xl'>
                        <Link href='/Le_Chef'>
                        <FaFacebook className='bg-slate-200 box-content px-3  rounded-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue-600' />
                        </Link>
                        <Link href='/Le_Chef'> 
                        <FaInstagramSquare className='bg-slate-200 box-content px-3  rounded-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-pink-600' />
                        </Link>  
                    </div>
                </CardFooter>
            </Card>
            <Card className=' m-auto bg-white text-black border-ocre shadow-xl shadow-ocre  hover:bg-slate-100'>
                <CardHeader>
                    <CardTitle className='text-vert'>Café de la Plage</CardTitle>
                    <CardDescription className='text-black' >
                        6 Pl. des déportés <br />
                        29980 Île-Tudy France <br />
                        02 98 56 42 06 <br />
                        mail
                    </CardDescription>
                </CardHeader>
                <CardContent className='text-vert'>Logo</CardContent>
                <CardFooter>
                    <div className='flex flex-row space-x-8 text-4xl'>
                        <Link href='https://www.facebook.com/iletudycafe'>
                        <FaFacebook className='bg-slate-200 box-content px-3  rounded-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue-600' />
                        </Link>
                        <Link href='https://www.instagram.com/cafedelaplage.iletudy/?hl=en'> 
                        <FaInstagramSquare className='bg-slate-200 box-content px-3 rounded-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-pink-600' />
                        </Link>  
                    </div>
                </CardFooter>
            </Card>
            <Card className=' m-auto bg-white text-black border-ocre shadow-xl shadow-ocre  hover:bg-slate-100'>
                <CardHeader>
                    <CardTitle className='text-vert'>Crêperie de l'Abri</CardTitle>
                    <CardDescription className='text-black' >
                        15 Quai Jacques de Thézac <br />
                        29120 Combrit France <br />
                        02 98 51 98 72 <br />
                        mail
                    </CardDescription>
                </CardHeader>
                <CardContent className='text-vert'>Logo</CardContent>
                <CardFooter>
                    <div className='flex flex-row space-x-8 text-4xl'>
                        <Link href='https://www.facebook.com/CreperieDeLAbri'>
                        <FaFacebook className='bg-slate-200 box-content px-3  rounded-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue-600' />
                        </Link>
                        <Link href='https://www.instagram.com/creperiedelabri/?hl=en'> 
                        <FaInstagramSquare className='bg-slate-200 box-content px-3  rounded-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-pink-600' />
                        </Link>  
                    </div>
                </CardFooter>
            </Card>
        </div>
        </>
    );
};

export default a_propos;
