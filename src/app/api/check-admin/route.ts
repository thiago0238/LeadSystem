import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { hash } from "bcrypt";

export async function GET() {
  try {
    // Check if admin user exists
    const adminUser = await prisma.user.findFirst({
      where: {
        email: "admin@exemplo.com",
      },
    });

    if (adminUser) {
      return NextResponse.json({
        message: "Admin user exists",
        exists: true,
      });
    }

    // Create admin user if it doesn't exist
    const hashedPassword = await hash("admin123", 10);
    const newAdmin = await prisma.user.create({
      data: {
        name: "Administrador",
        email: "admin@exemplo.com",
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      message: "Admin user created",
      exists: false,
      created: true,
      id: newAdmin.id,
    });
  } catch (error) {
    console.error("Error checking/creating admin:", error);
    return NextResponse.json(
      { error: "Failed to check/create admin user", details: String(error) },
      { status: 500 }
    );
  }
}
