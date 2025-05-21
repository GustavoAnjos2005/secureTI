"use client"

import Link from 'next/link';
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function GerenciamentoPage() {
  useEffect(() => {
    // Inicializar AOS (Animate On Scroll)
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 800,
        once: false,
      });
    };
    
    initAOS();
  }, []);

  // Características principais do serviço
  const caracteristicas = [
    {
      title: "Monitoramento 24/7",
      description: "Acompanhamento contínuo do desempenho da infraestrutura e sistemas para garantir disponibilidade e segurança.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Backup Automatizado",
      description: "Sistemas de backup programados com redundância geográfica para garantir a preservação de dados críticos.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      )
    },
    {
      title: "Análise de Performance",
      description: "Avaliação contínua do desempenho de sistemas e infraestrutura para identificar oportunidades de otimização.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Gerenciamento de Projetos",
      description: "Coordenação eficiente de recursos, prazos e entregas para garantir o sucesso de iniciativas de TI.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    }
  ];

  // Benefícios do serviço
  const beneficios = [
    "Redução de tempo de inatividade",
    "Proteção de dados críticos",
    "Resposta rápida a incidentes",
    "Otimização de recursos",
    "Conformidade regulatória",
    "Escalabilidade sob demanda"
  ];

  return (
    <div className="py-16 px-4 mt-16 md:mt-20">
      {/* Hero Section com efeitos visuais */}
      <div className="relative h-64 md:h-80 mb-12 overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/network-grid.svg')] bg-repeat opacity-20"></div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg"
          >
            Gerenciamento<br/>
            <span className="text-blue-300">& Backup</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl text-gray-100 max-w-2xl"
          >
            Soluções completas para administrar e proteger seus ambientes digitais
          </motion.p>
        </div>

        {/* Efeitos visuais */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-20 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl opacity-20 -ml-32 -mb-32"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Introdução com glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-blue-800/30 mb-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full filter blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-800/60 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-300">Gerenciamento Estratégico</h2>
            </div>
            
            <p className="text-gray-100 text-lg leading-relaxed ml-16">
              Oferecemos serviços <span className="text-blue-300 font-semibold">completos e integrados</span> de gerenciamento de sistemas, infraestrutura e projetos de TI. Nossa abordagem garante a <span className="text-blue-300 font-semibold">eficiência operacional</span>, <span className="text-blue-300 font-semibold">proteção de dados</span> e <span className="text-blue-300 font-semibold">continuidade de negócios</span>, permitindo que sua empresa foque em suas atividades principais enquanto cuidamos da sua tecnologia.
            </p>
          </div>
        </motion.div>

        {/* Características em grid */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Nossos <span className="text-blue-400">Serviços</span> de Gerenciamento
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caracteristicas.map((caracteristica, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-blue-800/40 to-blue-900/20 backdrop-blur-sm p-6 rounded-xl border border-blue-700/30 group hover:border-blue-500/40 transition-all relative overflow-hidden"
                whileHover={{ y: -5 }}
                data-aos="fade-up"
                data-aos-delay={100 + (index * 50)}
              >
                <div className="absolute -right-12 -top-12 w-24 h-24 bg-blue-400/10 rounded-full filter blur-xl opacity-70"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="text-blue-400 p-3 bg-blue-800/50 rounded-lg mr-4">
                      {caracteristica.icon}
                    </div>
                    <h3 className="text-xl font-bold text-blue-300 group-hover:text-white transition-colors">
                      {caracteristica.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 ml-16 leading-relaxed">
                    {caracteristica.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Imagem ou ilustração */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div 
            className="order-2 md:order-1"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Por que escolher nossa <span className="text-blue-400">solução?</span>
            </h2>
            
            <ul className="space-y-4">
              {beneficios.map((beneficio, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-blue-400/20 border border-blue-400/40 text-blue-300 rounded-full p-1 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-200">{beneficio}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h3 className="text-xl text-blue-300 font-semibold mb-2">Nossa garantia</h3>
              <p className="text-gray-300">
                Todos os nossos serviços de gerenciamento vêm com SLA garantido e suporte 24/7, proporcionando tranquilidade e confiança para sua operação de TI.
              </p>
            </div>
          </div>
          
          <div 
            className="order-1 md:order-2"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="bg-gradient-to-br from-blue-800/40 to-blue-700/20 backdrop-blur-sm p-8 rounded-xl border border-blue-700/30 relative overflow-hidden h-full">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-64 w-64" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              
              <div className="relative z-10 text-center space-y-4">
                <div className="inline-flex items-center justify-center p-4 bg-blue-800/60 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-white">Backup e Recuperação</h3>
                <p className="text-gray-300">
                  Nossa solução de backup garante recuperação rápida em caso de falhas, ataques ou catástrofes, minimizando o tempo de inatividade.
                </p>
                
                <div className="pt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-blue-800/30 rounded-lg">
                      <div className="text-blue-300 font-bold text-xl">99.9%</div>
                      <div className="text-gray-400 text-sm">Disponibilidade</div>
                    </div>
                    <div className="p-3 bg-blue-800/30 rounded-lg">
                      <div className="text-blue-300 font-bold text-xl">15min</div>
                      <div className="text-gray-400 text-sm">Tempo de resposta</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          className="bg-gradient-to-r from-blue-700 to-blue-600 p-8 md:p-10 rounded-xl shadow-xl text-center relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full opacity-10 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Teste seus conhecimentos em gerenciamento de TI
            </h2>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Participe do nosso quiz e descubra como você se sai nas melhores práticas de gerenciamento e backup.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/gerenciamento/quiz"
                className="bg-white text-blue-700 hover:text-blue-800 px-8 py-3 rounded-lg text-lg font-medium transition-colors shadow-lg inline-flex items-center"
              >
                <span>Iniciar Quiz</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}