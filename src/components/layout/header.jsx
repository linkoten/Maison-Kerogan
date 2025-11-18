"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/format texte/vert.jpg";
import { useSeason } from "@/hooks/useSeason";
import ReservationButton from "@/components/ui/ReservationButton";

//version web

function Header() {
  const pathname = usePathname();
  const { isSummer, isWinter } = useSeason();

  return (
    <header className="hidden sm:block sticky top-4 bg-vert text-ocre rounded-xl z-30 py-6 m-5 mb-4">
      <nav className="container flex items-center justify-between">
        {/* Logo avec indicateur de saison */}
        <Link
          href="/"
          className="sm:text-xs md:text-sm lg:text-lg font-bold w-1/6 relative"
        >
          <Image
            className="my-auto object-cover"
            alt="maison_kerogan"
            src={logo}
          />
        </Link>

        {/* Nav links avec logique saisonnière */}
        <ul className="flex justify-around gap-2 sm:gap-6 lg:gap-10 text-[6px] sm:text-xs md:text-sm flex-1">
          <Link
            className={`link ${
              pathname === "/Menu"
                ? "text-ocre border-b border-ocre scale-125 brightness-150 uppercase"
                : "border-b border-ocre hover:scale-110 hover:bold hover:-translate-y-1 uppercase tracking-wider"
            }`}
            href="/Menu"
          >
            MENU
          </Link>

          <Link
            className={`link ${
              pathname === "/Brunch"
                ? "text-ocre border-b border-ocre scale-125 brightness-150 uppercase"
                : "border-b border-ocre hover:scale-110 hover:bold hover:-translate-y-1 uppercase tracking-wider"
            }`}
            href="/Brunch"
          >
            Restauration
          </Link>

          {/* Tea Time - Visible seulement en été */}
          {isSummer && (
            <Link
              className={`link transition-all duration-300 ${
                pathname === "/Salon_de_the"
                  ? "text-ocre border-b border-ocre scale-125 brightness-150 uppercase"
                  : "border-b border-ocre hover:scale-110 hover:bold hover:-translate-y-1 uppercase tracking-wider"
              }`}
              href="/Salon_de_the"
            >
              Tea Time
            </Link>
          )}

          {/* After Work - Visible seulement en été */}
          {isSummer && (
            <Link
              className={`link transition-all duration-300 ${
                pathname === "/Tapas"
                  ? "text-ocre border-b border-ocre scale-125 brightness-150 uppercase"
                  : "border-b border-ocre hover:scale-110 hover:bold hover:-translate-y-1 uppercase tracking-wider"
              }`}
              href="/Tapas"
            >
              After Work
            </Link>
          )}

          <Link
            className={`link ${
              pathname === "/Location"
                ? "text-ocre border-b border-ocre scale-125 brightness-150 uppercase"
                : "border-b border-ocre hover:scale-110 hover:bold hover:-translate-y-1 uppercase tracking-wider"
            }`}
            href="/Location"
          >
            évènement
          </Link>

          <Link
            className={`link ${
              pathname === "/Contact"
                ? "text-ocre border-b border-ocre scale-125 brightness-150 uppercase"
                : "border-b border-ocre hover:scale-110 hover:bold hover:-translate-y-1 uppercase tracking-wider"
            }`}
            href="/Contact"
          >
            Contact
          </Link>
        </ul>

        {/* Bouton de réservation */}
        <div className="ml-4">
          <ReservationButton variant="header">
            <span className="hidden md:inline">Réserver</span>
            <span className="md:hidden">Rés.</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </ReservationButton>
        </div>
      </nav>
    </header>
  );
}

export default Header;
