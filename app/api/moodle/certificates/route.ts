import { type NextRequest, NextResponse } from "next/server";
import { callMoodleApi, callMoodleApiPost } from "../config";
import { use } from "react";

// GET /api/moodle/certificates
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get("userId");
    const courseId = searchParams.get("courseId");

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const params: Record<string, any> = { userid: userId };
    if (courseId) {
      params.courseid = courseId;
    }

    // Get certificates for a user
    // Note: This uses the custom certificate module API function
    const certificates = await callMoodleApi(
      "mod_customcert_get_issued_certificates",
      params
    );

    return NextResponse.json({ certificates });
  } catch (error: any) {
    console.error("Error fetching certificates:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch certificates" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    // Passo 1: Buscar todos os cursos
    const cursos = await callMoodleApiPost("core_course_get_courses", {});

    const resultado: any[] = [];

    for (const curso of cursos) {
      if (!curso.id || !curso.fullname) continue; // ignora curso inválido

      // Passo 2: Buscar usuários matriculados no curso
      const usuarios = await callMoodleApiPost(
        "core_enrol_get_enrolled_users",
        {
          courseid: curso.id,
        }
      );

      const alunosAptos = [];

      for (const user of usuarios) {
        // Passo 3: Buscar nota do aluno nesse curso
        const isStudent = user.roles?.some(
          (r: any) => r.shortname === "student"
        );
        if (!isStudent) continue;
        const grades = await callMoodleApiPost(
          "gradereport_user_get_grade_items",
          {
            courseid: curso.id,
            userid: user.id,
          }
        );

        const finalGrade = grades?.usergrades?.[0]?.gradeitems?.find(
          (item: any) => item.itemtype === "course"
        );

        if (finalGrade) {
          const grade = parseFloat(
            (finalGrade.gradeformatted || "0").replace(",", ".")
          );
          const minGrade = 6.0;

          if (grade >= minGrade) {
            alunosAptos.push({
              id: user.id,
              nome: user.fullname,
              nota: grade,
            });
          }
        }
      }

      resultado.push({
        curso: curso.fullname,
        cursoId: curso.id,
        alunosAptos,
      });
    }

    return NextResponse.json(
      { success: true, cursos: resultado },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Erro ao verificar certificados:", error);
    return NextResponse.json(
      { error: error.message || "Erro ao processar dados" },
      { status: 500 }
    );
  }
}
