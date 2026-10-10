/** Tiny className joiner (avoids pulling in clsx for a one-liner). */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
