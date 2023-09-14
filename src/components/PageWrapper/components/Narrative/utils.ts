// todo: хранить в сторе, брать оттуда
export function getNarrativeElement() {
  return (document.querySelector('[class^="Narrative"]') as HTMLElement);
}
