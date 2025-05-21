import Link from 'next/link';
import { ReactNode } from 'react';

interface CardSegmentoProps {
  title: string;
  href: string;
  icon?: ReactNode;
}

export function CardSegmento({ title, href, icon }: CardSegmentoProps) {
  return (
    <Link href={href} className="block h-full">
      <div className="bg-blue-800/20 hover:bg-blue-700/40 transition-all duration-300 p-6 rounded-lg shadow-lg border border-blue-600/20 hover:border-blue-400/40 h-full relative overflow-hidden group">
        {/* Efeito de brilho no hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
        
        <div className="relative z-10">
          {/* Ícone do card */}
          {icon && (
            <div className="mb-4 text-blue-300 group-hover:text-blue-200 transition-colors">
              {icon}
            </div>
          )}
          
          <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-200 transition-colors">{title}</h3>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-300 group-hover:text-white transition-colors">Saiba mais</span>
            <span className="text-blue-400 transform transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}