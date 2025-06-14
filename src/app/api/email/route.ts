import { type NextRequest, NextResponse } from 'next/server'
import amqp from 'amqplib'
import { callMoodleApi, callMoodleApiPost } from '../moodle/config'

interface EmailPayload {
  leadId: string
  courseId: number
  email: string
  nome: string
  curso: string
  nota: number
}[]

export async function POST(req: NextRequest) {
  try {
    const body: EmailPayload = await req.json()

    if (!body || !Array.isArray(body)) {
      return NextResponse.json({ error: 'Formato inválido. Esperado um array de objetos.' }, { status: 400 })
    }

    const conn = await amqp.connect('amqps://jcvpvgcv:FlhZEL9y-BSZIiy3HwLug-3QMkUn19Lc@chimpanzee.rmq.cloudamqp.com/jcvpvgcv')
    const channel = await conn.createChannel()
    const queue = 'fila-certificados'

    for (const item of body) {
      const response = await callMoodleApiPost("core_user_get_users_by_field", {
        field: "id",
        values: [item.leadId]
      })
      item.email = response[0]?.email
    }


    await channel.assertQueue(queue, { durable: true })

    for (const { leadId, courseId, email, nome, curso, nota } of body) {
      const payload = { leadId, courseId, email, nome, curso, nota }
      channel.sendToQueue(queue, Buffer.from(JSON.stringify(payload)), { persistent: true })
    }

    await channel.close()
    await conn.close()

    return NextResponse.json({ message: 'Certificado enviado para processamento.', success: true }, { status: 200 })
  } catch (err) {
    console.error('Erro ao enviar para a fila:', err)
    return NextResponse.json({ error: 'Erro interno ao enviar para a fila.', success: false }, { status: 500 })
  }
}
