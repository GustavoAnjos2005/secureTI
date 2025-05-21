"use client"

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Este componente é responsável por inicializar a biblioteca AOS
// apenas no lado do cliente, evitando problemas de hidratação
export default function AOSInitializer() {
  useEffect(() => {
    // Inicializa AOS com as configurações desejadas
    AOS.init({
      once: false,       // Animações devem ocorrer toda vez que elementos entram na viewport
      duration: 800,     // Duração das animações em milissegundos
      easing: 'ease-in-out', // Tipo de easing para as animações
      delay: 0,          // Atraso antes das animações começarem
      anchorPlacement: 'top-bottom', // Define onde o elemento deve estar em relação à viewport para acionar a animação
      mirror: true,      // Espelhar animações quando o elemento sai da viewport
    });

    // Refresh do AOS quando a página carrega completamente
    window.addEventListener('load', () => {
      AOS.refresh();
    });

    // Adiciona um evento de rolagem para atualizar as animações
    window.addEventListener('scroll', () => {
      AOS.refresh();
    });
    
    // Refresh periódico para garantir que as animações funcionem em todas as situações
    const refreshInterval = setInterval(() => {
      AOS.refresh();
    }, 2000);
    
    return () => {
      clearInterval(refreshInterval);
    };
  }, []);

  // Este componente não renderiza nada na interface
  return null;
}