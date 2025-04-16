import { type NextRequest, NextResponse } from "next/server"
import { callMoodleApi, callMoodleApiPost } from "../config"

// GET /api/moodle/students
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const courseId = searchParams.get("courseId")

    if (!courseId) {
      return NextResponse.json({ error: "Course ID is required" }, { status: 400 })
    }

    // Call Moodle API to get enrolled users (students)
    const students = await callMoodleApi("core_enrol_get_enrolled_users", {
      courseid: courseId,
    })

    return NextResponse.json({ students })
  } catch (error: any) {
    console.error("Error fetching students:", error)
    return NextResponse.json({ error: error.message || "Failed to fetch students" }, { status: 500 })
  }
}

// POST /api/moodle/students
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { courseId, userId, role } = body

    if (!courseId || !userId) {
      return NextResponse.json({ error: "Course ID and User ID are required" }, { status: 400 })
    }

    // Enroll a user in a course
    const result = await callMoodleApiPost("enrol_manual_enrol_users", {
      "enrolments[0][roleid]": 5, // Estudante
      "enrolments[0][userid]": userId,
      "enrolments[0][courseid]": courseId,
    })

    return NextResponse.json({ success: true, result })
  } catch (error: any) {
    console.error("Error enrolling student:", error)
    return NextResponse.json({ error: error.message || "Failed to enroll student" }, { status: 500 })
  }
}

