export function konamiCodeHandler(cb: () => void) {
  const pattern = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
  ];

  let current = 0;

  return (e: KeyboardEvent) => {
    if (pattern.indexOf(e.key) < 0 || e.key !== pattern[current]) {
      current = 0;

      return;
    }

    current++;

    if (pattern.length === current) {
      current = 0;

      cb();
    }
  };
}
