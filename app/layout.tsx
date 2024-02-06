
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import Transition from './transition';
import Header from '../components/header';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Nowicki Aranżacja Wnętrz',
  description: 'Aranżacja wnętrz',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pl'>
      <body className={inter.className}>
        <Header />
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}
