export const isMiddlewareExcluded = (pathname: string) => {
  return (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/404") ||
    (/\.(png|svg|webp|js|css|ico|xml)$/).test(pathname)
  )
}
