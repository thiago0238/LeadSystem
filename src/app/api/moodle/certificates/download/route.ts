import { type NextRequest, NextResponse } from "next/server"
import { callMoodleApi, moodleConfig } from "../../config"

// GET /api/moodle/certificates/download
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const certificateId = searchParams.get("certificateId")
    const userId = searchParams.get("userId")

    if (!certificateId || !userId) {
      return NextResponse.json({ error: "Certificate ID and User ID are required" }, { status: 400 })
    }

    // Get certificate download URL
    // Note: This uses the custom certificate module API function
    const certificateData = await callMoodleApi("mod_customcert_get_certificate_file", {
      certificateid: certificateId,
      userid: userId,
    })

    if (!certificateData || !certificateData.fileurl) {
      return NextResponse.json({ error: "Certificate file not found" }, { status: 404 })
    }

    // Construct the download URL with the token
    const downloadUrl = `${certificateData.fileurl}?token=${moodleConfig.token}`

    // Redirect to the download URL or return the URL
    return NextResponse.json({ downloadUrl })
  } catch (error: any) {
    console.error("Error downloading certificate:", error)
    return NextResponse.json({ error: error.message || "Failed to download certificate" }, { status: 500 })
  }
}

