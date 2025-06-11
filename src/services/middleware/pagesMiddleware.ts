import { NextRequest, NextResponse } from "next/server";
export const pagesMiddleware = async (req: NextRequest) => {
  // const cookieName =
  //   process.env.NODE_ENV === "production" || process.env.VERCEL_ENV === "preview"
  //     ? process.env.PROD_COOKIE
  //     : process.env.DEV_COOKIE

  let token = req.cookies.get(process.env.PROD_COOKIE as string|| "")
  if (!token) {
    token = req.cookies.get(process.env.DEV_COOKIE as string || "")
  }
  const pathname = req.nextUrl.pathname

  if (!token) {
    if (pathname.includes("/admin")) {
      return NextResponse.redirect(new URL("/login", req.url))
    }
    return NextResponse.next()
  }

  try {
    const response = await fetch(new URL(`/api/user/session/${token.value}`, req.url))

    if (!response.ok) {
      console.error("Erro na resposta da API:", response.status)
      if (pathname.includes("/admin")) {
        return NextResponse.redirect(new URL("/login", req.url))
      }
      return NextResponse.next()
    }

    const data = await response.json()
    const { isAuthenticated } = data

    console.log("Autenticado:", isAuthenticated)

    if (!isAuthenticated && pathname.includes("/admin")) {
      return NextResponse.redirect(new URL("/login", req.url))
    }

    if (isAuthenticated && pathname === "/login") {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url))
    }
  } catch (error) {
    console.error("Erro ao verificar sessão:", error)
    if (pathname.includes("/admin")) {
      return NextResponse.redirect(new URL("/login", req.url))
    }
  }

  return NextResponse.next()
}
