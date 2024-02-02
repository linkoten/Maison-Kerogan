'use client';

import React, { useEffect, useState } from 'react';
import fetchThé from '../../components/fetch/fetchSalonDeThé'; // Assurez-vous que le chemin est correct
import { Separator } from '@/components/ui/separator';
import SpecificCarousel from '@/components/specific/carousel';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import logo from '../../../public/format moyen/rouge.jpg';
import Carousel2 from '@/components/specific/carousel2';
import Carousel3 from '@/components/specific/carousel3';


const Thé = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchThé();
            setData(result);
            console.log(result);
        };

        getData();
    }, []);

    const { ref: newsletterRef, inView: rocketIsVisible } =
        useInView();
    const { ref: newsletterRef2, inView: rocketIsVisible2 } =
        useInView();
        const { ref: newsletterRef3, inView: rocketIsVisible3 } =
        useInView();
        

    const animateChildElements = (ref, isVisible) => {
        if (ref.current) {
            const childElements = ref.current.querySelectorAll('*');

            for (let childElement of childElements) {
                childElement.style.opacity = isVisible ? 1 : 0;
                childElement.style.transform = isVisible
                    ? 'translate(0)'
                    : 'translate(-100%)';
            }
        }
    };

    useEffect(() => {
        if (rocketIsVisible) {
            animateChildElements(newsletterRef, rocketIsVisible);
        }
    }, []);

    useEffect(() => {
        if (rocketIsVisible2) {
            animateChildElements(newsletterRef2, rocketIsVisible2);
        }
    }, []);

    useEffect(() => {
        if (rocketIsVisible3) {
            animateChildElements(newsletterRef3, rocketIsVisible3);
        }
    }, []);

    return (
        <div className='overflow-x-hidden'>
            {data.map((item) => (
                <div key={item.id}>
                    <div className='flex px-4 mb-10 space-y-4 grid grid-cols-1  lg:grid-cols-3 lg:px-0  lg:space-y-0 pt-24 sm:pt-0'>
                        <div
                            ref={newsletterRef}
                            id='the'
                            className={`  flex flex-col w-full h-full bg-terracotta border-rose border-2  shadow-rose shadow-lg hover:shadow-2xl hover:shadow-rose lg:order-last transition-transform duration-500  ${
                                rocketIsVisible
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 translate-x-full'
                            }`}
                        >
                            <div className='flex w-full h-full '>
                                <div className=' w-1/5 h-full flex items-center justify-center border-r border-terracotta2 '>
                                    <span className=' -rotate-90 whitespace-nowrap text-3xl text-terracotta2 bold tracking-widest uppercase'>
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
                                    <div className='flex flex-col h-full justify-end text-xs md:text-sm lg:text-md'>
                                        <div className=' text-white  font-bold'>
                                            {item.journees}
                                        </div>
                                        <Separator className='bg-terracotta2' />
                                        <div className=' text-white  font-bold'>
                                            {item.horaires}
                                        </div>
                                        <Separator className='mb-4 bg-terracotta2' />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        {item.images && item.images.length > 0 && (
                            <div
                                ref={newsletterRef}
                                className={`px-6 sm:px-0 lg:pl-20 w-full lg:col-span-2 transition-transform duration-500 ${
                                    rocketIsVisible
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 -translate-x-full'
                                }`}
                            >
                                <SpecificCarousel
                                    item={item}
                                />
                            </div>
                        )}
                    </div>
                    <div className='flex px-4 mb-10 space-y-4 grid grid-cols-1  lg:grid-cols-3 lg:px-0  lg:space-y-0 pt-24 sm:pt-0 lg:pr-20'>
                        <div
                            ref={newsletterRef2}
                            id='the'
                            className={`  flex flex-col w-full h-full bg-terracotta border-rose border-2  shadow-rose shadow-lg hover:shadow-2xl hover:shadow-rose  transition-transform duration-500  ${
                                rocketIsVisible2
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 -translate-x-full'
                            }`}
                        >
                            <div className='flex w-full h-full '>
                                <div className=' w-1/5 h-full flex items-center justify-center border-r border-terracotta2 '>
                                    <span className=' -rotate-90 whitespace-nowrap text-3xl text-terracotta2 bold tracking-widest uppercase'>
                                        {' '}
                                        {item.part2}{' '}
                                    </span>
                                </div>
                                <div className='flex flex-col w-full h-full px-2'>
                                <Image
                                        className=' z-50 object-cover mx-auto  h-1/2 w-1/2 lg:h-full lg:w-full transform   '
                                        alt='maison_kerogan'
                                        src={logo}
                                    />
                                    <p className=' text-white text-xs md:text-sm lg:text-md mb-4 pt-8'>
                                        {item.part2Paragraphe1}
                                    </p>
                                    <p className=' text-white text-xs md:text-sm lg:text-md mb-4'>
                                        {item.part2Paragraphe2}
                                    </p>
                                    <div className='flex flex-col h-full justify-end text-xs md:text-sm lg:text-md'>
                                        <div className=' text-white  font-bold'>
                                            {item.part2Journees}
                                        </div>
                                        <Separator className='bg-terracotta2' />
                                        <div className=' text-white  font-bold'>
                                            {item.part2Horaires}
                                        </div>
                                        <Separator className='mb-4 bg-terracotta2' />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        {item.part2Images && item.part2Images.length > 0 && (
                            <div
                                ref={newsletterRef2}
                                className={`px-6 sm:px-0  w-full lg:col-span-2 transition-transform duration-500 ${
                                    rocketIsVisible2
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 translate-x-full'
                                }`}
                            >
                                <Carousel2
                                    item={item}
                                />
                            </div>
                        )}
                    </div>
                    <div className='flex px-4 mb-10 space-y-4 grid grid-cols-1  lg:grid-cols-3 lg:px-0  lg:space-y-0 pt-24 sm:pt-0'>
                        <div
                            ref={newsletterRef3}
                            id='the'
                            className={`  flex flex-col w-full h-full bg-terracotta border-rose border-2  shadow-rose shadow-lg hover:shadow-2xl hover:shadow-rose lg:order-last transition-transform duration-500  ${
                                rocketIsVisible3
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 translate-x-full'
                            }`}
                        >
                            <div className='flex w-full h-full '>
                                <div className=' w-1/5 h-full flex items-center justify-center border-r border-terracotta2 '>
                                    <span className=' -rotate-90 whitespace-nowrap text-3xl text-terracotta2 bold tracking-widest uppercase'>
                                        {' '}
                                        {item.part3}{' '}
                                    </span>
                                </div>
                                <div className='flex flex-col w-full h-full px-2'>
                                <Image
                                        className=' z-50 object-cover mx-auto  h-1/2 w-1/2 lg:h-full lg:w-full transform   '
                                        alt='maison_kerogan'
                                        src={logo}
                                    />
                                    <p className=' text-white text-xs md:text-sm lg:text-md mb-4 pt-8'>
                                        {item.part3Paragraphe1}
                                    </p>
                                    <p className=' text-white text-xs md:text-sm lg:text-md mb-4'>
                                        {item.part3Paragraphe2}
                                    </p>
                                    <div className='flex flex-col h-full justify-end text-xs md:text-sm lg:text-md'>
                                        <div className=' text-white  font-bold'>
                                            {item.part3Journees}
                                        </div>
                                        <Separator className='bg-terracotta2' />
                                        <div className=' text-white  font-bold'>
                                            {item.part3Horaires}
                                        </div>
                                        <Separator className='mb-4 bg-terracotta2' />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        {item.part3Images && item.part3Images.length > 0 && (
                            <div
                                ref={newsletterRef3}
                                className={`px-6 sm:px-0 lg:pl-20 w-full lg:col-span-2 transition-transform duration-500 ${
                                    rocketIsVisible3
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 -translate-x-full'
                                }`}
                            >
                                <Carousel3
                                    item={item}
                                />
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

export default Thé;
