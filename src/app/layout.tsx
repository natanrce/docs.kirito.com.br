import './globals.css';

import { Inter } from 'next/font/google';

import { Footer, Navbar } from './components';
import { SearchProvider, WikiProvider } from './providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata = {
  title: 'Docs | Kirito',
  icons: {
    icon: '/logo/logo_green.png'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} style={{ colorScheme: 'dark' }}>
      <body className="bg-black">
        <WikiProvider>
          <SearchProvider>
            <Navbar />
            {children}
            <Footer />
          </SearchProvider>
        </WikiProvider>
      </body>
    </html>
  );
}
