"use client"

import { CardSegmento } from "../components/CardSegmento";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Removida a inicialização duplicada do AOS, pois já é feita no AOSInitializer.tsx
  }, []);

  // Animações avançadas com variantes para melhor desempenho e controle
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 70,
        damping: 20 
      }
    }
  };

  const segmentos = [
    { 
      title: "Auditoria e Consultoria", 
      href: "/auditoria",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    { 
      title: "Venda de Armazenamento", 
      href: "/armazenamento",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
        </svg>
      )
    },
    { 
      title: "Soluções de Desenvolvimento", 
      href: "/solucoes",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    { 
      title: "Gerenciamento e Backup", 
      href: "/gerenciamento",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    }
  ];

  return (
    <div className="py-8 md:py-16 overflow-x-hidden w-full mx-auto max-w-[100vw]">
      {/* Hero Section animado */}
      <motion.div 
        className="mb-12 text-center px-4 overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        data-aos="fade-down"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          <span className="text-blue-400">Segurança</span> de T.I <br className="hidden md:block" />
          para seu <span className="text-blue-400">Negócio</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mx-auto max-w-3xl" data-aos="fade-up" data-aos-delay="200">
          Protegendo dados empresariais com soluções avançadas e personalizadas para sua empresa.
        </p>
      </motion.div>

      {/* Seção de destaques com efeito glassmorphism */}
      <motion.div 
        className="max-w-6xl mx-auto bg-blue-900/30 backdrop-blur-sm rounded-xl shadow-xl border border-blue-700/30 p-8 md:p-12 mb-16 overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        data-aos="zoom-in"
      >
        <div className="flex flex-col md:flex-row items-center mb-8 overflow-hidden">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-8" data-aos="fade-right" data-aos-delay="300">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-blue-300 mb-4">Proteja seu ambiente digital</h2>
              <p className="text-gray-200 text-lg mb-6">
                Soluções completas para proteger seu negócio contra ameaças digitais, garantindo a continuidade e segurança da sua operação.
              </p>
              <motion.div 
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="/sobre" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg text-white font-medium">
                  Conheça mais
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="400">
            <motion.div 
              className="bg-gradient-to-br from-blue-800/40 to-blue-600/40 p-4 rounded-lg shadow-lg border border-blue-500/20 relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center text-blue-200 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">Segurança em primeiro lugar</h3>
                <p className="text-gray-300 text-center">
                  Implementamos protocolos avançados e monitoramento 24/7 para garantir a integridade dos seus dados.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Cards de Segmentos com animações avançadas */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {segmentos.map((item, index) => (
            <motion.div 
              key={item.href}
              className="group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              data-aos="zoom-in" 
              data-aos-delay={200 + index * 100}
            >
              <CardSegmento 
                title={item.title} 
                href={item.href} 
                icon={item.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Seção de estatísticas com contador animado */}
      <div className="max-w-6xl mx-auto px-4 overflow-hidden">
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {[
            { value: "99.9%", label: "Uptime garantido" },
            { value: "24/7", label: "Monitoramento" },
            { value: "+500", label: "Clientes satisfeitos" },
            { value: "+10", label: "Anos de experiência" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-blue-800/30 backdrop-blur-sm rounded-lg p-6 border border-blue-700/30 hover:border-blue-400/40 transition-all hover:shadow-lg hover:shadow-blue-900/20"
              data-aos="zoom-in" 
              data-aos-delay={200 + index * 100}
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}