"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { getClientIp } from "@/lib/utils"
import { headers } from "next/headers"

type LeadInput = {
  firstname: string
  lastname: string
  password: string
  email: string
  primaryCourseId: number
  secondaryCourseId?: number
}

export async function submitLead(data: LeadInput) {
  try {
    // Get IP address from headers
    const headersList = headers()
    const ipAddress = getClientIp(await headersList) || null

    // Get geolocation data (city/state) - this would require a geolocation service
    // For now, we'll leave these fields empty
    const leadData = await fetch("http://localhost:3000/api/moodle/students/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.email,
        password: data.password, // Use a secure password generation method
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        primaryCourseId: data.primaryCourseId,
        secondaryCourseId: data.secondaryCourseId,
        city: "",
        state: "",
      }),
    })
    if (!leadData.ok) 

    await prisma.lead.create({
      data: {
        name: data.firstname,
        email: data.email,
        primaryCourseId: data.primaryCourseId,
        secondaryCourseId: data.secondaryCourseId,
        ipAddress,
      },
    })

    revalidatePath("http://localhost:9090/moodle/login/index.php")
    return { success: true }
  } catch (error) {
    console.error("Error submitting lead:", error)
    return { success: false, error: "Failed to submit lead" }
  }
}

export async function getLeadStats() {
  try {
    const totalLeads = await prisma.lead.count()

    const courseStats = await prisma.course.findMany({
      select: {
        id: true,
        name: true,
        _count: {
          select: {
            primaryLeads: true,
            secondaryLeads: true,
          },
        },
      },
    })

    // Format course stats
    const formattedCourseStats = courseStats.map((course) => ({
      id: course.id,
      name: course.name,
      primaryCount: course._count.primaryLeads,
      secondaryCount: course._count.secondaryLeads,
      totalCount: course._count.primaryLeads + course._count.secondaryLeads,
    }))

    return {
      success: true,
      totalLeads,
      courseStats: formattedCourseStats,
    }
  } catch (error) {
    console.error("Error getting lead stats:", error)
    return { success: false, error: "Failed to get lead statistics" }
  }
}

