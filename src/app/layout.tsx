import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Poppins, Anonymous_Pro, Roboto } from 'next/font/google';
import TanstackProvider from '@/model/providers/TanstackProvider';

export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const anonymous = Anonymous_Pro({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'Cube Nomination',
  description: 'Created by Okafor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <TanstackProvider>
              {children}
          </TanstackProvider>   
        </body>
      </html>
  );
}