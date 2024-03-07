import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Test from '@/components/layout/test';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import Image from 'next/image';
import logo from '../../public/logo-principal.jpg';



const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Maison-Kerogan',
    description:
        'Un restaurant situé à Quimper en Bretagne. Proposant différents repas (Brunch/Tapas) et proposants des évènements After Work et Séminaires.',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={inter.className}>
            <body  >
                <main className='flex flex-col items-center px-24 pb-24 mx-1/2 space-y-8 '>
                <Image
                    className='h-2/3 w-2/3 object-contain scale-[1.8] sm:object-cover sm:scale-100 mb-10 md:mb-0'
                    alt='maison_kerogan'
                    src={logo}

                />
                    <Button className=' bg-red-700'>
                        {' '}
                        Site Web En Maintenance
                    </Button>
                   
                    <div className=' text-slate-700 '>
                    Le Site Web Maison Kerogan sera en ligne d'ici quelques semaines.

                    </div>
                    <div className='text-slate-700 '>
                    Découvrez nos réseaux sociaux pour suivre l'avancée du restaurant.
                    </div>
                    <div className='flex flex-row space-x-2 lg:space-x-8 text-xl lg:text-2x'>
                        <Link href='https://www.facebook.com/profile.php?id=61556132226074' >
                        <FaFacebook className='bg-slate-200 box-content px-3  rounded-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue-600 ring-ocre ring-2' />
                        </Link>
                        <Link href='https://www.instagram.com/maison_kerogan/?hl=en'> 
                        <FaInstagramSquare className='bg-slate-200 box-content px-3  rounded-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-pink-600 ring-ocre ring-2' />
                        </Link>  
                    </div>

                    <SpeedInsights />
                <Analytics />
                </main>
                
            </body>
        </html>
    );
}

/*<html lang='en' className={inter.className}>
<body>
<Header />
<Test />
    <main>{children}
    <SpeedInsights />
    <Analytics />
</main>
</body>
</html>*/
