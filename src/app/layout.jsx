import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Test from '@/components/layout/test';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';





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
                <main>{children}
                <SpeedInsights />
                <Analytics />
</main>
            </body>
        </html>
    );
}
