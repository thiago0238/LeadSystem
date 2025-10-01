import type React from "react";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Formulário",
  description: "Cursos Cead",
  generator: "Cead",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className  }>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";import { icons } from "lucide-react";

