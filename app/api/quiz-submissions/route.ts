import { connectToDatabase } from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const quizId = searchParams.get('quizId');
  const userId = searchParams.get('userId');
  const { db } = await connectToDatabase();

  const query: any = {};
  if (quizId) query.quizId = quizId;
  if (userId) query.userId = userId;

  const submissions = await db.collection('quiz-submissions').find(query).toArray();
  return NextResponse.json({ success: true, data: submissions });
}

export async function POST(request: NextRequest) {
  const { db } = await connectToDatabase();
  const submission = await request.json();

  if (submission.quizId) {
    try {
      const quiz = await db.collection('quizzes').findOne({ _id: new ObjectId(submission.quizId) });
      
      if (quiz) {
        const correct = submission.correct || [];
        const incorrect = submission.incorrect || [];

        // A validação já foi feita no frontend, estamos apenas salvando os resultados
        submission.score = correct.length;
        submission.totalQuestions = quiz.questions.length;
        submission.percentageScore = Math.round((correct.length / quiz.questions.length) * 100);
      }
      
      const result = await db.collection('quiz-submissions').insertOne({ 
        ...submission, 
        createdAt: new Date(),
        segmento: submission.segmento || 'não especificado'
      });
      
      return NextResponse.json({ success: true, data: result }, { status: 201 });
    } catch (error) {
      console.error('Erro ao processar submissão de quiz:', error);
      return NextResponse.json({ success: false, error: 'Erro ao processar submissão' }, { status: 500 });
    }
  } else {
    return NextResponse.json({ success: false, error: 'quizId é obrigatório' }, { status: 400 });
  }
}
