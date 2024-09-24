'use client';

import React, { useEffect, useState } from 'react';
import fetchLocation from '@/components/fetch/fetchLocation'; // Assurez-vous que le chemin est correct
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import SpecificCarousel from '@/components/specific/carousel';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import logo from '../../../public/format feuille/jaune.jpg';
import Link from 'next/link';
import { merriweather, nunito } from '../font';


const LocationExtrait = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchLocation();
            setData(result);
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
        <div className={`${nunito.className} `}>
            {data.map((item) => (
                <div key={item.id}>
                    <div className='flex px-4 mb-10 space-y-4 grid grid-cols-1 lg:grid-cols-3 lg:px-0  lg:space-y-0 '>
                        <div
                            ref={newsletterRef}
                            id='location'
                            className={`flex flex-col  px-12 w-full bg-ocre  border-vert border-2  shadow-vert shadow-lg hover:shadow-2xl hover:shadow-vert transition-transform duration-500  ${
                                rocketIsVisible
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 -translate-x-full'
                            }`}
                        >
                            <div className='flex w-full pt-4 mb-6 justify-between'>
                            
                            <h3 className={`${merriweather.className} text-vert  font-bold text-lg md:text-xl lg:text-2xl uppercase`}>
                                {item.title}
                            </h3>
                            <Image
                                        className=' absolute top-4 right-4 object-cover h-10 w-10 '
                                        alt='maison_kerogan'
                                        src={logo}
                                    />
                            </div>
                            <p className=' text-white text-xs md:text-sm lg:text-md mb-4'>
                                {item.extrait}
                            </p>
                            <div className='flex-1 flex flex-col justify-end text-xs md:text-sm lg:text-md'>
                                <div className=' text-white font-bold'>
                                    {item.journees}
                                </div>
                                <Separator  className=' bg-vert'/>
                                
                                <Button className=' my-4 bg-vert  border border-vert hover:bg-vert hover:brightness-110 '>
                                <Link href="/Location">Découvrez En Plus</Link>
                                </Button>
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
                                <SpecificCarousel item={item} />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LocationExtrait;
