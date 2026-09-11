import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import 'modern-normalize/modern-normalize.css';
import './globals.css';
import QueryProvider from './providers/QueryProvider';
import Header from './components/Header/Header';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Cars',
  description: 'Find your perfect car',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <QueryProvider>
          <Header />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
