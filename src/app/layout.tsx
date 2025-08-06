import './globals.css';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Javier Cundapi|Desarrollador Backend',
  description: 'Desarrollador Backend con experiencia en Java, APIs y más.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/emoji.png" type="image/png" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
