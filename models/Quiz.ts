export type QuizOption = {
    id: string;
    text: string;
    isCorrect: boolean;
  };
  
  export type QuizQuestion = {
    id: string;
    type: 'multiple_choice' | 'justification' | 'true_false';
    title: string;
    description?: string;
    options?: QuizOption[];
    correctAnswer?: string;
    keywords?: string[]; // Palavras-chave para validar respostas de justificativa
    points: number;
  };
  
  export type Quiz = {
    _id?: string;
    title: string;
    description: string;
    segmentId: string;  // ex: 'auditoria', 'armazenamento', etc.
    questions: QuizQuestion[];
    createdAt: Date;
    updatedAt: Date;
  };