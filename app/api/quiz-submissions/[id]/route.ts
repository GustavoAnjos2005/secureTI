import { connectToDatabase } from '../../../../lib/mongodb';
import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { db } = await connectToDatabase();
  const submission = await db.collection('quiz-submissions').findOne({ _id: new ObjectId(params.id) });
  return submission 
    ? NextResponse.json({ success: true, data: submission })
    : NextResponse.json({ success: false, message: 'Não encontrado' }, { status: 404 });
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { db } = await connectToDatabase();
  const updatedSubmission = await request.json();
  await db.collection('quiz-submissions').updateOne({ _id: new ObjectId(params.id) }, { $set: { ...updatedSubmission, updatedAt: new Date() } });
  return NextResponse.json({ success: true });
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const { db } = await connectToDatabase();
  await db.collection('quiz-submissions').deleteOne({ _id: new ObjectId(params.id) });
  return NextResponse.json({ success: true });
}
