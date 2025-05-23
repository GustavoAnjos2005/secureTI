import { ReactNode } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import '../styles/globals.css';
import AOSInitializer from './AOSInitializer';

export const metadata = {
  title: 'SecureTI',
  description: 'Soluções avançadas de segurança em T.I para o ambiente empresarial',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-180.svg', sizes: '180x180', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/favicon-180.svg', sizes: '180x180', type: 'image/svg+xml' }
    ],
    shortcut: ['/favicon.svg']
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-gray-100 min-h-screen flex flex-col" suppressHydrationWarning>
        <AOSInitializer />
        <div className="flex-grow flex flex-col relative w-full">
          {/* Efeito de partículas/linhas de rede em background */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
            <div className="absolute w-full h-full bg-[url('/network-grid.svg')] bg-repeat"></div>
          </div>
          
          {/* Efeito de brilho no topo */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-40 bg-blue-500 opacity-5 blur-3xl rounded-full"></div>
          
          <Header />
          <main className="flex-grow w-full pt-16 sm:pt-20 md:pt-24">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}