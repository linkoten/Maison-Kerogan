import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Test from '@/components/layout/test';



const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Maison-Kerogan',
    description: 'Un restaurant situé à Quimper en Bretagne. Proposant différents repas (Brunch/Tapas) et proposants des évènements After Work et Séminaires.',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={inter.className}>
            <body>
            <Header />
            <Test />
                <main>{children}</main>
            </body>
        </html>
    );
}
