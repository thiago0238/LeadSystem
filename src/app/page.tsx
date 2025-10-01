import PublicForm from "@/components/public-form";
import { Suspense } from 'react';


export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md">
        <Suspense fallback={<div>Carregando...</div>}>
        
        <PublicForm />
        </Suspense>
      </div>
    </div>
  );
}

