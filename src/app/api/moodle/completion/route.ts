import { type NextRequest, NextResponse } from "next/server"
import { callMoodleApi } from "../config"

// GET /api/moodle/completion
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const userId = searchParams.get("userId")
    const courseId = searchParams.get("courseId")

    if (!userId || !courseId) {
      return NextResponse.json({ error: "User ID and Course ID are required" }, { status: 400 })
    }

    // Get course completion status for a user
    const completion = await callMoodleApi("core_completion_get_course_completion_status", {
      courseid: courseId,
      userid: userId,
    })

    return NextResponse.json({ completion })
  } catch (error: any) {
    console.error("Error fetching completion status:", error)
    return NextResponse.json({ error: error.message || "Failed to fetch completion status" }, { status: 500 })
  }
}

// POST /api/moodle/completion
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, courseId, completed } = body

    if (!userId || !courseId) {
      return NextResponse.json({ error: "User ID and Course ID are required" }, { status: 400 })
    }

    // Update course completion status
    const result = await callMoodleApi("core_completion_update_course_completion_status", {
      courseid: courseId,
      userid: userId,
      completed: completed === true || completed === "true",
    })

    return NextResponse.json({ success: true, result })
  } catch (error: any) {
    console.error("Error updating completion status:", error)
    return NextResponse.json({ error: error.message || "Failed to update completion status" }, { status: 500 })
  }
}

