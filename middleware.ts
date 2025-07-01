import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['nl', 'en'],
  defaultLocale: 'nl',
  localeDetection: false
});

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};
