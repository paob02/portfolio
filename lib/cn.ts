/** Joins class names, dropping falsy values — lets components write conditional classes inline. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
