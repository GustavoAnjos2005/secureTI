export type QuizAnswer = {
  questionId: string;
  selectedOptionId?: string;  // Para múltipla escolha e verdadeiro/falso
  justificationText?: string; // Para questões de justificativa
};
  
  export type QuizSubmission = {
    _id?: string;
    userId: string;
    quizId: string;
    segmentId: string;
    answers: QuizAnswer[];
    score?: number;
    totalPossibleScore?: number;
    completedAt?: Date;
    createdAt: Date;
    updatedAt?: Date;
  };