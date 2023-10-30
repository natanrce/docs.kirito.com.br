import '../globals.css';

import { Footer, Navbar } from '../components';

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
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
