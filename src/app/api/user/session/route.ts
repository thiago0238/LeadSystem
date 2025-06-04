
import prisma from "@/lib/prisma";
import { ParamsToken } from "@/types";
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, { params }: { params: ParamsToken }) {
  // Acesse o parâmetro diretamente do objeto params
  const hd = await params;
  const token = hd.token;

  if (!token) {
    return NextResponse.json(
      { error: "Token não informado" },
      { status: 400 }
    );
  }
  try {
    if (!token) {
      return NextResponse.json({ isAuthenticated: false }, { status: 401 })
    }

    // Busca a sessão no banco de dados
    const session = await prisma.session.findUnique({
      where: { sessionToken: token },
    })
    if (!session) {
      return NextResponse.json({ isAuthenticated: false }, { status: 401 })
    }

    // Verifica se o usuário existe
    const verifyUser = await prisma.user.findUnique({
      where: { id: session.userId },
    })
    if (!verifyUser) {
      // Se o usuário não existir, exclui a sessão
      await prisma.session.delete({
        where: { sessionToken: token },
      })
      return NextResponse.json({ isAuthenticated: false }, { status: 401 })
    }

    // Retorna a resposta de sucesso
    return NextResponse.json(
      {
        isAuthenticated: true,
        userId: session.userId,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Erro ao verificar sessão:", error)
    return NextResponse.json(
      {
        isAuthenticated: false,
        error: "Erro ao verificar sessão",
      },
      { status: 500 },
    )
  }
}


export async function DELETE(req: NextRequest, { params }: { params: ParamsToken }) {
  // Acesse o parâmetro diretamente do objeto params
  const hd = await params;
  const token = hd.token;

  if (!token) {
    return NextResponse.json(
      { error: "Token não informado" },
      { status: 400 }
    );
  }
  try {
    // Busca a sessão no banco de dados
    const session = await prisma.session.findFirst({
      where: { userId: token },
    })
    if (!session) {
      return NextResponse.json({ isAuthenticated: false }, { status: 401 })
    }

    // Exclui a sessão
    await prisma.session.delete({
      where: { sessionToken: session.sessionToken },
    })

    return NextResponse.json(
      {
        isAuthenticated: true,
        message: "Sessão excluída com sucesso",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Erro ao excluir sessão:", error)
    return NextResponse.json(
      {
        isAuthenticated: false,
        error: "Erro ao excluir sessão",
      },
      { status: 500 },
    )
  }
}