export function getIsMobile() {
  return !!(window as any).cordova;
}
