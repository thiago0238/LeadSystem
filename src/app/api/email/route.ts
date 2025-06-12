import { type NextRequest, NextResponse } from 'next/server'
import amqp from 'amqplib'

interface EmailPayload {
  leadId: string
  cursoId: string
}[]

export async function POST(req: NextRequest) {
  try {
    const body: EmailPayload = await req.json()
    console.log('Recebido payload:', body)

    if (!body || !Array.isArray(body)) {
      return NextResponse.json({ error: 'Formato inválido. Esperado um array de objetos.' }, { status: 400 })
    }

    const conn = await amqp.connect('amqps://jcvpvgcv:FlhZEL9y-BSZIiy3HwLug-3QMkUn19Lc@chimpanzee.rmq.cloudamqp.com/jcvpvgcv')
    const channel = await conn.createChannel()
    const queue = 'fila-certificados'

    await channel.assertQueue(queue, { durable: true })

    body.forEach(({ leadId, cursoId }) => {
      const payload = { leadId, cursoId }
      channel.sendToQueue(queue, Buffer.from(JSON.stringify(payload)), { persistent: true })
    })

    await channel.close()
    await conn.close()

    return NextResponse.json({ message: 'Certificado enviado para processamento.', success: true }, { status: 200 })
  } catch (err) {
    console.error('Erro ao enviar para a fila:', err)
    return NextResponse.json({ error: 'Erro interno ao enviar para a fila.', success: false }, { status: 500 })
  }
}
