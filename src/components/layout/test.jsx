"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/format texte/blanc.jpg";

import { usePathname } from "next/navigation";

const Test = () => {
  const pathname = usePathname();

  return (
    <nav className=" fixed z-30 bg-white h-20 w-full sm:hidden">
      <Sheet>
        <SheetTrigger className="flex">
          <div className=" p-8 px-8 space-y-2 cursor-pointer pl-4 ">
            <span className="block w-8 h-[2px] bg-ocre"></span>
            <span className="block w-4 h-[2px] bg-ocre"></span>
            <span className="block w-8 h-[2px] bg-ocre"></span>
          </div>
          <Image
            className=" my-auto object-cover mx-auto  h-1/2 w-1/2   "
            alt="maison_kerogan"
            src={logo}
          />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription className="flex flex-col h-full  text-lg space-y-20 pt-12 px-8 text-black uppercase ">
              <SheetClose asChild>
                <Link
                  className={`link  ${
                    pathname === "/"
                      ? "text-ocre border-b border-ocre scale-125 hover:ocre"
                      : "border-b border-vert hover:text-vert hover:scale-110 hover:bold"
                  }`}
                  href="/"
                >
                  ACCUEIL
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className={`link  ${
                    pathname === "/Brunch"
                      ? "text-ocre border-b border-ocre scale-125 hover:ocre"
                      : "border-b border-vert hover:text-vert hover:scale-110  hover:bold"
                  }`}
                  href="/Brunch"
                >
                  Restauration
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className={`link  ${
                    pathname === "/Salon_de_the"
                      ? "text-ocre border-b border-ocre scale-125 hover:ocre "
                      : "border-b border-vert hover:text-vert hover:scale-110  hover:bold"
                  }`}
                  href="/Salon_de_the"
                >
                  TEA TIME
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className={`link  ${
                    pathname === "/Tapas"
                      ? "text-ocre border-b border-ocre scale-125 hover:ocre"
                      : "border-b border-vert hover:text-vert hover:scale-110  hover:bold"
                  }`}
                  href="/Tapas"
                >
                  After Work
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  className={`link  ${
                    pathname === "/Location"
                      ? "text-ocre border-b border-ocre scale-125 hover:ocre"
                      : "border-b border-vert hover:text-vert hover:scale-110  hover:bold"
                  }`}
                  href="/Location"
                >
                  évènement
                </Link>
              </SheetClose>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Test;
