import type { NextAuthOptions, Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import { compare } from "bcrypt";
import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { randomUUID } from "crypto";

// Extend Session and User types to include id and role
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
  interface User {
    id: string;
    role?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    password?: string | null;
  }
}


const adapter = PrismaAdapter(prisma)
export const authOptions: NextAuthOptions = {
  adapter,
  session: {
    strategy: "database",
    maxAge: 7 * 24 * 60 * 60, // 7 dias
  },
  pages: {
    signIn: "/login",
    error: "/login?error=true",
  },
   cookies: {
    sessionToken: {
      name: process.env.NODE_ENV === "production" ? `__Secure-next-auth.session-token` : `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Authorizing user with credentials:", credentials);
        if (!credentials?.email || !credentials?.password) {
         throw new Error("Credenciais inválidas")
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        });

         if (!user || !user.password) {
          console.log("User not found:", credentials.email);
          throw new Error("Usuário não encontrado ou método de login inválido")
        }

        const isPasswordValid = await compare(
          credentials.password as string,
          user.password
        );

        if (!isPasswordValid) {
          console.log("Invalid password for user:", credentials.email);
          throw new Error("Senha incorreta")
        }

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name,
        };
        // return {
        //   id: "1",
        //   email: credentials.email,
        //   name: "John Doe",
        // };
      },
    }),
  ],
  
  
  callbacks: {
    async jwt({ token, account }) {
      if (account?.provider === "credentials") {
        token.credentials = true
      }
      return token
    },
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
        session.user.role = user.role as string
      }
      return session;
    },
  },
  jwt: {
    encode: async ({ token }) => {
      if (token?.credentials) {
        const sessionToken = randomUUID()

        if (!token.sub) {
          throw new Error("Usuário não encontrado")
        }

        // Verifica se já existe uma sessão para este usuário
        const existingSession = await prisma.session.findFirst({
          where: {
            userId: token.sub,
          },
        })
        
        if (existingSession) {
          await prisma.session.delete({
            where: {
              sessionToken: existingSession.sessionToken,
            },
          })
        }

        // Cria uma nova sessão
        const createdSession = await adapter?.createSession?.({
          sessionToken: sessionToken,
          userId: token.sub,
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 dias
        })

        if (!createdSession) {
          throw new Error("Sessão não criada")
        }

        return sessionToken
      }

      // Para outros provedores, usa o comportamento padrão
      return JSON.stringify(token)
    },
    decode: async ({ token }) => {
      try {
        // Tenta decodificar como JSON (para outros provedores)
        return JSON.parse(token as string)
      } catch {
        // Se não for JSON, assume que é um sessionToken
        return { sub: "" } // Retorna um token vazio, o NextAuth vai buscar os dados da sessão no banco
      }
    },
  },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
};


