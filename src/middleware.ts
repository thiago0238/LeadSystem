//middleware.ts
import { apiMiddleware } from "@/services/middleware/apiMiddleware";
import { pagesMiddleware } from "@/services/middleware/pagesMiddleware";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/api"))
   {
    return apiMiddleware(req);
  }
  return pagesMiddleware(req);
}


export const config = {
  matcher: ['/api/:path*', '/((?!api|_next/static|_next/image|favicon.ico).*)']
}
