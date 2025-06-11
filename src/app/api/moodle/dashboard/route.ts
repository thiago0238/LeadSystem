import { NextRequest, NextResponse } from "next/server";
import { callMoodleApiPost } from "../config";

export async function GET(req: NextRequest) {
    try {
      const usuarios = await callMoodleApiPost("core_enrol_get_enrolled_users", {
        courseid: 1,
      });
      return NextResponse.json( usuarios, { status: 200 });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
}