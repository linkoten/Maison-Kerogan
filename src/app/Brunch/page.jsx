"use client";

import React, { useEffect, useState } from "react";
import fetchBrunch from "../../components/fetch/fetchBrunch"; // Assurez-vous que le chemin est correct
import SpecificCarousel from "@/components/specific/carousel";
import Carousel2 from "@/components/specific/carousel2";
import Carousel3 from "@/components/specific/carousel3";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import logo from "../../../public/format moyen/vert.jpg";
import { merriweather, nunito } from "@/components/font";

const Brunch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchBrunch();
      setData(result);
    };

    getData();
  }, []);

  const { ref: newsletterRef, inView: rocketIsVisible } = useInView();
  const { ref: newsletterRef2, inView: rocketIsVisible2 } = useInView();
  const { ref: newsletterRef3, inView: rocketIsVisible3 } = useInView();
  const { ref: newsletterRef4, inView: rocketIsVisible4 } = useInView();

  const animateChildElements = (ref, isVisible) => {
    if (ref.current) {
      const childElements = ref.current.querySelectorAll("*");

      for (let childElement of childElements) {
        childElement.style.opacity = isVisible ? 1 : 0;
        childElement.style.transform = isVisible
          ? "translate(0)"
          : "translate(-100%)";
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
    <div className={`${nunito.className} overflow-x-hidden `}>
      {data.map((item) => (
        <div key={item.id}>
          <div className=" flex px-4 mb-10 space-y-4 grid grid-cols-1   lg:grid-cols-3 lg:px-0 lg:space-y-0 pt-24 sm:pt-0">
            <div
              ref={newsletterRef}
              id="brunch"
              className={` flex flex-col w-full h-full border-ocre border-2 shadow-ocre shadow-lg hover:shadow-2xl hover:shadow-ocre bg-vert lg:order-last transition-transform duration-500  ${
                rocketIsVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              }`}
            >
              <div className="flex w-full h-full ">
                <div className=" w-1/5 h-full flex items-center justify-center border-r border-vert2 ">
                  <span
                    className={`${merriweather.className} -rotate-90 whitespace-nowrap text-3xl text-vert2 bold tracking-widest uppercase`}
                  >
                    {" "}
                    {item.part1}{" "}
                  </span>
                </div>
                <div className="flex flex-col w-full h-full px-2">
                  <Image
                    className=" z-50 object-cover mx-auto  h-1/2 w-1/2 lg:h-auto lg:w-fit transform   "
                    alt="maison_kerogan"
                    src={logo}
                  />
                  <p className=" text-white text-xs md:text-sm lg:text-md mb-4 pt-8">
                    {item.paragraphe1}
                  </p>
                  <p className=" text-white text-xs md:text-sm lg:text-md mb-4">
                    {item.paragraphe2}
                  </p>
                </div>
              </div>
            </div>

            {item.images && item.images.length > 0 && (
              <div
                ref={newsletterRef}
                className={` px-6 sm:px-0 lg:pl-20  w-full lg:col-span-2 transition-transform duration-500 ${
                  rocketIsVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-full"
                }`}
              >
                <SpecificCarousel item={item} />
              </div>
            )}
          </div>

          <div className=" flex px-4 mb-10 space-y-4 grid grid-cols-1 lg:pr-20  lg:grid-cols-3 lg:px-0 lg:space-y-0 pt-24 sm:pt-0">
            <div
              ref={newsletterRef2}
              id="brunch"
              className={` flex flex-col w-full h-full border-ocre border-2 shadow-ocre shadow-lg hover:shadow-2xl hover:shadow-ocre bg-vert  transition-transform duration-500  ${
                rocketIsVisible2
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-full"
              }`}
            >
              <div className="flex w-full h-full ">
                <div className=" w-1/5 h-full flex items-center justify-center border-r border-vert2 ">
                  <span
                    className={`${merriweather.className} -rotate-90 whitespace-nowrap text-3xl text-vert2 bold tracking-widest uppercase`}
                  >
                    {" "}
                    {item.part2}{" "}
                  </span>
                </div>
                <div className="flex flex-col w-full h-full px-2">
                  <Image
                    className=" z-50 object-cover mx-auto  h-1/2 w-1/2 lg:h-auto lg:w-fit transform   "
                    alt="maison_kerogan"
                    src={logo}
                  />
                  <p className=" text-white text-xs md:text-sm lg:text-md mb-4 pt-8">
                    {item.part2Paragraphe1}
                  </p>
                  <p className=" text-white text-xs md:text-sm lg:text-md mb-4">
                    {item.part2Paragraphe2}
                  </p>
                </div>
              </div>
            </div>

            {item.part2Images && item.part2Images.length > 0 && (
              <div
                ref={newsletterRef2}
                className={` px-6 sm:px-0   w-full lg:col-span-2 transition-transform duration-500 ${
                  rocketIsVisible2
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <Carousel2 item={item} />
              </div>
            )}
          </div>
          <div className=" flex px-4 mb-10 space-y-4 grid grid-cols-1   lg:grid-cols-3 lg:px-0 lg:space-y-0 pt-24 sm:pt-0">
            <div
              ref={newsletterRef3}
              id="brunch"
              className={` flex flex-col w-full h-full border-ocre border-2 shadow-ocre shadow-lg hover:shadow-2xl hover:shadow-ocre bg-vert lg:order-last transition-transform duration-500  ${
                rocketIsVisible3
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              }`}
            >
              <div className="flex w-full h-full ">
                <div className=" w-1/5 h-full flex items-center justify-center border-r border-vert2 ">
                  <span
                    className={`${merriweather.className} -rotate-90 whitespace-nowrap text-3xl text-vert2 bold tracking-widest uppercase`}
                  >
                    {" "}
                    {item.part3}{" "}
                  </span>
                </div>
                <div className="flex flex-col w-full h-full px-2">
                  <Image
                    className=" z-50 object-cover mx-auto  h-1/2 w-1/2 lg:h-auto lg:w-fit transform   "
                    alt="maison_kerogan"
                    src={logo}
                  />
                  <p className=" text-white text-xs md:text-sm lg:text-md mb-4 pt-8">
                    {item.part3Paragraphe1}
                  </p>
                  <p className=" text-white text-xs md:text-sm lg:text-md mb-4">
                    {item.part3Paragraphe2}
                  </p>
                </div>
              </div>
            </div>

            {item.part3Images && item.part3Images.length > 0 && (
              <div
                ref={newsletterRef3}
                className={` px-6 sm:px-0 lg:pl-20  w-full lg:col-span-2 transition-transform duration-500 ${
                  rocketIsVisible3
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-full"
                }`}
              >
                <Carousel3 item={item} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Brunch;
