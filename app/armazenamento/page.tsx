"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ArmazenamentoPage() {
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

  return (
    <div className="py-16 px-4 mt-16 md:mt-20">
      {/* Hero Section com animação e efeitos gradientes */}
      <div className="relative h-64 md:h-80 mb-12 overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-95"></div>
        <div className="absolute inset-0 bg-[url('/network-grid.svg')] bg-repeat opacity-20"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg"
          >
            Armazenamento<br/>
            <span className="text-blue-300">de Dados Empresariais</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl text-gray-100 max-w-2xl"
          >
            Soluções seguras e escaláveis para gerenciar informações críticas
          </motion.p>
        </div>

        {/* Efeitos visuais no banner */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-20 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl opacity-20 -ml-32 -mb-32"></div>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Introdução */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-blue-800/30 mb-12"
        >
          <h2 className="text-2xl font-bold text-blue-300 mb-4">O poder do armazenamento seguro</h2>
          <p className="text-gray-100 text-lg leading-relaxed">
            Em um mundo onde os dados são o ativo mais valioso das empresas, oferecemos soluções de <span className="text-blue-300 font-semibold">armazenamento robustas</span> que protegem suas informações contra qualquer ameaça, enquanto mantêm a agilidade necessária para seus negócios.
          </p>
        </motion.div>
        
        {/* Cards com efeito de glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Solução Completa */}
          <div 
            className="bg-gradient-to-br from-blue-800/40 to-blue-700/20 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-blue-700/30 relative overflow-hidden"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-400/20 rounded-full filter blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <span className="p-2 bg-blue-800/60 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                  </svg>
                </span>
                <h3 className="text-2xl font-bold text-blue-300">Solução Completa</h3>
              </div>
              
              <p className="text-gray-200 leading-relaxed mb-6">
                O <span className="text-blue-300 font-semibold">armazenamento</span> em uma empresa de consultoria envolve organizar e proteger dados essenciais, como documentos, relatórios, informações de clientes e projetos. Utilizamos ferramentas digitais avançadas para garantir:
              </p>
              
              <ul className="space-y-3">
                {[
                  "Sistemas de gestão documental integrados",
                  "Armazenamento em nuvem com redundância",
                  "CRMs para gerenciamento de informações de clientes",
                  "Acesso eficiente e seguro a qualquer momento"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="bg-blue-400/20 border border-blue-400/40 text-blue-300 rounded-full p-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Segurança e Práticas */}
          <div 
            className="bg-gradient-to-br from-blue-800/40 to-blue-700/20 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-blue-700/30 relative overflow-hidden"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-blue-400/20 rounded-full filter blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <span className="p-2 bg-blue-800/60 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <h3 className="text-2xl font-bold text-blue-300">Segurança e Práticas</h3>
              </div>
              
              <p className="text-gray-200 leading-relaxed mb-6">
                A <span className="text-blue-300 font-semibold">segurança dos dados</span> é fundamental para qualquer estratégia de armazenamento corporativo. Implementamos práticas avançadas de proteção:
              </p>
              
              <ul className="space-y-3">
                {[
                  "Backup automatizado com redundância geográfica",
                  "Criptografia de ponta a ponta para arquivos sensíveis",
                  "Controle de acesso hierárquico e autenticação multifator",
                  "Repositórios internos para conhecimento institucional"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="bg-blue-400/20 border border-blue-400/40 text-blue-300 rounded-full p-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tecnologias de Armazenamento */}
        <div 
          className="mb-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Tecnologias de <span className="text-blue-400">Armazenamento</span> Utilizadas
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Cloud Storage",
                description: "Armazenamento flexível na nuvem, com capacidade ilimitada e pague apenas pelo que usar.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                )
              },
              {
                title: "On-Premise Storage",
                description: "Servidores locais de alta performance para dados que exigem acesso rápido e controle total.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                  </svg>
                )
              },
              {
                title: "Hybrid Storage",
                description: "Combinação ideal entre nuvem e servidores locais, oferecendo o melhor dos dois mundos.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                )
              },
            ].map((tech, index) => (
              <motion.div 
                key={index}
                className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-blue-700/30 hover:border-blue-400/50 transition-all flex flex-col items-center text-center"
                whileHover={{ y: -5 }}
                data-aos="fade-up" 
                data-aos-delay={200 + index * 100}
              >
                <div className="text-blue-400 mb-4 p-4 bg-blue-800/50 rounded-lg inline-block">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{tech.title}</h3>
                <p className="text-gray-300">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soluções e Benefícios */}
        <div 
          className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-sm p-7 rounded-xl shadow-lg border border-blue-700/30">
            <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Benefícios
            </h3>
            <ul className="space-y-2">
              {[
                "Redução de custos operacionais",
                "Acesso rápido e seguro às informações",
                "Proteção contra ataques e ransomware",
                "Escalabilidade conforme crescimento",
                "Recuperação rápida em desastres"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-sm p-7 rounded-xl shadow-lg border border-blue-700/30">
            <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Garantias
            </h3>
            <ul className="space-y-2">
              {[
                "SLA com 99.99% de disponibilidade",
                "Monitoramento contínuo 24/7",
                "Equipe técnica especializada",
                "Conformidade com LGPD e normativas",
                "Suporte prioritário para emergências"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA animado */}
        <motion.div 
          className="bg-gradient-to-r from-blue-700 to-blue-600 p-8 md:p-10 rounded-xl shadow-xl text-center relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Efeitos visuais */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full opacity-10 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Teste seus conhecimentos sobre armazenamento
            </h2>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Verifique seu nível de compreensão sobre as melhores práticas de armazenamento de dados corporativos.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/armazenamento/quiz"
                className="bg-white text-blue-700 hover:text-blue-800 px-8 py-3 rounded-lg text-lg font-medium transition-colors shadow-lg inline-flex items-center"
              >
                <span>Iniciar Teste</span>
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