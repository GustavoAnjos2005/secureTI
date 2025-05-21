"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function AuditoriaPage() {
  useEffect(() => {
    // A inicialização do AOS foi removida pois já é feita no AOSInitializer.tsx
  }, []);

  // Variantes de animação para elementos
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    }
  };

  return (
    <div className="py-16 px-4 mt-16 md:mt-20">
      {/* Hero Section com efeito parallax */}
      <div className="relative h-64 md:h-80 mb-12 overflow-hidden rounded-xl" data-aos="fade-in">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/network-grid.svg')] bg-repeat opacity-20"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 drop-shadow-lg"
            data-aos="fade-down"
          >
            <span className="md:hidden">Auditoria<br/>e Consultoria<br/></span>
            <span className="hidden md:inline">Auditoria e Consultoria<br/></span>
            <span className="text-blue-300">em Bancos de Dados</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm md:text-xl text-gray-100 max-w-2xl"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            Garantimos a segurança e integridade dos seus dados com soluções especializadas
          </motion.p>
        </div>

        {/* Efeito de brilho no canto */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-20 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl opacity-20 -ml-32 -mb-32"></div>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Introdução com glassmorphism */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-blue-800/30 mb-12 text-center"
          data-aos="zoom-in" 
          data-aos-delay="100"
        >
          <p className="text-gray-100 text-lg md:text-xl leading-relaxed">
            Nossos serviços especializados garantem a <span className="text-blue-300 font-semibold">segurança</span>, 
            <span className="text-blue-300 font-semibold"> eficiência</span> e 
            <span className="text-blue-300 font-semibold"> integridade</span> de bancos de dados, 
            alinhados aos objetivos estratégicos da sua empresa.
          </p>
        </motion.div>

        {/* Serviços em grid com cards modernos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Auditoria */}
          <div 
            className="bg-gradient-to-br from-blue-800/40 to-blue-700/20 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-blue-700/30 relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/10 rounded-full filter blur-2xl -mr-20 -mt-20"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center mb-6 p-3 bg-blue-900/60 rounded-lg border border-blue-700/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Auditoria</h3>
              
              <ul className="space-y-4">
                {[
                  "Avaliação de Segurança: Verificar vulnerabilidades, riscos e conformidade com normas de proteção de dados.",
                  "Integridade de Dados: Avaliar a precisão, consistência e confiabilidade dos dados armazenados.",
                  "Desempenho: Examinar o desempenho do banco de dados para identificar problemas de eficiência.",
                  "Relatórios e Recomendações: Sugerir ações corretivas como otimização e controles de acesso."
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-blue-400/20 border border-blue-400/40 text-blue-300 rounded-full p-1 mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="text-gray-200 text-base">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Consultoria */}
          <div 
            className="bg-gradient-to-br from-blue-800/40 to-blue-700/20 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-blue-700/30 relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/10 rounded-full filter blur-2xl -mr-20 -mt-20"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center mb-6 p-3 bg-blue-900/60 rounded-lg border border-blue-700/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Consultoria</h3>
              
              <ul className="space-y-4">
                {[
                  "Planejamento e Design: Estruturação do banco de dados para atender necessidades específicas.",
                  "Otimização: Melhorias de desempenho com ajuste de consultas e indexação.",
                  "Implementação de Tecnologias: Recomendação de soluções avançadas como automação.",
                  "Treinamento e Suporte: Capacitação para uso eficaz e seguro dos sistemas."
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-blue-400/20 border border-blue-400/40 text-blue-300 rounded-full p-1 mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="text-gray-200 text-base">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Benefícios */}
        <div 
          className="mb-12"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Por que escolher nossa <span className="text-blue-400">Consultoria em BD</span>?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Expertise Especializada",
                description: "Profissionais com conhecimento atualizado nas melhores práticas de segurança de dados.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              },
              {
                title: "Soluções Personalizadas",
                description: "Abordagens adaptadas às necessidades específicas e ao contexto do seu negócio.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                )
              },
              {
                title: "Resultados Comprovados",
                description: "Histórico de sucesso na otimização de sistemas e prevenção de vulnerabilidades.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-blue-700/30 hover:border-blue-500/40 transition-all"
              >
                <div className="text-blue-400 mb-4 p-3 bg-blue-800/50 rounded-lg inline-block">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA animado */}
        <motion.div 
          className="bg-gradient-to-r from-blue-700 to-blue-600 p-8 md:p-10 rounded-xl shadow-xl text-center relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          {/* Efeitos visuais */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full opacity-10 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pronto para garantir a segurança dos seus dados?
            </h2>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Inicie nossa avaliação gratuita e descubra como podemos fortalecer seu sistema de banco de dados.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/auditoria/quiz"
                className="bg-white text-blue-700 hover:text-blue-800 px-8 py-3 rounded-lg text-lg font-medium transition-colors shadow-lg inline-flex items-center"
              >
                <span>Iniciar Avaliação</span>
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