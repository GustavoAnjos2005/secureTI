"use client";
import { ReactNode } from "react";
import AOSInitializer from "../../AOSInitializer";

export default function QuizLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
      <AOSInitializer />
      {/* Efeito de partículas/linhas de rede em background */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute w-full h-full bg-[url('/network-grid.svg')] bg-repeat"></div>
      </div>

      {/* Efeito de brilho no topo */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-40 bg-blue-500 opacity-5 blur-3xl rounded-full"></div>

      <main className="flex-grow overflow-x-hidden w-full">{children}</main>
      {/* Footer removido daqui para evitar duplicação */}
    </div>
  );
}