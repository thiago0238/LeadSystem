import { type NextRequest, NextResponse } from "next/server";
import { callMoodleApiPost } from "../config";
import { Gradereport_user_get_grade_items } from "@/types";

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
    const cusosDisponiveis = [];
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
      const grades: Gradereport_user_get_grade_items = await callMoodleApiPost(
        "gradereport_user_get_grade_items",
        {
          courseid: curso.id,
        }
      );

      if (!grades.usergrades) return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );

      for (const grade of grades.usergrades) {
          const finalGrade = grade?.gradeitems?.find(
            (item: any) => item.itemtype === "course"
          );

          if (finalGrade) {
            const notaFinal = parseFloat(
              (finalGrade.gradeformatted || "0").replace(",", ".")
            );
            const minGrade = 60.0;

            if (notaFinal >= minGrade) {
              aptos += 1;
            } else {
              reprovados += 1;
            }

            const aluno = {
              id: grade?.userid,
              nome: grade?.userfullname,
              nota: notaFinal,
              situacao: notaFinal >= minGrade ? true : false,
              curso: curso.fullname,
              courseId: curso.id,
            };
            resultado.push(aluno);
          }
          notasCursos.push({
            id: curso.id,
            aptos,
            reprovados,
          });
        }
    }

    return NextResponse.json(
      {
        success: true,
        alunos: resultado,
        cursos: cusosDisponiveis,
        notasCursos,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao verificar certificados:", error);
    return NextResponse.json(
      { error: error || "Erro ao processar dados" },
      { status: 500 }
    );
  }
}
