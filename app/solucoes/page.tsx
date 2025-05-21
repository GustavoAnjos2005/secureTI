"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function SolucoesPage() {
  useEffect(() => {
    // A inicialização do AOS foi removida pois já é feita no AOSInitializer.tsx
  }, []);

  // Soluções de segurança oferecidas
  const solucoes = [
    {
      title: "Firewall e Proteção de Rede",
      content: "Implementação de firewalls e sistemas de detecção de intrusão para proteger a rede contra acessos não autorizados.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l2 2m4-4l-2-2m-4 0l2 2m4-4l-2 2" />
        </svg>
      )
    },
    {
      title: "Criptografia de Dados",
      content: "Proteção de dados sensíveis por meio de criptografia avançada, garantindo que informações confidenciais não sejam acessadas indevidamente.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Monitoramento Contínuo",
      content: "Vigilância 24/7 para identificar e responder a ameaças em tempo real, com alertas automatizados e resposta imediata a incidentes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Gestão de Identidades",
      content: "Controle de acessos com autenticação multifatorial, permissões baseadas em funções específicas e gerenciamento centralizado de credenciais.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Testes de Penetração",
      content: "Simulação de ataques cibernéticos para identificar vulnerabilidades antes que sejam exploradas por agentes maliciosos.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* SVG corrigido com um X centralizado na lupa */}
          <circle cx="10" cy="10" r="7" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 8l4 4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8l-4 4" />
        </svg>
      )
    },
    {
      title: "Recuperação de Desastres",
      content: "Estratégias e sistemas para garantir a continuidade dos negócios após incidentes de segurança ou eventos catastróficos.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ];

  return (
    <div className="py-16 px-4 mt-16 md:mt-20 overflow-x-hidden w-full">
      {/* Hero Section com efeitos visuais modernos */}
      <div className="relative h-64 md:h-80 mb-12 overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/network-grid.svg')] bg-repeat opacity-20"></div>
        
        {/* Efeitos de círculos luminosos */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-blue-300/20 rounded-full blur-2xl"></div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg"
          >
            Soluções de Segurança<br/>
            <span className="text-blue-300">para Empresas</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl text-gray-100 max-w-2xl"
          >
            Proteção completa contra ameaças digitais para sua organização
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto overflow-hidden">
        {/* Introdução em glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-blue-800/30 mb-12 relative overflow-hidden"
        >
          {/* Efeito de gradiente no card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full filter blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-800/60 rounded-lg mr-4 inline-flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-300">Segurança Digital Integrada</h2>
            </div>
            
            <p className="text-gray-100 text-lg leading-relaxed ml-16">
              Nossa empresa oferece <span className="text-blue-300 font-semibold">soluções completas</span> para proteger sistemas e dados contra as mais avançadas ameaças cibernéticas, garantindo <span className="text-blue-300 font-semibold">integridade</span>, <span className="text-blue-300 font-semibold">confidencialidade</span> e <span className="text-blue-300 font-semibold">disponibilidade</span> das informações críticas do seu negócio.
            </p>
          </div>
        </motion.div>

        {/* Estatísticas animadas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: "99.9%", label: "Eficácia na detecção" },
            { value: "24/7", label: "Monitoramento contínuo" },
            { value: "<15min", label: "Tempo de resposta" },
            { value: "+5000", label: "Ataques bloqueados" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-sm p-4 rounded-lg border border-blue-700/30 text-center"
              data-aos="zoom-in" 
              data-aos-delay={100 * index}
            >
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Grid de soluções com cards modernos e interativos */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Nossas <span className="text-blue-400">Soluções</span> de Segurança
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solucoes.map((solucao, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-blue-800/40 to-blue-900/20 backdrop-blur-sm p-6 rounded-xl border border-blue-700/30 group hover:border-blue-500/40 transition-all relative overflow-hidden"
                whileHover={{ y: -5 }}
                data-aos="fade-up"
                data-aos-delay={100 + (index * 50)}
              >
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -right-12 -top-12 w-24 h-24 bg-blue-400/10 rounded-full filter blur-xl opacity-70"></div>
                
                <div className="relative z-10">
                  {/* Ícone */}
                  <div className="mb-4 flex justify-center md:justify-start text-blue-400 group-hover:text-blue-300 transition-colors">
                    {solucao.icon}
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-xl font-bold text-blue-300 mb-3 group-hover:text-white transition-colors">
                    {solucao.title}
                  </h3>
                  
                  {/* Descrição */}
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {solucao.content}
                  </p>
                  
                  {/* Botão "Saiba mais" com animação */}
                  <div className="flex justify-end">
                    <div className="text-blue-400 inline-flex items-center text-sm font-medium group-hover:text-blue-300 transition-all">
                      <span className="mr-1">Saiba mais</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Processo de implementação - Corrigido o alinhamento dos itens */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Nosso <span className="text-blue-400">Processo</span> de Implementação
          </h2>
          
          <div className="relative">
            {/* Linha conectora */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-800/50 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-24 relative">
              {[
                {
                  step: "01",
                  title: "Análise de Vulnerabilidades",
                  content: "Avaliação completa da infraestrutura existente para identificar pontos fracos e ameaças potenciais."
                },
                {
                  step: "02",
                  title: "Planejamento Estratégico",
                  content: "Desenvolvimento de um plano personalizado de segurança alinhado aos objetivos do seu negócio."
                },
                {
                  step: "03",
                  title: "Implementação de Soluções",
                  content: "Instalação e configuração de sistemas de segurança com mínima interrupção operacional."
                },
                {
                  step: "04",
                  title: "Monitoramento Contínuo",
                  content: "Vigilância permanente e atualizações para garantir proteção contra novas ameaças."
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="flex flex-col md:block relative"
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={100 + (index * 100)}
                >
                  {/* Container para garantir o posicionamento correto para desktop */}
                  <div className="md:grid md:grid-cols-9 md:items-center">
                    {/* Lado esquerdo - para step 1 e 3 */}
                    <div className={`md:col-span-4 ${index % 2 === 0 ? 'block' : 'hidden md:block md:opacity-0'}`}>
                      <div className={`p-6 bg-gradient-to-br from-blue-800/40 to-blue-900/20 backdrop-blur-sm rounded-lg border border-blue-700/30 mb-6 md:mb-0 md:mr-8`}>
                        <span className="text-4xl font-bold text-blue-400/30 absolute top-2 right-3 md:hidden">{step.step}</span>
                        <h3 className="text-xl font-bold text-blue-300 mb-2 relative">{step.title}</h3>
                        <p className="text-gray-300">{step.content}</p>
                      </div>
                    </div>
                    
                    {/* Marcador central */}
                    <div className="md:col-span-1 flex justify-center my-4 md:my-0">
                      <div className="w-10 h-10 bg-blue-700 rounded-full border-4 border-blue-900 z-10 flex items-center justify-center">
                        <span className="text-white font-bold">{step.step}</span>
                      </div>
                    </div>
                    
                    {/* Lado direito - para step 2 e 4 */}
                    <div className={`md:col-span-4 ${index % 2 !== 0 ? 'block' : 'hidden md:block md:opacity-0'}`}>
                      <div className={`p-6 bg-gradient-to-br from-blue-800/40 to-blue-900/20 backdrop-blur-sm rounded-lg border border-blue-700/30 md:ml-8`}>
                        <span className="text-4xl font-bold text-blue-400/30 absolute top-2 right-3 md:hidden">{step.step}</span>
                        <h3 className="text-xl font-bold text-blue-300 mb-2 relative">{step.title}</h3>
                        <p className="text-gray-300">{step.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
          {/* Efeitos visuais */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full opacity-10 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Avalie seu nível de conhecimento em segurança
            </h2>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Teste seus conhecimentos e descubra quais áreas da segurança digital você precisa fortalecer.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/solucoes/quiz"
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