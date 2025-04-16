import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { hash } from "bcrypt"

export async function GET() {
  try {
    // Verificar se já existem dados
    const userCount = await prisma.user.count()
    const courseCount = await prisma.course.count()
    const leadCount = await prisma.lead.count()

    // Criar usuário admin se não existir
    if (userCount === 0) {
      const hashedPassword = await hash("admin123", 10)
      await prisma.user.create({
        data: {
          name: "Administrador",
          email: "admin@exemplo.com",
          password: hashedPassword,
        },
      })
      console.log("✅ Usuário admin criado")
    } else {
      console.log("ℹ️ Usuários já existem, pulando criação")
    }

    // Criar cursos se não existirem
    if (courseCount === 0) {
      const courses = [
        {
          name: "Desenvolvimento Web",
          description: "Aprenda HTML, CSS e JavaScript para criar sites modernos e responsivos.",
        },
        { name: "React.js", description: "Desenvolvimento de aplicações modernas com React, Redux e React Hooks." },
        { name: "Node.js", description: "Backend JavaScript com Node.js, Express e MongoDB." },
        {
          name: "Python para Iniciantes",
          description: "Introdução à programação com Python, desde o básico até conceitos avançados.",
        },
        { name: "Data Science", description: "Análise de dados e machine learning com Python, Pandas e Scikit-learn." },
        { name: "UX/UI Design", description: "Princípios de design de interface e experiência do usuário." },
        { name: "Marketing Digital", description: "Estratégias de marketing para o ambiente digital." },
        {
          name: "Gestão de Projetos",
          description: "Metodologias ágeis e tradicionais para gerenciamento de projetos.",
        },
      ]

      await prisma.course.createMany({
        data: courses,
      })
      console.log(`✅ ${courses.length} cursos criados`)
    } else {
      console.log("ℹ️ Cursos já existem, pulando criação")
    }

    // Criar leads de exemplo se não existirem
    if (leadCount === 0) {
      // Primeiro, buscar os IDs dos cursos
      const courses = await prisma.course.findMany({
        select: { id: true },
      })

      if (courses.length === 0) {
        return NextResponse.json({ message: "Nenhum curso encontrado para criar leads" })
      }

      // Dados de exemplo para leads
      const leads = [
        {
          name: "João Silva",
          email: "joao.silva@exemplo.com",
          primaryCourseId: courses[0].id,
          secondaryCourseId: courses[1].id,
          city: "São Paulo",
          state: "SP",
          ipAddress: "192.168.1.1",
        },
        {
          name: "Maria Oliveira",
          email: "maria.oliveira@exemplo.com",
          primaryCourseId: courses[1].id,
          secondaryCourseId: courses[2].id,
          city: "Rio de Janeiro",
          state: "RJ",
          ipAddress: "192.168.1.2",
        },
        {
          name: "Pedro Santos",
          email: "pedro.santos@exemplo.com",
          primaryCourseId: courses[2].id,
          city: "Belo Horizonte",
          state: "MG",
          ipAddress: "192.168.1.3",
        },
        {
          name: "Ana Souza",
          email: "ana.souza@exemplo.com",
          primaryCourseId: courses[3].id,
          secondaryCourseId: courses[4].id,
          city: "Brasília",
          state: "DF",
          ipAddress: "192.168.1.4",
        },
        {
          name: "Carlos Ferreira",
          email: "carlos.ferreira@exemplo.com",
          primaryCourseId: courses[4].id,
          city: "Salvador",
          state: "BA",
          ipAddress: "192.168.1.5",
        },
        {
          name: "Juliana Costa",
          email: "juliana.costa@exemplo.com",
          primaryCourseId: courses[0].id,
          secondaryCourseId: courses[3].id,
          city: "Recife",
          state: "PE",
          ipAddress: "192.168.1.6",
        },
        {
          name: "Roberto Almeida",
          email: "roberto.almeida@exemplo.com",
          primaryCourseId: courses[1].id,
          city: "Fortaleza",
          state: "CE",
          ipAddress: "192.168.1.7",
        },
        {
          name: "Fernanda Lima",
          email: "fernanda.lima@exemplo.com",
          primaryCourseId: courses[2].id,
          secondaryCourseId: courses[5].id,
          city: "Porto Alegre",
          state: "RS",
          ipAddress: "192.168.1.8",
        },
        {
          name: "Ricardo Gomes",
          email: "ricardo.gomes@exemplo.com",
          primaryCourseId: courses[3].id,
          city: "Curitiba",
          state: "PR",
          ipAddress: "192.168.1.9",
        },
        {
          name: "Patrícia Martins",
          email: "patricia.martins@exemplo.com",
          primaryCourseId: courses[4].id,
          secondaryCourseId: courses[0].id,
          city: "Manaus",
          state: "AM",
          ipAddress: "192.168.1.10",
        },
        {
          name: "Lucas Pereira",
          email: "lucas.pereira@exemplo.com",
          primaryCourseId: courses[5].id,
          city: "Florianópolis",
          state: "SC",
          ipAddress: "192.168.1.11",
        },
        {
          name: "Camila Rodrigues",
          email: "camila.rodrigues@exemplo.com",
          primaryCourseId: courses[6].id,
          secondaryCourseId: courses[7].id,
          city: "Goiânia",
          state: "GO",
          ipAddress: "192.168.1.12",
        },
        {
          name: "Marcelo Barbosa",
          email: "marcelo.barbosa@exemplo.com",
          primaryCourseId: courses[7].id,
          city: "Belém",
          state: "PA",
          ipAddress: "192.168.1.13",
        },
        {
          name: "Aline Cardoso",
          email: "aline.cardoso@exemplo.com",
          primaryCourseId: courses[0].id,
          secondaryCourseId: courses[6].id,
          city: "Vitória",
          state: "ES",
          ipAddress: "192.168.1.14",
        },
        {
          name: "Bruno Oliveira",
          email: "bruno.oliveira@exemplo.com",
          primaryCourseId: courses[1].id,
          city: "Natal",
          state: "RN",
          ipAddress: "192.168.1.15",
        },
      ]

      // Criar leads com datas variadas nos últimos 30 dias
      for (const lead of leads) {
        // Gerar data aleatória nos últimos 30 dias
        const daysAgo = Math.floor(Math.random() * 30)
        const createdAt = new Date()
        createdAt.setDate(createdAt.getDate() - daysAgo)

        await prisma.lead.create({
          data: {
            ...lead,
            createdAt,
          },
        })
      }

      console.log(`✅ ${leads.length} leads criados`)
    } else {
      console.log("ℹ️ Leads já existem, pulando criação")
    }

    // Criar alguns certificados de exemplo
    const certificateCount = await prisma.certificate.count()

    if (certificateCount === 0) {
      // Buscar alguns leads aleatórios
      const leads = await prisma.lead.findMany({
        take: 5,
        select: { id: true, primaryCourseId: true },
      })

      if (leads.length > 0) {
        for (const lead of leads) {
          // Gerar data aleatória nos últimos 15 dias
          const daysAgo = Math.floor(Math.random() * 15)
          const sentAt = new Date()
          sentAt.setDate(sentAt.getDate() - daysAgo)

          await prisma.certificate.create({
            data: {
              leadId: lead.id,
              courseId: lead.primaryCourseId,
              sentAt,
              pdfUrl: `certificate_${lead.id}_${lead.primaryCourseId}.pdf`,
            },
          })
        }

        console.log(`✅ ${leads.length} certificados criados`)
      }
    } else {
      console.log("ℹ️ Certificados já existem, pulando criação")
    }

    return NextResponse.json({
      message: "Seed concluído com sucesso",
      stats: {
        users: await prisma.user.count(),
        courses: await prisma.course.count(),
        leads: await prisma.lead.count(),
        certificates: await prisma.certificate.count(),
      },
    })
  } catch (error) {
    console.error("Erro ao executar seed:", error)
    return NextResponse.json({ error: "Falha ao executar seed", details: error }, { status: 500 })
  }
}

