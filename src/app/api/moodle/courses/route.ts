import { type NextRequest, NextResponse } from "next/server"
import { callMoodleApi } from "../config"

// GET /api/moodle/courses
export async function GET(request: NextRequest) {
  try {
    // Get all courses or courses by category
    const courses = await callMoodleApi("core_course_get_courses")
    return NextResponse.json(courses, { status: 200 })
  } catch (error: any) {
    console.error("Error fetching courses:", error)
    return NextResponse.json({ error: error.message || "Failed to fetch courses" }, { status: 500 })
  }
}

// POST /api/moodle/courses
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullname, shortname, categoryid, ...otherFields } = body

    if (!fullname || !shortname || !categoryid) {
      return NextResponse.json({ error: "Full name, short name, and category ID are required" }, { status: 400 })
    }

    // Create a new course
    const course = await callMoodleApi("core_course_create_courses", {
      courses: [
        {
          fullname,
          shortname,
          categoryid,
          ...otherFields,
        },
      ],
    })

    return NextResponse.json({ success: true, course }, { status: 201 })
  } catch (error: any) {
    console.error("Error creating course:", error)
    return NextResponse.json({ error: error.message || "Failed to create course" }, { status: 500 })
  }
}

