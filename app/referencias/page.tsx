"use client"

import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Referencias() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Cabeçalho com efeito de fade-up */}
        <div className="relative mb-10">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl opacity-10"></div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white drop-shadow-sm relative z-10" data-aos="fade-up">
            Referências
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto mb-12 rounded-full relative z-10" data-aos="fade-up" data-aos-delay="100"></div>
        </div>
        
        {/* Card principal com efeito de glassmorphism */}
        <div className="bg-blue-900/30 backdrop-blur-sm rounded-xl shadow-xl border border-blue-700/30 p-8 md:p-10 mb-12 relative" data-aos="fade-up" data-aos-delay="200">
          <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-400/20 rounded-full filter blur-2xl"></div>
          <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-blue-400/20 rounded-full filter blur-2xl"></div>
          
          <h2 className="text-2xl font-bold text-blue-300 mb-8 border-b pb-4 border-blue-700/50 relative z-10">Bibliografia e Recursos</h2>
          
          <div className="space-y-12 relative z-10">
            {/* Auditoria e Consultoria */}
            <section className="transition-all hover:translate-x-1 duration-300">
              <h3 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
                <div className="w-1 h-6 bg-blue-400 mr-3 rounded-full"></div>
                Auditoria e Consultoria
              </h3>
              <ul className="space-y-4 list-none pl-6 text-gray-200">
                <li className="hover:bg-blue-800/30 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-700/50">
                  <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 font-medium flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Lei nº 13.709/2018 (LGPD)
                  </a>
                  <p className="text-sm text-gray-300 mt-2 ml-7">Base legal brasileira para proteção de dados pessoais.</p>
                </li>
                <li className="hover:bg-blue-800/30 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-700/50">
                  <a href="https://www.iso.org/standard/62085.html" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 font-medium flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    ISO 9001:2015 - Requisitos para sistemas de gestão da qualidade
                  </a>
                  <p className="text-sm text-gray-300 mt-2 ml-7">Norma internacional para gestão da qualidade.</p>
                </li>
                <li className="hover:bg-blue-800/30 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-700/50">
                  <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 font-medium flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    NIST Cybersecurity Framework
                  </a>
                  <p className="text-sm text-gray-300 mt-2 ml-7">Framework de segurança amplamente utilizado globalmente.</p>
                </li>
              </ul>
            </section>
            
            {/* Armazenamento de Dados */}
            <section className="transition-all hover:translate-x-1 duration-300">
              <h3 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
                <div className="w-1 h-6 bg-blue-400 mr-3 rounded-full"></div>
                Armazenamento de Dados
              </h3>
              <ul className="space-y-4 list-none pl-6 text-gray-200">
                <li className="hover:bg-blue-800/30 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-700/50">
                  <a href="https://aws.amazon.com/pt/what-is/data-lake/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 font-medium flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    AWS - O que é um Data Lake?
                  </a>
                  <p className="text-sm text-gray-300 mt-2 ml-7">Definição técnica e aplicações práticas.</p>
                </li>
                <li className="hover:bg-blue-800/30 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-700/50">
                  <a href="https://learn.microsoft.com/pt-br/azure/storage/blobs/data-lake-storage-introduction" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 font-medium flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Microsoft Azure - Data Lake
                  </a>
                  <p className="text-sm text-gray-300 mt-2 ml-7">Explicação técnica sobre repositórios de dados não estruturados.</p>
                </li>
                <li className="hover:bg-blue-800/30 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-700/50">
                  <a href="https://www.seagate.com/br/pt/blog/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 font-medium flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Seagate - Diferenças entre HDD e SSD
                  </a>
                  <p className="text-sm text-gray-300 mt-2 ml-7">Comparativo técnico entre tecnologias de armazenamento.</p>
                </li>
                <li className="hover:bg-blue-800/30 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-700/50">
                  <a href="https://www.kaspersky.com.br/resource-center/threats/ransomware" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 font-medium flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Kaspersky - O que é Ransomware?
                  </a>
                  <p className="text-sm text-gray-300 mt-2 ml-7">Guia sobre prevenção e mitigação de ransomware.</p>
                </li>
                <li className="hover:bg-blue-800/30 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-700/50">
                  <a href="https://www.redhat.com/pt-br/topics" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 font-medium flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Red Hat - Armazenamento Híbrido
                  </a>
                  <p className="text-sm text-gray-300 mt-2 ml-7">Explicação sobre modelos híbridos de armazenamento.</p>
                </li>
                <li className="hover:bg-blue-800/30 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-700/50">
                  <a href="https://cloud.google.com/storage/docs/locations?hl=pt-br" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 font-medium flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Google Cloud - Redundância Geográfica
                  </a>
                  <p className="text-sm text-gray-300 mt-2 ml-7">Como a redundância geográfica protege dados.</p>
                </li>
              </ul>
            </section>
            
            {/* Gerenciamento & Backup */}
            <section className="transition-all hover:translate-x-1 duration-300">
              <h3 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
                <div className="w-1 h-6 bg-blue-400 mr-3 rounded-full"></div>
                Gerenciamento & Backup
              </h3>
              <ul className="space-y-4 list-none pl-6 text-gray-200">
                <li className="hover:bg-blue-800/30 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-700/50">
                  <a href="https://www.ibm.com/br-pt/topics/backup-disaster-recovery" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 font-medium flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    IBM - O que é RPO e RTO?
                  </a>
                  <p className="text-sm text-gray-300 mt-2 ml-7">Conceitos fundamentais de recuperação de desastres.</p>
                </li>
                <li className="hover:bg-blue-800/30 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-700/50">
                  <a href="https://www.axelos.com/certifications/itil-service-management/what-is-itil" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 font-medium flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    ITIL - Acordos de Nível de Serviço
                  </a>
                  <p className="text-sm text-gray-300 mt-2 ml-7">Framework para gestão de serviços de TI.</p>
                </li>
              </ul>
            </section>

            {/* Soluções de Segurança */}
            <section className="transition-all hover:translate-x-1 duration-300">
              <h3 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
                <div className="w-1 h-6 bg-blue-400 mr-3 rounded-full"></div>
                Soluções de Segurança
              </h3>
              <ul className="space-y-4 list-none pl-6 text-gray-200">
                <li className="hover:bg-blue-800/30 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-700/50">
                  <a href="https://owasp.org/www-project-web-security-testing-guide/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 font-medium flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    OWASP - Guia de Testes de Penetração
                  </a>
                  <p className="text-sm text-gray-300 mt-2 ml-7">Padrão aberto para testes de segurança.</p>
                </li>
                <li className="hover:bg-blue-800/30 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-700/50">
                  <a href="https://www.nist.gov/itl/applied-cybersecurity/tig/back-basics-multi-factor-authentication" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 font-medium flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    NIST - Diretrizes de Autenticação Multifatorial
                  </a>
                  <p className="text-sm text-gray-300 mt-2 ml-7">Recomendações técnicas do Instituto Nacional de Padrões e Tecnologia dos EUA.</p>
                </li>
                <li className="hover:bg-blue-800/30 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-700/50">
                  <a href="https://www.cisco.com/site/br/pt/products/security/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 font-medium flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Cisco - Firewalls
                  </a>
                  <p className="text-sm text-gray-300 mt-2 ml-7">Funcionamento e importância de firewalls.</p>
                </li>
                <li className="hover:bg-blue-800/30 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-700/50">
                  <a href="https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 font-medium flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    NIST - Padrões de Criptografia
                  </a>
                  <p className="text-sm text-gray-300 mt-2 ml-7">Normas técnicas para criptografia.</p>
                </li>
              </ul>
            </section>

            {/* Referências Adicionais */}
            <section className="transition-all hover:translate-x-1 duration-300">
              <h3 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
                <div className="w-1 h-6 bg-blue-400 mr-3 rounded-full"></div>
                Referências Adicionais
              </h3>
              <ul className="space-y-4 list-none pl-6 text-gray-200">
                <li className="hover:bg-blue-800/30 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-700/50">
                  <a href="https://www.gov.br/anpd/pt-br" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 font-medium flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Autoridade Nacional de Proteção de Dados (ANPD)
                  </a>
                  <p className="text-sm text-gray-300 mt-2 ml-7">Órgão regulador brasileiro para a LGPD.</p>
                </li>
                <li className="hover:bg-blue-800/30 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-700/50">
                  <a href="https://gdpr-info.eu/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 font-medium flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    GDPR - Site Oficial
                  </a>
                  <p className="text-sm text-gray-300 mt-2 ml-7">Regulamento europeu que inspirou a LGPD.</p>
                </li>
              </ul>
            </section>
          </div>
        </div>
        
        {/* Botão de voltar melhorado */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="300">
          <Link href="/" className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-900/30 transform hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para Home
          </Link>
        </div>
      </div>
    </div>
  );
}