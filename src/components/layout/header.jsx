"use client";

import React from "react";
import { Button } from "../ui/button";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/format texte/vert.jpg";
import { SheetClose } from "../ui/sheet";

//version web

function Header() {
  const pathname = usePathname();

  return (
    <header className=" hidden sm:block sticky top-4 bg-vert text-ocre rounded-xl z-30 py-6 m-5 mb-4  ">
      <nav className="  container flex items-center justify-between">
        {/* Logo */}

        <Link
          href="/"
          className=" sm:text-xs md:text-sm lg:text-lg font-bold w-1/6 "
        >
          <Image
            className=" my-auto object-cover  "
            alt="maison_kerogan"
            src={logo}
          />
        </Link>

        {/* Nav links */}
        <ul className="flex justify-around gap-2 sm:gap-6 lg:gap-10 text-[6px] sm:text-xs md:text-sm ">
          <Link
            className={`link  ${
              pathname === "/Brunch"
                ? "text-ocre border-b border-ocre scale-125 brightness-150 uppercase"
                : "border-b border-ocre hover:scale-110  hover:bold hover:-translate-y-1 uppercase tracking-wider "
            }`}
            href="/Brunch"
          >
            Restauration
          </Link>

          <Link
            className={`link  ${
              pathname === "/Salon_de_the"
                ? "text-ocre border-b border-ocre scale-125 brightness-150 uppercase"
                : "border-b border-ocre hover:scale-110  hover:bold hover:-translate-y-1 uppercase tracking-wider "
            }`}
            href="/Salon_de_the"
          >
            Tea Time
          </Link>

          <Link
            className={`link  ${
              pathname === "/Tapas"
                ? "text-ocre border-b border-ocre scale-125 brightness-150 uppercase"
                : "border-b border-ocre hover:scale-110  hover:bold hover:-translate-y-1 uppercase tracking-wider "
            }`}
            href="/Tapas"
          >
            After Work
          </Link>

          <Link
            className={`link  ${
              pathname === "/Location"
                ? "text-ocre border-b border-ocre scale-125 brightness-150 uppercase"
                : "border-b border-ocre hover:scale-110  hover:bold hover:-translate-y-1 uppercase tracking-wider "
            }`}
            href="/Location"
          >
            évènement
          </Link>
          <Link
            className={`link  ${
              pathname === "/Contact"
                ? "text-ocre border-b border-ocre scale-125 brightness-150 uppercase"
                : "border-b border-ocre hover:scale-110  hover:bold hover:-translate-y-1 uppercase tracking-wider "
            }`}
            href="/Contact"
          >
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
