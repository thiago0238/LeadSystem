import { type NextRequest, NextResponse } from "next/server"
import { callMoodleApi } from "../config"

// GET /api/moodle/categories
export async function GET() {
  try {
    // Get all course categories
    const categories = await callMoodleApi("core_course_get_categories")
    console.log("Fetched categories:", categories)
    return NextResponse.json({ categories })
  } catch (error: any) {
    console.error("Error fetching categories:", error)
    return NextResponse.json({ error: error.message || "Failed to fetch categories" }, { status: 500 })
  }
}

// POST /api/moodle/categories
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, parent, description, ...otherFields } = body

    if (!name) {
      return NextResponse.json({ error: "Category name is required" }, { status: 400 })
    }

    // Create a new course category
    const category = await callMoodleApi("core_course_create_categories", {
      categories: [
        {
          name,
          parent: parent || 0,
          description: description || "",
          ...otherFields,
        },
      ],
    })

    return NextResponse.json({ success: true, category })
  } catch (error: any) {
    console.error("Error creating category:", error)
    return NextResponse.json({ error: error.message || "Failed to create category" }, { status: 500 })
  }
}

