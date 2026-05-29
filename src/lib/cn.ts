export type ClassValue = string | number | false | null | undefined;

/** Tiny class-name joiner (filters out falsy values). */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ');
}
