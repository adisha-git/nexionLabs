import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "brand" | "secondary" | "ghost" | "light";

const base =
  "group inline-flex items-center justify-center gap-1.5 rounded-full font-semibold transition-[background-color,color,box-shadow,transform] duration-200 active:translate-y-px";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-[#262a5c] shadow-soft",
  brand: "bg-brand-dark text-white hover:bg-[#3a33d1] shadow-soft",
  secondary: "bg-white text-ink ring-1 ring-ink/10 hover:ring-ink/25 shadow-soft",
  light: "bg-white text-ink hover:bg-lilac",
  ghost: "text-ink hover:text-brand-dark px-1!",
};

const sizes = {
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-12 px-6 text-base",
} as const;

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  size?: keyof typeof sizes;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">;

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  arrow = true,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
      {arrow && <Chevron />}
    </Link>
  );
}

/** Stripe-style chevron that nudges right on hover. */
export function Chevron() {
  return (
    <ChevronRight
      aria-hidden="true"
      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
      strokeWidth={2.5}
    />
  );
}
