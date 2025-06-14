import LoginForm from "@/components/login-form";
import { Suspense } from 'react';


export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Área Administrativa
        </h1>
        <Suspense fallback={<div>Carregando...</div>}>
        <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}

