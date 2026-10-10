import { cacheLife } from "next/cache";

/**
 * Current year, cached so it can be part of the prerendered shell
 * (Cache Components disallows bare `new Date()` during prerendering).
 */
export async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
