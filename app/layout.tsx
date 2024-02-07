import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import Header from '../components/header';
import Footer from '@/components/footer';
import BtnBackToTop from '@/components/UI/Button';

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
        <main>{children}</main>
        <BtnBackToTop />
        <Footer />
      </body>
    </html>
  );
}
