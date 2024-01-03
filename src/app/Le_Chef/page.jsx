'use client';

import React, { useEffect, useState } from 'react';
import fetchLeChef from '../../components/fetch/fetchLeChef'; // Assurez-vous que le chemin est correct
import { Button } from '@/components/ui/button';
import SpecificCarousel from '@/components/specific/carousel';
import { useInView } from 'react-intersection-observer';

const LeChef = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchLeChef();
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
                    <div className='flex px-4 mb-10 space-y-4 grid  grid-cols-1 lg:grid-cols-3 lg:px-0  lg:space-y-0'>
                        <div
                            ref={newsletterRef}
                            id='chef'
                            className={`flex flex-col px-12 w-full bg-slate-50 border-ocre border-2 shadow-ocre shadow-lg hover:shadow-2xl hover:shadow-ocre transition-transform duration-500  ${
                                rocketIsVisible
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 -translate-x-full'
                            }`}
                        >
                            <h3 className=' text-vert  pt-4 font-bold text-2xl mb-6'>
                                {item.title}
                            </h3>
                            <p className=' text-black mb-4'>
                                {item.paragraphe1}
                            </p>
                            <div className='flex-1 flex flex-col justify-end'>
                                <Button className='my-4 bg-vert  border border-ocre hover:bg-ocre '>
                                    Découvre en plus
                                </Button>
                            </div>
                        </div>
                        {item.images && item.images.length > 0 && (
                            <div
                            ref={newsletterRef}

                            className={`lg:pr-20 w-full lg:col-span-2 transition-transform duration-500 ${
    rocketIsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
  }`}>
                                <SpecificCarousel item={item} />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LeChef;
