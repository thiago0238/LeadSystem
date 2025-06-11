"use server";

import { revalidatePath } from "next/cache";
import { getClientIp } from "@/lib/utils";
import { headers } from "next/headers";
import { Dashboard } from "@/types/dashboard/model";

type LeadInput = {
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  primaryCourseId: number;
  secondaryCourseId?: number;
};

export async function submitLead(data: LeadInput) {
  try {
    // Get IP address from headers
    const headersList = headers();
    const ipAddress = getClientIp(await headersList) || null;

    // Get geolocation data (city/state) - this would require a geolocation service
    // For now, we'll leave these fields empty
    const leadData = await fetch(
      "http://localhost:3000/api/moodle/students/create",
      {
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
      }
    );
    // if (!leadData.ok)
    //   await prisma.lead.create({
    //     data: {
    //       name: data.firstname,
    //       email: data.email,
    //       primaryCourseId: data.primaryCourseId,
    //       secondaryCourseId: data.secondaryCourseId,
    //       ipAddress,
    //     },
    //   });

    revalidatePath("http://localhost:9090/moodle/login/index.php");
    return { success: true };
  } catch (error) {
    console.error("Error submitting lead:", error);
    return { success: false, error: "Failed to submit lead" };
  }
}

export async function getLeadStats() {
  try {
    // Get all students
    const response = await fetch("http://localhost:3000/api/moodle/certificates", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responsedata = await response.json();
    // const data = decryptJSON(responsedata.encrypted);
    if (!responsedata.success) {
      throw new Error("Failed to fetch students");
    }
    
    return {
          success: true,
          totalStudents: responsedata.alunos.length,
          course: responsedata.cursos,
          students: responsedata.alunos,
          notasCursos: responsedata.notasCursos,
        };
  } catch (error) {
    console.error("Error fetching students:", error);
    return { success: false, error: "Failed to fetch students" };
  }
}
export async function getDashboard() {
  try {
    // Get all students
    const response = await fetch("http://localhost:3000/api/moodle/dashboard", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responsedata: Dashboard[] = await response.json();
    // const data = decryptJSON(responsedata.encrypted);
    if (!responsedata) {
      throw new Error("Failed to fetch students");
    }
    
    return {
          success: true,
          responsedata: responsedata,
        };
  } catch (error) {
    console.error("Error fetching students:", error);
    return { success: false, error: "Failed to fetch students" };
  }
}
