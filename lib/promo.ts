import { site } from "./site";

/** Bumps with the offer text, so a new promo shows even if an old one was dismissed. */
export const promoDismissKey = `promo-dismissed:${site.promo.label}`;

/**
 * Inlined in app/layout.tsx so it runs before first paint: a dismissed promo
 * banner never flashes or shifts the layout on reload.
 */
export const promoDismissScript = `try{if(localStorage.getItem(${JSON.stringify(promoDismissKey)}))document.documentElement.setAttribute("data-promo-dismissed","")}catch(e){}`;
