import { type NextRequest, NextResponse } from "next/server"
import { callMoodleApi } from "../../config"

// GET /api/moodle/students/search
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get("query")

    if (!query) {
      return NextResponse.json({ error: "Search query is required" }, { status: 400 })
    }

    // Search for users by name or email
    const users = await callMoodleApi("core_user_search_users", {
      query,
      page: 0,
      perpage: 100,
    })

    return NextResponse.json({ users })
  } catch (error: any) {
    console.error("Error searching students:", error)
    return NextResponse.json({ error: error.message || "Failed to search students" }, { status: 500 })
  }
}

