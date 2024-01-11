import BrunchExtrait from '@/components/accueil/brunch';
import LeChef from './Le_Chef/page';
import LocationExtrait from '@/components/accueil/location';
import TapasExtrait from '@/components/accueil/tapas';
import ThéExtrait from '@/components/accueil/thé';
import A_Propos from './A_Propos/page';
import Image from 'next/image';
import logo from '../../public/logo-principal.jpg';
import Link from 'next/link';
import Test from '@/components/layout/test';

export default function Home() {
    return (
        <div className=' overflow-x-hidden'>
            <div className='relative h-screen w-full flex items-center justify-center '>
                <Image
                    className='h-full w-full object-contain scale-[1.8] sm:object-cover sm:scale-100 '
                    alt='maison_kerogan'
                    src={logo}
                />
                <div className='sm:space-x-1 md:space-x-3 lg:space-x-4  absolute top-[68%] xl:top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-[6px] sm:text-[10px] md:text-[12px] lg:text-[16px] xl:text-xl '>
                    {/* Bouton 1 */}
                    <Link
                        href='/Brunch'
                        className=' transition ease-in-out delay-150  hover:scale-110   '
                    >
                        BRUNCH
                    </Link>
                    <span className=' px-1 text-ocre text-lg xl:text-xl xl:px-0 xl:pr-2'>
                        .
                    </span>
                    {/* Bouton 2 */}
                    <Link
                        href='/Salon_de_the'
                        className='   lg:mr-4 hover:scale-110 hover:-translate-y-2 transition-transform '
                    >
                        TEA TIME
                    </Link>
                    <span className=' px-1 text-ocre text-lg xl:text-xl xl:px-0 xl:pr-2'>
                        .
                    </span>

                    {/* Bouton 3 */}
                    <Link
                        href='/Tapas'
                        className='   lg:mr-4 hover:scale-110 hover:-translate-y-2 transition-transform '
                    >
                        AFTER WORK
                    </Link>
                    <span className=' px-1 text-ocre text-lg xl:text-xl xl:px-0 xl:pr-2'>
                        .
                    </span>

                    {/* Bouton 4 */}
                    <Link
                        href='/Location'
                        className=' hover:scale-125 '
                    >
                        EVENEMENT
                    </Link>
                </div>
            </div>
            <div className='text-vert font-bold space-y-4 bg-slate-200 px-4 md:px-16'>
                <h1 className='text-center text-lg md:text-5xl'>
                    LA MAISON KEROGAN
                </h1>
                <Test />
                <LeChef />
                <BrunchExtrait />
                <TapasExtrait />
                <ThéExtrait />
                <LocationExtrait />
                <A_Propos />
            </div>
        </div>
    );
}
