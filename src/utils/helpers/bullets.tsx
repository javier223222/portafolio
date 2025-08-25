export const toBullets = (text: string) =>
  text
    .split('. ')
    .map(s => s.trim().replace(/\.$/, ''))
    .filter(Boolean);
