export function setCssVariable(cssVariableName: string, value: string) {
  document.body.style.setProperty(cssVariableName, value);
}
