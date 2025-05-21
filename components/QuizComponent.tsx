'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Option {
  id: string;
  text: string;
  isCorrect?: boolean;
}

interface Question {
  id: string;
  question: string;
  type: string;
  options: Option[];
  dificuldade: 'basica' | 'intermediaria' | 'dificil';
  keywords?: string[]; // Palavras-chave para validar respostas de justificativa
}

interface Quiz {
  _id: string;
  title: string;
  description: string;
  questions: Question[];
}

export default function QuizComponent({ segmento }: { segmento: string }) {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<{ correct: string[]; incorrect: string[] }>({ correct: [], incorrect: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dificuldade, setDificuldade] = useState<'basica' | 'intermediaria' | 'dificil'>('basica');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [justificationAnswers, setJustificationAnswers] = useState<{ [key: string]: string }>({});
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  // Animações
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const slideIn = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } }
  };

  const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } }
  };

  // Buscar quizzes por segmento
  useEffect(() => {
    if (!segmento) return;
    setLoading(true);
    fetch(`/api/quizzes?segmento=${segmento}`)
      .then((res) => res.json())
      .then((data) => {
        setQuizzes(data.data);
        if (data.data.length > 0) {
          setSelectedQuiz(data.data[0]);
        }
      })
      .catch((err) => setError('Erro ao carregar quizzes.'))
      .finally(() => setLoading(false));
  }, [segmento]);

  // Seleciona questões com base na dificuldade
  const getQuestionsByDifficulty = (questions: Question[], dificuldade: 'basica' | 'intermediaria' | 'dificil', count: number) => {
    const filteredQuestions = questions.filter((q) => q.dificuldade === dificuldade);
    const shuffled = filteredQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Atualiza as questões filtradas quando o quiz selecionado ou dificuldade mudam
  useEffect(() => {
    if (selectedQuiz) {
      try {
        // Seleciona apenas as questões para o nível atual de dificuldade
        const questionsForCurrentDifficulty = getQuestionsByDifficulty(selectedQuiz.questions, dificuldade, 5);
        
        // Atualiza o estado apenas com as questões do nível atual
        setFilteredQuestions(questionsForCurrentDifficulty);
        
        // Resetar o progresso quando a dificuldade mudar
        setCurrentQuestion(0);
        setSubmitted(false);
        setAnswers({});
        setJustificationAnswers({});
        setResult({ correct: [], incorrect: [] });
        setShowResults(false);
        setQuizCompleted(false);
        
        console.log(`Quiz carregado: ${questionsForCurrentDifficulty.length} questões de nível ${dificuldade}`);
      } catch (error) {
        console.error("Erro ao carregar questões:", error);
        setError('Erro ao carregar as questões do quiz.');
      }
    }
  }, [selectedQuiz, dificuldade]);

  const handleAnswer = (questionId: string, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleJustificationAnswer = (questionId: string, text: string) => {
    setJustificationAnswers((prev) => ({ ...prev, [questionId]: text }));
  };

  const handleNextQuestion = () => {
    if (filteredQuestions && currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const resetQuiz = () => {
    setSubmitted(false);
    setAnswers({});
    setJustificationAnswers({});
    setResult({ correct: [], incorrect: [] });
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const handleSubmit = async () => {
    if (!selectedQuiz) return;

    // Verifica respostas corretas e incorretas
    const correct: string[] = [];
    const incorrect: string[] = [];

    filteredQuestions.forEach((q) => {
      if (q.type === 'multiple_choice' || q.type === 'true_false') {
        const answer = answers[q.id];
        if (answer) {
          const correctOption = q.options.find((opt) => opt.isCorrect);
          if (correctOption && correctOption.id === answer) {
            correct.push(q.id);
          } else {
            incorrect.push(q.id);
          }
        } else {
          incorrect.push(q.id);
        }
      } else if (q.type === 'justification') {
        const answer = justificationAnswers[q.id];
        if (answer && validateJustificationAnswer(q, answer)) {
          correct.push(q.id);
        } else {
          incorrect.push(q.id);
        }
      }
    });

    // Atualiza o contador de respostas corretas
    setCorrectAnswersCount(correct.length);
    setResult({ correct, incorrect });
    setSubmitted(true);
    setFeedbackVisible(true);
    setQuizCompleted(true);

    // Se for a última questão e já estiver submetido, vá direto para os resultados
    if (currentQuestion === filteredQuestions.length - 1) {
      setShowResults(true);
    }

    // Envia as respostas para o backend
    try {
      await fetch('/api/quiz-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quizId: selectedQuiz._id,
          answers,
          justificationAnswers,
          correct,
          incorrect,
          segmento,
          dificuldade
        }),
      });
    } catch (error) {
      console.error('Erro ao enviar respostas:', error);
    }
  };

  // Valida se a resposta de justificativa contém as palavras-chave necessárias
  const validateJustificationAnswer = (question: Question, answer: string): boolean => {
    if (!question.keywords || question.keywords.length === 0) return false;
    
    // Normaliza a resposta (remove acentos, converte para minúsculas)
    const normalizedAnswer = answer
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    
    // Conta quantas palavras-chave estão presentes na resposta
    const keywordsPresent = question.keywords.filter(keyword => {
      const normalizedKeyword = keyword
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      
      return normalizedAnswer.includes(normalizedKeyword);
    });
    
    // Considera correta se pelo menos 50% das palavras-chave estiverem presentes (reduzido de 70%)
    const threshold = Math.ceil(question.keywords.length * 0.5);
    return keywordsPresent.length >= threshold;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-solid"></div>
      </div>
    );
  }

  if (error) {
    return (
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center"
      >
        <p className="font-semibold">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-2 px-4 py-2 bg-red-100 hover:bg-red-200 rounded-lg transition-all duration-300"
        >
          Tentar novamente
        </button>
      </motion.div>
    );
  }

  // Componente principal do quiz
  if (selectedQuiz) {
    const currentQ = filteredQuestions[currentQuestion];
    const isMultipleChoice = currentQ?.type === 'multiple_choice' || currentQ?.type === 'true_false';
    const isJustification = currentQ?.type === 'justification';
    const isCorrect = submitted && result.correct.includes(currentQ?.id);
    const isIncorrect = submitted && result.incorrect.includes(currentQ?.id);
    const difficultyLabels = {
      'basica': 'Básica',
      'intermediaria': 'Intermediária', 
      'dificil': 'Difícil'
    };

    // Encontrar a opção correta para questões de múltipla escolha
    const correctOption = isMultipleChoice ? currentQ?.options.find(o => o.isCorrect) : null;

    return (
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="space-y-6 p-4 sm:p-6 bg-white rounded-xl border border-gray-200 shadow-lg max-w-4xl mx-auto relative overflow-hidden"
      >
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-blue-700"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-blue-50 z-0 hidden sm:block"></div>
        <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-blue-50 z-0 hidden sm:block"></div>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-gray-200 pb-4 relative z-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 leading-tight">{selectedQuiz.title}</h2>
            <p className="text-sm sm:text-base text-gray-600">{selectedQuiz.description}</p>
          </div>
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
            Dificuldade: {difficultyLabels[dificuldade]}
          </div>
        </div>

        {!showResults ? (
          <motion.div 
            key={currentQ?.id} 
            initial="hidden" 
            animate="visible" 
            variants={slideIn}
            className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-100 relative z-10"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-blue-600">
                Questão {currentQuestion + 1} de {filteredQuestions.length}
              </span>
              <span className={`px-2 py-1 text-xs rounded-full ${
                currentQ?.dificuldade === 'basica' ? 'bg-green-100 text-green-800' : 
                currentQ?.dificuldade === 'intermediaria' ? 'bg-yellow-100 text-yellow-800' : 
                'bg-red-100 text-red-800'
              }`}>
                {difficultyLabels[currentQ?.dificuldade]}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">{currentQ?.question}</h3>
            
            {isMultipleChoice && (
              <div className="space-y-3 mt-4">
                {currentQ?.options.map((o) => (
                  <motion.div
                    key={o.id}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <label className={`flex items-start p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      answers[currentQ?.id] === o.id 
                        ? 'bg-blue-50 border-2 border-blue-500'
                        : submitted && o.isCorrect
                        ? 'bg-green-50 border-2 border-green-500'
                        : submitted && answers[currentQ?.id] === o.id && !o.isCorrect
                        ? 'bg-red-50 border-2 border-red-500'
                        : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                    }`}>
                      <input
                        type="radio"
                        name={currentQ?.id}
                        value={o.id}
                        checked={answers[currentQ?.id] === o.id}
                        onChange={() => handleAnswer(currentQ?.id, o.id)}
                        disabled={submitted}
                        className="mr-3 mt-1"
                      />
                      <span className="text-gray-800 text-sm sm:text-base">{o.text}</span>
                      {submitted && o.isCorrect && (
                        <span className="ml-auto text-green-600 font-medium flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="hidden sm:inline">Correta</span>
                        </span>
                      )}
                      {submitted && answers[currentQ?.id] === o.id && !o.isCorrect && (
                        <span className="ml-auto text-red-600 font-medium flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          <span className="hidden sm:inline">Incorreta</span>
                        </span>
                      )}
                    </label>
                  </motion.div>
                ))}
              </div>
            )}

            {isJustification && (
              <div className="mt-4">
                <textarea
                  value={justificationAnswers[currentQ?.id] || ''}
                  onChange={(e) => handleJustificationAnswer(currentQ?.id, e.target.value)}
                  disabled={submitted}
                  placeholder="Digite sua resposta aqui..."
                  className={`w-full p-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 h-32 sm:h-40 transition-all duration-200 text-gray-800 ${
                    submitted ? 
                      (isCorrect ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50') : 
                      'border-gray-300'
                  }`}
                />
                {submitted && (
                  <div className="mt-3 px-3 py-2 rounded-lg text-sm">
                    {isCorrect ? (
                      <div className="flex items-start text-green-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>
                          <strong>Resposta correta!</strong> Sua justificativa contém os principais pontos esperados.
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-start text-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <div className="flex-1">
                          <strong>Resposta incorreta ou incompleta.</strong> Sua justificativa não contém alguns dos pontos importantes esperados.
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {feedbackVisible && submitted && isMultipleChoice && isIncorrect && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 rounded-lg bg-red-50 text-red-800 border border-red-200"
              >
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-medium">Resposta incorreta</div>
                    {correctOption && (
                      <div className="mt-2">
                        <p className="text-sm">A resposta correta é: <span className="font-medium">{correctOption.text}</span></p>
                        <button 
                          onClick={() => setFeedbackVisible(false)} 
                          className="mt-2 text-xs text-red-700 hover:text-red-800 underline"
                        >
                          Fechar feedback
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {feedbackVisible && submitted && isMultipleChoice && isCorrect && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 rounded-lg bg-green-50 text-green-800 border border-green-200"
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-medium">Resposta correta!</span>
                    <button 
                      onClick={() => setFeedbackVisible(false)} 
                      className="ml-3 text-xs text-green-700 hover:text-green-800 underline"
                    >
                      Fechar feedback
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={scaleUp}
            className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-100 relative z-10"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6 text-center">
              Resultado - Nível {difficultyLabels[dificuldade]}
            </h3>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-blue-50 p-3 sm:p-4 rounded-xl w-full sm:w-1/3 text-center border border-blue-100">
                <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-1 sm:mb-2">{result.correct.length}</div>
                <div className="text-blue-800 text-sm sm:text-base">Acertos</div>
              </div>
              
              <div className="bg-red-50 p-3 sm:p-4 rounded-xl w-full sm:w-1/3 text-center border border-red-100">
                <div className="text-4xl sm:text-5xl font-bold text-red-500 mb-1 sm:mb-2">
                  {filteredQuestions.length - result.correct.length}
                </div>
                <div className="text-red-800 text-sm sm:text-base">Erros</div>
              </div>
              
              <div className="bg-purple-50 p-3 sm:p-4 rounded-xl w-full sm:w-1/3 text-center border border-purple-100">
                <div className="text-4xl sm:text-5xl font-bold text-purple-600 mb-1 sm:mb-2">
                  {Math.round(result.correct.length / filteredQuestions.length * 100)}%
                </div>
                <div className="text-purple-800 text-sm sm:text-base">Aproveitamento</div>
              </div>
            </div>
            
            <div className="text-center">
              {result.correct.length >= 3 ? (
                <div className="text-green-700 text-base sm:text-lg mb-4">
                  {dificuldade === 'dificil' ? (
                    <>🎉 Parabéns! Você completou todos os níveis com sucesso.</>
                  ) : (
                    <>🎉 Excelente! Você está pronto para o próximo nível.</>
                  )}
                </div>
              ) : (
                <div className="text-amber-700 text-base sm:text-lg mb-4">
                  📚 Continue estudando! Tente melhorar seu desempenho antes de avançar para o próximo nível.
                </div>
              )}
            </div>
            
            <div className="mt-6 text-center space-y-3">
              {/* Botão para avançar para o próximo nível */}
              {result.correct.length >= 3 && dificuldade !== 'dificil' && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    // Avança para o próximo nível de dificuldade
                    setDificuldade(dificuldade === 'basica' ? 'intermediaria' : 'dificil');
                    resetQuiz();
                  }}
                  className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
                >
                  Avançar para Nível {difficultyLabels[dificuldade === 'basica' ? 'intermediaria' : 'dificil']}
                </motion.button>
              )}
              
              {/* Botão para tentar novamente o mesmo nível */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  resetQuiz();
                }}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 text-green-700 font-medium text-sm sm:text-base rounded-lg hover:from-green-100 hover:to-green-200 transition-all duration-300 shadow-sm"
              >
                Tentar Novamente Nível {difficultyLabels[dificuldade]}
              </motion.button>
              
              {/* Botão para voltar à seleção de quiz */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedQuiz(null);
                  resetQuiz();
                  setDificuldade('basica');
                }}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-50 to-indigo-100 border border-blue-200 text-blue-700 font-medium text-sm sm:text-base rounded-lg hover:from-blue-100 hover:to-indigo-200 transition-all duration-300 shadow-sm"
              >
                Voltar para Seleção de Quiz
              </motion.button>
            </div>
          </motion.div>
        )}

        <div className="flex justify-between mt-4 sm:mt-6 relative z-10">
          {!showResults && (
            <>
              <button
                onClick={handlePrevQuestion}
                disabled={currentQuestion === 0}
                className={`px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 flex items-center text-sm sm:text-base ${
                  currentQuestion === 0 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                <span className="hidden xs:inline">Anterior</span>
              </button>

              {!submitted ? (
                <button
                  onClick={currentQuestion === filteredQuestions.length - 1 ? handleSubmit : handleNextQuestion}
                  disabled={!answers[currentQ?.id] && !justificationAnswers[currentQ?.id] && !isJustification}
                  className={`px-3 sm:px-5 py-2 rounded-lg transition-all duration-300 flex items-center text-sm sm:text-base ${
                    (!answers[currentQ?.id] && !justificationAnswers[currentQ?.id] && !isJustification)
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : currentQuestion === filteredQuestions.length - 1
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  <span>{currentQuestion === filteredQuestions.length - 1 ? 'Finalizar' : 'Próxima'}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-5.293-5.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="px-3 sm:px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center text-sm sm:text-base"
                >
                  <span>{currentQuestion === filteredQuestions.length - 1 ? 'Ver Resultados' : 'Próxima'}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-5.293-5.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </>
          )}
        </div>

        {!submitted && !showResults && (
          <div className="mt-2 sm:mt-4 text-center relative z-10">
            <p className="text-xs sm:text-sm text-gray-500">
              {currentQuestion + 1} de {filteredQuestions.length} questões • 
              {answers[currentQ?.id] || justificationAnswers[currentQ?.id] 
                ? ' Resposta selecionada' 
                : ' Selecione uma resposta para continuar'}
            </p>
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="space-y-4 sm:space-y-6 max-w-4xl mx-auto px-4 sm:px-0"
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-white">Escolha um Quiz</h1>
      
      {quizzes.length === 0 && (
        <div className="p-4 sm:p-8 bg-white/90 backdrop-blur-sm rounded-xl text-center shadow-lg">
          <p className="text-blue-900">Não há quizzes disponíveis para este segmento.</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 gap-4">
        {quizzes.map((quiz) => (
          <motion.button
            key={quiz._id}
            onClick={() => setSelectedQuiz(quiz)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full text-left p-4 sm:p-6 bg-white rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-200 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-blue-50 z-0 hidden sm:block"></div>
            <h3 className="text-lg sm:text-xl font-semibold text-blue-900 relative z-10">{quiz.title}</h3>
            <p className="text-sm sm:text-base text-gray-600 mt-2 relative z-10">{quiz.description}</p>
            <div className="mt-4 flex justify-between items-center relative z-10">
              <span className="text-xs sm:text-sm text-gray-500">15 questões</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
                Iniciar Quiz
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}