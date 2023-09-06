import '../globals.css';

import { Inter } from 'next/font/google';

import { Article } from './views';
import { Footer, Navbar } from '../components';

import { SearchProvider, WikiProvider } from '../providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata = {
  title: {
    template: '%s | Docs - Kirito',
    default: 'Docs | Kirito'
  },
  icons: {
    icon: '/logo/logo_green.png'
  }
};

export default function ArticleLayout({
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
            <Article>{children}</Article>
            <Footer />
          </SearchProvider>
        </WikiProvider>
      </body>
    </html>
  );
}
