'use client'

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import SpecificCarousel from '@/components/specific/carousel';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import logo from '../../../public/format feuille/vert.jpg';
import Link from 'next/link';
import fetchHistoireDuLieu from '../fetch/fetchHistoireDuLieu';



const HistoireDuLieu = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchHistoireDuLieu();
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
                    <div className=' flex px-4 mb-10 space-y-4 grid grid-cols-1   lg:grid-cols-3 lg:px-0 lg:space-y-0 '>
                        <div
                            ref={newsletterRef}
                            id='brunch'
                            className={`relative flex flex-col w-full px-12 border-ocre border-2 shadow-ocre shadow-lg hover:shadow-2xl hover:shadow-ocre bg-white  transition-transform duration-500  ${
                                rocketIsVisible
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 -translate-x-full'
                            }`}
                        >
                            <div className='flex w-full pt-4 mb-6 justify-between'>
                            
                            <h3 className=' text-ocre  font-bold text-lg md:text-xl lg:text-2xl uppercase '>
                                {item.title}
                            </h3>
                            
                            </div>
                            <p className=' text-black text-xs md:text-sm lg:text-md mb-4'>
                                {item.paragraphe1}
                            </p>
                            <p className=' text-black text-xs md:text-sm lg:text-md mb-4'>
                                {item.paragraphe2}
                            </p>
                            
                        </div>

                        {item.images && item.images.length > 0 && (
                            <div
                                ref={newsletterRef}
                                className={` px-6 sm:px-0 lg:pr-20  w-full lg:col-span-2 transition-transform duration-500 ${
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

export default HistoireDuLieu;
