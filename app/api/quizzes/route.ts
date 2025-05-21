import { connectToDatabase } from '../../../lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const segmento = searchParams.get('segmento');

  const { db } = await connectToDatabase();

  let query = {};
  if (segmento) {
    query = { segmento }; // Filtra pelo segmento
  }

  const quizzes = await db.collection('quizzes').find(query).toArray();
  return NextResponse.json({ success: true, data: quizzes });
}
