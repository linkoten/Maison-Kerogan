'use client'

// Carousel.js
import React from 'react';
import Image from 'next/image';
import {
  Carousel as ReactCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const specificCarousel = ({ item }) => (
  <ReactCarousel className='h-full w-full flex justify-center items-center'>
    <CarouselContent>
      {item.images &&
        item.images.length > 0 &&
        item.images.map((image) => (
          <CarouselItem key={image.id} className='h-full'>
            <Image
              width={image.width}
              height={image.height}
              className='h-full w-auto'
              alt={image.altText || 'Image'}
              src={image.url}
            />
          </CarouselItem>
        ))}
    </CarouselContent>
    <CarouselPrevious className='bg-ocre z-30' />
    <CarouselNext className='bg-ocre z-30' />
  </ReactCarousel>
);

export default specificCarousel;
