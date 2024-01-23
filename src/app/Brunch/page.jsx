'use client';

import React, { useEffect, useState } from 'react';
import fetchBrunch from '../../components/fetch/fetchBrunch'; // Assurez-vous que le chemin est correct
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import SpecificCarousel from '@/components/specific/carousel';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import logo from '../../../public/format moyen/vert.jpg';

const Brunch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchBrunch();
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
                    <div className=' flex px-4 mb-10 space-y-4 grid grid-cols-1   lg:grid-cols-3 lg:px-0 lg:space-y-0 pt-24 sm:pt-0'>
                        <div
                            ref={newsletterRef}
                            id='brunch'
                            className={` flex flex-col w-full h-full border-ocre border-2 shadow-ocre shadow-lg hover:shadow-2xl hover:shadow-ocre bg-vert lg:order-last transition-transform duration-500  ${
                                rocketIsVisible
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 translate-x-full'
                            }`}
                        >
                            <div className='flex w-full h-full '>
                                <div className=' w-1/5 h-full flex items-center justify-center border-r border-vert2 '>
                                    <span className=' -rotate-90 whitespace-nowrap text-3xl text-vert2 bold tracking-widest uppercase'>
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
                                    <p className=' text-white text-xs md:text-sm lg:text-md mb-4 pt-8'>
                                        {item.paragraphe1}
                                    </p>
                                    <p className=' text-white text-xs md:text-sm lg:text-md mb-4'>
                                        {item.paragraphe2}
                                    </p>

                                    <div className=' flex flex-col h-full justify-end text-xs md:text-sm lg:text-md'>
                                        <div className=' text-white font-bold'>
                                            {item.journees}
                                        </div>
                                        <Separator className=' bg-vert2' />
                                        <div className=' text-white font-bold'>
                                            {item.horaires}
                                        </div>
                                        <Separator className='mb-4 bg-vert2' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {item.images && item.images.length > 0 && (
                            <div
                                ref={newsletterRef}
                                className={` px-6 sm:px-0 lg:pl-20 lg:pr-12 w-full lg:col-span-2 transition-transform duration-500 ${
                                    rocketIsVisible
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 -translate-x-full'
                                }`}
                            >
                                <SpecificCarousel item={item} />
                            </div>
                        )}
                    </div>
                    <h3 className=' text-center text-3xl font-bold'>
                        MENU
                    </h3>
                    <div className='mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8 px-4'>
                        {item.menu &&
                            item.menu.length > 0 &&
                            item.menu.map((image) => (
                                <Image
                                    key={image.id}
                                    width={image.width}
                                    height={image.height}
                                    className='h-full w-auto'
                                    alt={image.altText || 'Image'}
                                    src={image.url}
                                />
                            ))}
                    </div>
                    <h3 className=' text-center text-3xl font-bold'>
                        GALERIE
                    </h3>
                    <div className='mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8 px-4'>
                        {item.photosGaleries &&
                            item.photosGaleries.length > 0 &&
                            item.photosGaleries.map((image) => (
                                <Image
                                    key={image.id}
                                    width={image.width}
                                    height={image.height}
                                    className='h-full w-auto'
                                    alt={image.altText || 'Image'}
                                    src={image.url}
                                />
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Brunch;
