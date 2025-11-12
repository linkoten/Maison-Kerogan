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
import { useSeason } from "@/hooks/useSeason.js";

const Test = () => {
  const pathname = usePathname();
  const { isSummer, isWinter } = useSeason();

  return (
    <nav className="fixed z-30 bg-white h-20 w-full sm:hidden">
      <Sheet>
        <SheetTrigger className="flex">
          <div className="p-8 px-8 space-y-2 cursor-pointer pl-4">
            <span className="block w-8 h-[2px] bg-ocre"></span>
            <span className="block w-4 h-[2px] bg-ocre"></span>
            <span className="block w-8 h-[2px] bg-ocre"></span>
          </div>
          <Image
            className="my-auto object-cover mx-auto h-1/2 w-1/2"
            alt="maison_kerogan"
            src={logo}
            width={200}
            height={200}
          />
        </SheetTrigger>
        <SheetContent side="left" className="bg-white">
          <SheetHeader>
            <SheetTitle className="text-vert text-3xl font-bold text-left">
              MAISON KEROGAN
              {/* Indicateur de saison dans le menu */}
              <span className="block text-sm font-normal text-gray-500 mt-1">
                {isWinter ? "❄️ Mode Hiver" : "☀️ Mode Été"}
              </span>
            </SheetTitle>

            {/* CHANGEMENT: Suppression de SheetDescription et utilisation d'une div */}
            <div className="flex flex-col h-full text-lg space-y-20 pt-12 px-8 text-black uppercase">
              <SheetClose asChild>
                <Link
                  className={`link ${
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
                  className={`link ${
                    pathname === "/Menu"
                      ? "text-ocre border-b border-ocre scale-125 hover:ocre"
                      : "border-b border-vert hover:text-vert hover:scale-110 hover:bold"
                  }`}
                  href="/Menu"
                >
                  MENU
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  className={`link ${
                    pathname === "/Brunch"
                      ? "text-ocre border-b border-ocre scale-125 hover:ocre"
                      : "border-b border-vert hover:text-vert hover:scale-110 hover:bold"
                  }`}
                  href="/Brunch"
                >
                  Restauration
                </Link>
              </SheetClose>

              {/* Salon de thé - Visible seulement en été */}
              {isSummer && (
                <SheetClose asChild>
                  <Link
                    className={`link ${
                      pathname === "/Salon-de-thé"
                        ? "text-ocre border-b border-ocre scale-125 hover:ocre"
                        : "border-b border-vert hover:text-vert hover:scale-110 hover:bold"
                    }`}
                    href="/Salon-de-thé"
                  >
                    SALON DE THÉ
                  </Link>
                </SheetClose>
              )}

              {/* Tapas - Visible seulement en été */}
              {isSummer && (
                <SheetClose asChild>
                  <Link
                    className={`link ${
                      pathname === "/Tapas"
                        ? "text-ocre border-b border-ocre scale-125 hover:ocre"
                        : "border-b border-vert hover:text-vert hover:scale-110 hover:bold"
                    }`}
                    href="/Tapas"
                  >
                    AFTER WORK
                  </Link>
                </SheetClose>
              )}

              <SheetClose asChild>
                <Link
                  className={`link ${
                    pathname === "/Location"
                      ? "text-ocre border-b border-ocre scale-125 hover:ocre"
                      : "border-b border-vert hover:text-vert hover:scale-110 hover:bold"
                  }`}
                  href="/Location"
                >
                  ÉVÈNEMENT
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  className={`link ${
                    pathname === "/Contact"
                      ? "text-ocre border-b border-ocre scale-125 hover:ocre"
                      : "border-b border-vert hover:text-vert hover:scale-110 hover:bold"
                  }`}
                  href="/Contact"
                >
                  CONTACT
                </Link>
              </SheetClose>

              {/* Message saisonnier en bas du menu - CHANGEMENT: utilisation de span au lieu de p */}
              {isWinter && (
                <div className="mt-auto text-xs text-gray-500 normal-case text-center py-4">
                  <span className="block">🌸 Tea Time et After Work</span>
                  <span className="block">de retour au printemps</span>
                </div>
              )}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Test;
