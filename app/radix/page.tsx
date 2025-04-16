import RadixPublicForm from "@/components/radix-public-form"

export default function RadixPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Cadastro de Interesse (Radix UI)</h1>
        <RadixPublicForm />
      </div>
    </main>
  )
}

