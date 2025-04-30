import { type NextRequest, NextResponse } from "next/server"
import { callMoodleApiPost } from "../../config"

// POST /api/moodle/students/create
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, password, firstname, lastname, email, primaryCourseId, ...otherFields } = body

    if (!username || !password || !firstname || !lastname || !email) {
      return NextResponse.json(
        { error: "Username, password, firstname, lastname, and email are required" },
        { status: 400 },
      )
    }

    // Create a new user in Moodle - passing parameters exactly as in the curl command
    const response = await callMoodleApiPost("core_user_create_users", {
      "users[0][username]": username,
      "users[0][password]": password,
      "users[0][firstname]": firstname,
      "users[0][lastname]": lastname,
      "users[0][email]": email,
      "users[0][auth]": "manual",
    })


console.log("User creation response:", response)
console.log("User creation response id:", response[0].id)
console.log("User creation response username:", primaryCourseId)
   

      const couser = await callMoodleApiPost("enrol_manual_enrol_users", {
        "enrolments[0][roleid]": 5, // aluno
        "enrolments[0][userid]": response[0].id, // id do usuário criado
        "enrolments[0][courseid]": primaryCourseId, // id do curso
      })
      console.log("Enrolment response:", couser)
  
      
      

    return NextResponse.json({ success: true, response })
  } catch (error: any) {
    console.error("Error creating student:", error)
    return NextResponse.json({ error: error.message || "Failed to create student" }, { status: 500 })
  }
}

