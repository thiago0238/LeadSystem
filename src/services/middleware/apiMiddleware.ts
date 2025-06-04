import { NextRequest, NextResponse } from 'next/server'

export const apiMiddleware = async (req: NextRequest) => {
  const origin = req.headers.get('origin') || ''
  const referer = req.headers.get('referer') || ''
  const userAgent = req.headers.get('user-agent') || ''

  // Lista de origens permitidas

  console.log(origin, referer, userAgent)
  // Expressões regulares para validar navegadores e Node.js
  const browserRegEx = /(Chrome|Firefox|Safari|Edge|Opera)/i
  const nodeRegEx = /(node|Next.js)/i // Para verificar se é uma requisição de Node.js

  // Verificação de user-agent, permitindo apenas navegadores específicos ou Node.js
  const isValidUserAgent =
    browserRegEx.test(userAgent) || nodeRegEx.test(userAgent)
  console.log(isValidUserAgent)
  // Se a requisição não tem `origin`, `referer` e um user-agent válido, é uma requisição suspeita (bloquear)
  if (!origin && !referer && !isValidUserAgent) {
    return new NextResponse(JSON.stringify({ error: 'Acesso negado' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  // Verifica se a origem ou o referer estão na lista permitida

  // Verifica se o user-agent é válido
  if (!isValidUserAgent) {
    return new NextResponse(JSON.stringify({ error: 'Acesso negado' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  return NextResponse.next()
}