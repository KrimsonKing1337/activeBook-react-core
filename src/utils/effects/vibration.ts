export function on(n: number) {
  navigator.vibrate(n);
}

export function off() {
  navigator.vibrate(0);
}
