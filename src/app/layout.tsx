import './globals.css';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';

const montserrat = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Javier Cundapi | Software Engineer',
  description: 'Software Engineer with experience in Java, APIs and more.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/emoji.png" type="image/png" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={montserrat.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
