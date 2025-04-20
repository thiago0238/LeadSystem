import { type NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const searchQuery = request.nextUrl.searchParams.get("q");

    if (!searchQuery || searchQuery.length < 3) {
      return NextResponse.json(
        { error: "Search query must be at least 3 characters" },
        { status: 400 }
      );
    }

    const leads = await prisma.lead.findMany({
      where: {
        OR: [
          { name: { contains: searchQuery, mode: "insensitive" } },
          { email: { contains: searchQuery, mode: "insensitive" } },
        ],
      },
      include: {
        primaryCourse: true,
      },
      orderBy: {
        name: "asc",
      },
      take: 50, // Limit results
    });

    return NextResponse.json(leads);
  } catch (error) {
    console.error("Error searching leads:", error);
    return NextResponse.json(
      { error: "Failed to search leads" },
      { status: 500 }
    );
  }
}
