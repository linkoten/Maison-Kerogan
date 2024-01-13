'use client';

import React, { useEffect, useState } from 'react';
import fetchTapas from '../../components/fetch/fetchTapas'; // Assurez-vous que le chemin est correct
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import SpecificCarousel from '@/components/specific/carousel';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import logo from '../../../public/format moyen/rose.jpg';

const Tapas = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchTapas();
            setData(result);
            console.log(result);
        };

        getData();
    }, []);

    const { ref: newsletterRef, inView: rocketIsVisible } =
        useInView();

    const animateChildElements = () => {
        if (newsletterRef.current) {
            const childElements =
                newsletterRef.current.querySelectorAll('*');

            for (let childElement of childElements) {
                childElement.style.opacity = rocketIsVisible ? 1 : 0;
                childElement.style.transform = rocketIsVisible
                    ? 'translate(0)'
                    : 'translate(-100%)';
            }
        }
    };

    useEffect(() => {
        if (rocketIsVisible) {
            animateChildElements();
        }
    }, [rocketIsVisible]);

    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <div className='flex px-4 mb-10 space-y-4 grid grid-cols-1 lg:grid-cols-3 lg:px-0 lg:space-y-0 pt-24 sm:pt-0'>
                        <div
                            ref={newsletterRef}
                            id='tapas'
                            className={` flex flex-col h-full w-full border-black  shadow-black shadow-lg  hover:shadow-2xl hover:shadow-black bg-rose transition-transform duration-500  ${
                                rocketIsVisible
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 -translate-x-full'
                            }`}
                        >
                            <div className='flex w-full h-full  '>
                                <div className=' w-1/5 h-full flex items-center justify-center border-r  border-rose2 '>
                                    <span className=' -rotate-90 whitespace-nowrap text-3xl text-rose2 bold tracking-widest uppercase'>
                                        {' '}
                                        {item.title}{' '}
                                    </span>
                                </div>
                                <div className='flex flex-col w-full h-full px-2'>
                                <Image
                                        className=' z-50 object-cover mx-auto  h-1/2 w-1/2 lg:h-full lg:w-full transform   '
                                        alt='maison_kerogan'
                                        src={logo}
                                    />
                                    <p className='text-black text-xs md:text-sm lg:text-md mb-4 pt-8'>
                                        {item.paragraphe1}
                                    </p>
                                    <p className='text-black text-xs md:text-sm lg:text-md mb-4'>
                                        {item.paragraphe2}
                                    </p>
                                    <div className='flex-1 flex flex-col justify-end text-xs md:text-sm lg:text-md'>
                                        <div className='text-black text-md font-bold'>
                                            {item.journees}
                                        </div>
                                        <Separator className=' bg-rose2' />
                                        <div className='text-black text-md font-bold'>
                                            {item.horaires}
                                        </div>
                                        <Separator className='mb-4 bg-rose2' />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        {item.images && item.images.length > 0 && (
                            <div
                                ref={newsletterRef}
                                className={`px-6 sm:px-0 lg:pr-20 w-full lg:col-span-2 transition-transform duration-500 ${
                                    rocketIsVisible
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 translate-x-full'
                                }`}
                            >
                                <SpecificCarousel
                                    item={item}
                                    className='z-30'
                                />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Tapas;
