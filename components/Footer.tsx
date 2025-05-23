"use client"

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const [emailFocus, setEmailFocus] = useState(false);
  
  // Ano atual para o copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-blue-950 to-blue-950/95 pt-16 pb-8 relative overflow-hidden">
      {/* Efeito de rede/grid no background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full bg-[url('/network-grid.svg')] bg-repeat opacity-10"></div>
      </div>
      
      {/* Efeito de brilho */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-32 bg-blue-500 opacity-10 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-5" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center space-x-2 mb-4">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Substituído o ícone do Shield pelo mesmo SVG usado no Header */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </motion.div>
              <div>
                <span className="text-xl font-bold text-white">SecureTI</span>
                <p className="text-xs text-blue-400">Proteção Digital</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Especialistas em segurança de dados e soluções corporativas de T.I. Protegendo seu negócio no mundo digital com tecnologias avançadas e serviços personalizados.
            </p>
            
            <div className="pt-4">
              <h4 className="text-white text-sm font-semibold mb-3">Siga-nos</h4>
              <div className="flex space-x-3">
                {[
                  { icon: <Linkedin size={18} />, href: "#" },
                  { icon: <Twitter size={18} />, href: "#" },
                  { icon: <Facebook size={18} />, href: "#" },
                  { icon: <Instagram size={18} />, href: "#" }
                ].map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.href}
                    className="w-8 h-8 rounded-full bg-blue-900 hover:bg-blue-700 flex items-center justify-center text-white transition-colors"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:pl-8" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-semibold text-white mb-5 relative inline-block">
              Links Rápidos
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Sobre Nós', href: '/sobre' },
                { name: 'Auditoria e Consultoria', href: '/auditoria' },
                { name: 'Venda de Armazenamento', href: '/armazenamento' },
                { name: 'Soluções de Desenvolvimento', href: '/solucoes' },
                { name: 'Gerenciamento e Backup', href: '/gerenciamento' }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-white text-sm flex items-center group transition-all">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-lg font-semibold text-white mb-5 relative inline-block">
              Serviços
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Consultoria de Segurança', href: '#' },
                { name: 'Auditoria de Sistemas', href: '#' },
                { name: 'Backup e Recuperação', href: '#' },
                { name: 'Cloud Storage', href: '#' },
                { name: 'Desenvolvimento Seguro', href: '#' },
                { name: 'Treinamento', href: '#' }
              ].map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="text-gray-300 hover:text-white text-sm flex items-center group transition-all">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-lg font-semibold text-white mb-5 relative inline-block">
              Contato
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-gray-300 text-sm">contato@secureti.com.br</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-gray-300 text-sm">(11) 4002-8922</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-gray-300 text-sm">Av. Paulista, 1000<br/>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800/50 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} SecureTI. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Termos de Uso
            </Link>
            <Link href="/referencias" className="text-gray-400 hover:text-white text-sm transition-colors">
              Referências
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}