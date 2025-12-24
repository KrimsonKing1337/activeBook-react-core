export function setCssVariable(cssVariableName: string, value: string) {
  document.documentElement.style.setProperty(cssVariableName, value);
}
