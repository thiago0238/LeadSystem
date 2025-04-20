"use client";

import PublicForm from "@/components/public-form";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Cadastro de Interesse
        </h1>
        <PublicForm />
      </div>
    </main>
  );
}
