import { type NextRequest, NextResponse } from 'next/server'
import amqp from 'amqplib'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nome, curso, email, studentId, courseId } = body

    if (!nome || !curso || !email || !studentId || !courseId) {
      return NextResponse.json({ error: 'Campos obrigatórios: nome, curso, email.' }, { status: 400 })
    }

    const conn = await amqp.connect('amqps://jcvpvgcv:FlhZEL9y-BSZIiy3HwLug-3QMkUn19Lc@chimpanzee.rmq.cloudamqp.com/jcvpvgcv')
    const channel = await conn.createChannel()
    const queue = 'fila-certificados'

    await channel.assertQueue(queue, { durable: true })

    const payload = { nome, curso, email, studentId, courseId }
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(payload)), { persistent: true })

    await channel.close()
    await conn.close()

    return NextResponse.json({ message: 'Certificado enviado para processamento.', data: payload, success: true }, { status: 200 })
  } catch (err) {
    console.error('Erro ao enviar para a fila:', err)
    return NextResponse.json({ error: 'Erro interno ao enviar para a fila.', success: false }, { status: 500 })
  }
}
