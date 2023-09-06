export function isRelative(url: string) {
  return url && url.match(/^\/[^/\\]/);
}
