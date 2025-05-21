"use client"

import Link from 'next/link';
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function SobrePage() {
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

  // Valores da empresa
  const valores = [
    { nome: "Inovação", descricao: "Buscamos constantemente novas tecnologias e métodos para oferecer o melhor em segurança digital." },
    { nome: "Transparência", descricao: "Mantemos comunicação clara e aberta com nossos clientes em todos os processos de implementação." },
    { nome: "Comprometimento", descricao: "Comprometemo-nos com resultados efetivos e duradouros para nossos clientes." },
    { nome: "Qualidade", descricao: "Investimos no mais alto nível de qualidade em nossas soluções e serviços." },
    { nome: "Segurança", descricao: "Prioridade máxima em todos os nossos processos e tecnologias implementadas." },
    { nome: "Confidencialidade", descricao: "Garantimos o sigilo total das informações de nossos clientes." }
  ];

  // Serviços oferecidos
  const servicos = [
    {
      titulo: "Consultoria em Banco de Dados",
      descricao: "Oferecemos consultoria especializada para ajudar sua empresa a escolher e implementar a melhor solução de banco de dados.",
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      titulo: "Migração de Dados",
      descricao: "Realizamos migrações seguras e eficientes de dados, garantindo a integridade e disponibilidade das informações.",
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      titulo: "Otimização de Desempenho",
      descricao: "Melhoramos o desempenho dos seus bancos de dados, garantindo consultas rápidas e operações eficientes.",
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      titulo: "Backup e Recuperação",
      descricao: "Implementamos soluções de backup e recuperação de dados para garantir a segurança e continuidade dos negócios.",
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7m0 1a1 1 0 011-1h6a1 1 0 011 1v10a1 1 0 01-1 1H9a1 1 0 01-1-1V8z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 15h4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 11h4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h4" />
        </svg>
      )
    },
    {
      titulo: "Auditoria de Segurança",
      descricao: "Realizamos auditorias de segurança para identificar vulnerabilidades e garantir a proteção dos seus dados.",
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      titulo: "Treinamento e Capacitação",
      descricao: "Oferecemos treinamentos para equipes, garantindo que sua empresa utilize os bancos de dados com máxima eficiência.",
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  // Equipe
  const equipe = [
    { 
      nome: "João Silva", 
      cargo: "Especialista em Banco de Dados",
      foto: "/joao-silva.jpg" 
    },
    { 
      nome: "Maria Souza", 
      cargo: "Consultora de Segurança",
      foto: "/maria-souza.jpg" 
    },
    { 
      nome: "Pedro Costa", 
      cargo: "Arquiteto de Soluções",
      foto: "/pedro-costa.jpg" 
    },
    { 
      nome: "Ana Lima", 
      cargo: "Analista de Desempenho",
      foto: "/ana-lima.jpg" 
    }
  ];

  return (
    <div className="py-16 px-4 mt-16 md:mt-20">
      {/* Hero Section */}
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
            Sobre Nós
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl text-gray-100 max-w-2xl"
          >
            Conheça mais sobre nossa empresa e nossa missão
          </motion.p>
        </div>

        {/* Efeitos visuais */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-20 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl opacity-20 -ml-32 -mb-32"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        {/* Seção: Missão, Visão e Valores */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Nossa <span className="text-blue-400">Essência</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              className="bg-gradient-to-br from-blue-800/40 to-blue-900/20 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-blue-700/30 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-400/10 rounded-full filter blur-xl"></div>
              
              <div className="relative z-10">
                <div className="p-3 bg-blue-800/60 rounded-lg inline-flex mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-300 mb-4">Missão</h3>
                <p className="text-gray-200 leading-relaxed">
                  Oferecer soluções de segurança de dados inovadoras e robustas, ajudando empresas a proteger suas informações críticas e otimizar seus processos digitais para um crescimento sustentável.
                </p>
              </div>
            </div>
            
            <div 
              className="bg-gradient-to-br from-blue-800/40 to-blue-900/20 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-blue-700/30 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="absolute -left-16 -top-16 w-32 h-32 bg-blue-400/10 rounded-full filter blur-xl"></div>
              
              <div className="relative z-10">
                <div className="p-3 bg-blue-800/60 rounded-lg inline-flex mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-300 mb-4">Visão</h3>
                <p className="text-gray-200 leading-relaxed">
                  Ser referência no mercado de segurança de dados e TI, reconhecidos pela excelência, inovação e confiabilidade em nossas soluções, contribuindo para um ambiente digital mais seguro e eficiente.
                </p>
              </div>
            </div>
            
            <div 
              className="bg-gradient-to-br from-blue-800/40 to-blue-900/20 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-blue-700/30 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-blue-400/10 rounded-full filter blur-xl"></div>
              
              <div className="relative z-10">
                <div className="p-3 bg-blue-800/60 rounded-lg inline-flex mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-300 mb-4">Valores</h3>
                <ul className="space-y-2 text-gray-200">
                  {valores.slice(0, 4).map((valor, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>{valor.nome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Principais Valores (expandida) */}
        <section className="mb-16" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Nossos <span className="text-blue-400">Valores</span> Fundamentais
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((valor, index) => (
              <motion.div 
                key={index}
                className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-blue-700/30 hover:border-blue-500/40 transition-all"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold text-blue-300 mb-2">{valor.nome}</h3>
                <p className="text-gray-300">{valor.descricao}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Seção: Serviços */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Nossos <span className="text-blue-400">Serviços</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((servico, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-blue-800/40 to-blue-900/20 backdrop-blur-sm p-6 rounded-xl border border-blue-700/30 group hover:border-blue-500/40 transition-all relative overflow-hidden"
                whileHover={{ y: -5 }}
                data-aos="fade-up"
                data-aos-delay={100 + (index * 50)}
              >
                <div className="absolute -right-12 -top-12 w-24 h-24 bg-blue-400/10 rounded-full filter blur-xl opacity-70"></div>
                
                <div className="relative z-10">
                  <div className="text-blue-400 p-3 bg-blue-800/50 rounded-lg inline-block mb-4">
                    {servico.icone}
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-300 mb-3 group-hover:text-white transition-colors">
                    {servico.titulo}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {servico.descricao}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Seção: Equipe */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Nossa <span className="text-blue-400">Equipe</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipe.map((membro, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-blue-800/40 to-blue-700/20 backdrop-blur-sm p-6 rounded-xl border border-blue-700/30 text-center relative overflow-hidden"
                whileHover={{ y: -5 }}
                data-aos="fade-up"
                data-aos-delay={100 + (index * 50)}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/50"></div>
                
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-blue-800/60 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{membro.nome}</h3>
                  <p className="text-blue-300 mb-4">{membro.cargo}</p>
                  
                  <div className="flex justify-center space-x-3">
                    {[
                      <svg key="linkedin" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>,
                      <svg key="github" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    ].map((icon, i) => (
                      <a key={i} href="#" className="hover:scale-110 transition-transform">
                        {icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
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
              Pronto para proteger seus dados?
            </h2>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Entre em contato hoje mesmo e descubra como podemos ajudar sua empresa a ter mais segurança digital.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="#contato"
                className="bg-white text-blue-700 hover:text-blue-800 px-8 py-3 rounded-lg text-lg font-medium transition-colors shadow-lg inline-flex items-center"
              >
                <span>Fale Conosco</span>
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