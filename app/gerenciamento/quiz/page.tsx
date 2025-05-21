'use client';
import QuizComponent from "../../../components/QuizComponent";
import { motion } from "framer-motion";
import Link from "next/link";

export default function GerenciamentoQuizPage() {
  return (
    <div className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 md:mb-8"
        >
          <Link href="/gerenciamento" className="text-blue-300 hover:text-blue-100 flex items-center transition-colors duration-300 mb-3 md:mb-4 text-sm md:text-base">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Voltar para Gerenciamento
          </Link>
          
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-2">Quiz de Gerenciamento de Identidades</h1>
          <div className="h-1 w-12 sm:w-16 md:w-20 bg-blue-400 rounded mb-3 md:mb-6"></div>
          <p className="text-blue-100 text-sm sm:text-base md:text-lg max-w-3xl">
            Teste seus conhecimentos em gerenciamento de identidades com nosso quiz interativo.
            Responda questões sobre autenticação, autorização e gestão de acessos.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-8 shadow-xl"
        >
          <QuizComponent segmento="gerenciamento" />
        </motion.div>
      </div>
    </div>
  );
}