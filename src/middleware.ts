// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// import { verifyJwt } from '@/lib/auth';

// export async function middleware(req: NextRequest) {
//   const { url, nextUrl, cookies } = req;
//   const { value: token } = cookies.get('token') ?? { value: null };

//   const pathname = nextUrl.pathname;
//   const hasVerifiedToken = token && (await verifyJwt(token));

//   const isLoginPage = pathname.startsWith('/login');

//   if (hasVerifiedToken && isLoginPage) {
//     return NextResponse.redirect(new URL('/', url));
//   }

//   if (!hasVerifiedToken && !isLoginPage) {
//     const searchParams = new URLSearchParams(nextUrl.searchParams);
//     searchParams.set('next', nextUrl.pathname);

//     cookies.delete('token');

//     return NextResponse.redirect(new URL(`/login?${searchParams}`, url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)'
// };

export { default } from 'next-auth/middleware';

export const config = {
  matcher: '/((?!login|api|_next/static|_next/image|favicon.ico).*)'
};
