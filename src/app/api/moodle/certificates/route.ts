import { type NextRequest, NextResponse } from "next/server";
import { callMoodleApi, callMoodleApiPost } from "../config";
import { use } from "react";
import Email from "next-auth/providers/email";

// GET /api/moodle/certificates
// export async function GET(request: NextRequest) {
//   try {
//     const searchParams = request.nextUrl.searchParams;
//     const userId = searchParams.get("userId");
//     const courseId = searchParams.get("courseId");

//     if (!userId) {
//       return NextResponse.json(
//         { error: "User ID is required" },
//         { status: 400 }
//       );
//     }

//     const params: Record<string, any> = { userid: userId };
//     if (courseId) {
//       params.courseid = courseId;
//     }

//     // Get certificates for a user
//     // Note: This uses the custom certificate module API function
//     const certificates = await callMoodleApi(
//       "mod_customcert_get_issued_certificates",
//       params
//     );

//     return NextResponse.json({ certificates });
//   } catch (error: any) {
//     console.error("Error fetching certificates:", error);
//     return NextResponse.json(
//       { error: error.message || "Failed to fetch certificates" },
//       { status: 500 }
//     );
//   }
// }

export async function GET(req: NextRequest) {
  try {
    const cursos = await callMoodleApiPost("core_course_get_courses", {});
    const resultado: any[] = [];
    const cusosDisponiveis = []
    const notasCursos = [];
    
    
    for (const curso of cursos) {
      let aptos = 0;
      let reprovados = 0;
      if (!curso.id || !curso.fullname) continue;
      const coursos = {
        id: curso.id,
        name: curso.fullname,
      };
      cusosDisponiveis.push(coursos);


      const usuarios = await callMoodleApiPost("core_enrol_get_enrolled_users", {
        courseid: curso.id,
      });
      for (const user of usuarios) {
        console.log(user);
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
            aptos += 1;
          } else {
            reprovados += 1;
          }

          const aluno = {
            id: user.id,
            nome: user.fullname,
            email: user.email,
            nota: grade,
            situacao: grade >= minGrade ? "Apto" : "Reprovado",
            curso: curso.fullname,
            courseId: curso.id,
          };
          resultado.push(aluno);
        }
      }
      notasCursos.push({
        id: curso.id,
       aptos,
        reprovados,
      });
    }

    return NextResponse.json(
      { success: true, alunos: resultado, cursos: cusosDisponiveis, notasCursos },
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

